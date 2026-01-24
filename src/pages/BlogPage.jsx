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

      <main className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back button */}
          <Link to="/#blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest mb-12">
            <i className="fas fa-arrow-left"></i> Back to Blogs
          </Link>

          {/* Header Section - Text Left, Image Right */}
          <header className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            <div className="lg:w-3/5">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-500">By {post.author}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
                    {post.title}
                </h1>
                <p className="text-gray-500 text-xl font-light leading-relaxed italic border-l-4 border-primary/20 pl-6 mb-8">
                    {post.summary}
                </p>
            </div>
            
            <div className="lg:w-2/5 w-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[400px]">
                    <img src={post.mainImg} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>
          </header>

          {/* Content Body */}
          <div className="max-w-4xl">
            <div 
              className="text-gray-600 leading-relaxed text-xl space-y-8 mb-16 font-light"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Interactions Bar */}
            <div className="flex items-center justify-between border-y border-gray-100 py-8 mb-16">
              <div className="flex items-center gap-8">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 transition-all group ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                >
                  <i className={`${liked ? 'fas' : 'far'} fa-heart text-2xl group-hover:scale-110 transition-transform`}></i>
                  <span className="font-bold text-gray-900">{likeCount} <span className="text-gray-400 font-medium">Likes</span></span>
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-all group"
                >
                  <i className="fas fa-share-alt text-2xl group-hover:scale-110 transition-transform"></i>
                  <span className="font-bold text-gray-900">Share</span>
                </button>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            {/* Comments Section */}
            <section id="comments">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-10">
                Comments <span className="text-gray-300 font-sans ml-2">({comments.length})</span>
              </h3>

              {/* Modern Comment Form */}
              <form onSubmit={handleCommentSubmit} className="bg-gray-50 p-8 rounded-3xl mb-16 border border-gray-100">
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    required
                    className="w-full p-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={newComment.user}
                    onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
                  />
                  <textarea 
                    placeholder="Add to the conversation..."
                    required
                    rows="3"
                    className="w-full p-4 rounded-xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={newComment.text}
                    onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                  />
                </div>
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg shadow-primary/10">
                  Post Comment
                </button>
              </form>

              {/* List of Comments */}
              <div className="space-y-10">
                {comments.map((comment, i) => (
                  <div key={i} className="flex gap-4 border-l-2 border-gray-50 pl-6 py-2">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {comment.user.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h5 className="font-bold text-gray-900">{comment.user}</h5>
                        <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{comment.date}</span>
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
      </main>

      <Footer />
    </div>
  )
}
