import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../utils/blogData'

export default function BlogPage() {
  const { slug } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  
  // Try to get post from state first, otherwise find it in data
  const [post, setPost] = useState(location.state?.post || blogPosts.find(p => p.slug === slug))
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post?.likes || 0)
  const [comments, setComments] = useState(post?.comments || [])
  const [newComment, setNewComment] = useState({ user: '', text: '' })

  useEffect(() => {
    if (!post) {
      const foundPost = blogPosts.find(p => p.slug === slug)
      if (foundPost) {
        setPost(foundPost)
        setLikeCount(foundPost.likes)
        setComments(foundPost.comments)
      } else {
        navigate('/')
      }
    }
    window.scrollTo(0, 0)
  }, [slug, post, navigate])

  if (!post) return null

  const handleLike = () => {
    if (!liked) {
      setLikeCount(prev => prev + 1)
      setLiked(true)
    } else {
      setLikeCount(prev => prev - 1)
      setLiked(false)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(console.error)
    } else {
      alert('Link copied to clipboard: ' + window.location.href)
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.user && newComment.text) {
      const comment = {
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      }
      setComments([comment, ...comments])
      setNewComment({ user: '', text: '' })
    }
  }

  return (
    <div className="font-sans text-gray-800 antialiased bg-white min-h-screen">
      <Navbar solid={true} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Link */}
          <Link to="/#blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:text-gray-900 transition-colors">
            <i className="fas fa-arrow-left"></i> Back to Blogs
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-primary font-bold uppercase tracking-widest mb-4">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              <span>By {post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8">
              {post.title}
            </h1>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <img src={post.mainImg} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </header>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12">
              <div 
                className="text-gray-600 leading-relaxed text-lg mb-12 space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Gallery Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {post.gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden h-64 shadow-md mt-4">
                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-12">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 transition-colors ${liked ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
                  >
                    <i className={`${liked ? 'fas' : 'far'} fa-heart text-2xl`}></i>
                    <span className="font-bold">{likeCount} Likes</span>
                  </button>
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <i className="fas fa-share-alt text-2xl"></i>
                    <span className="font-bold">Share</span>
                  </button>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"><i className="fab fa-twitter"></i></a>
                </div>
              </div>

              {/* Comments Section */}
              <section id="comments">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                  Comments ({comments.length})
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="bg-gray-50 p-8 rounded-2xl mb-12">
                  <h4 className="text-lg font-bold mb-4">Leave a Comment</h4>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      required
                      className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none"
                      value={newComment.user}
                      onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
                    />
                    <textarea 
                      placeholder="Share your thoughts..."
                      required
                      rows="4"
                      className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-primary/20 outline-none"
                      value={newComment.text}
                      onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                    />
                  </div>
                  <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg">
                    Post Comment
                  </button>
                </form>

                {/* Comments List */}
                <div className="space-y-8">
                  {comments.map((comment, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h5 className="font-bold text-gray-900">{comment.user}</h5>
                          <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">{comment.date}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
