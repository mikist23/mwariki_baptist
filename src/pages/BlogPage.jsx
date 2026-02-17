import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts } from '../utils/blogData'

export default function BlogPage() {
  const { slug } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const [post, setPost] = useState(location.state?.post || blogPosts.find((p) => p.slug === slug))
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post?.likes || 0)
  const [comments, setComments] = useState(post?.comments || [])
  const [newComment, setNewComment] = useState({ user: '', text: '' })

  useEffect(() => {
    if (!post) {
      const foundPost = blogPosts.find((p) => p.slug === slug)
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
    setLiked((prev) => !prev)
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({ title: post.title, text: post.summary, url: window.location.href })
        .catch(() => null)
      return
    }

    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard')
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (newComment.user && newComment.text) {
      const comment = {
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      }
      setComments([comment, ...comments])
      setNewComment({ user: '', text: '' })
    }
  }

  return (
    <div className="min-h-screen bg-surfaceAlt">
      <Navbar variant="solid" />

      <main className="pt-32 pb-20 section-wrap max-w-6xl mx-auto">
        <Link to="/#blog" className="text-sm font-bold text-slate-500 hover:text-primary uppercase tracking-widest">
          <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Blog
        </Link>

        <header className="card-elevated mt-6 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-slate-500">{post.date} | By {post.author}</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink font-bold mt-4">{post.title}</h1>
            <p className="text-lg text-muted mt-4 leading-relaxed">{post.summary}</p>
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden">
            <img src={post.mainImg} alt={post.title} className="w-full h-72 object-cover" />
          </div>
        </header>

        <article className="card-elevated mt-6 p-8 md:p-10">
          <div className="text-lg text-muted leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-borderSoft pt-6">
            <button type="button" onClick={handleLike} className={`text-sm font-bold ${liked ? 'text-red-500' : 'text-slate-500'}`}>
              <i className={`${liked ? 'fas' : 'far'} fa-heart mr-2`} aria-hidden="true"></i>{likeCount} Likes
            </button>
            <button type="button" onClick={handleShare} className="btn-secondary">Share</button>
          </div>
        </article>

        <section id="comments" className="card-elevated mt-6 p-8 md:p-10">
          <h2 className="font-serif text-3xl text-ink font-bold">Comments ({comments.length})</h2>
          <form onSubmit={handleCommentSubmit} className="mt-6 space-y-3">
            <input
              type="text"
              className="input-shell"
              placeholder="Your name"
              value={newComment.user}
              onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
              required
            />
            <textarea
              rows="4"
              className="input-shell"
              placeholder="Share your reflection"
              value={newComment.text}
              onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
              required
            />
            <button type="submit" className="btn-primary">Post Comment</button>
          </form>

          <div className="mt-8 space-y-5">
            {comments.map((comment, index) => (
              <article key={`${comment.user}-${index}`} className="border border-borderSoft rounded-2xl p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-ink">{comment.user}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500">{comment.date}</p>
                </div>
                <p className="text-sm text-muted mt-2">{comment.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
