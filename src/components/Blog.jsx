import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../utils/blogData'

export default function Blog() {
  return (
    <section id="blog" className="section-shell bg-surfaceAlt">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-newspaper text-[10px]" aria-hidden="true"></i>
            Insights and Updates
          </span>
          <h2 className="section-title mt-5">Latest Church Blog</h2>
          <p className="section-subtitle">Reflections, discipleship resources, and ministry updates from our leadership team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="card-elevated overflow-hidden">
              <Link to={`/blog/${post.slug}`} state={{ post }}>
                <img src={post.mainImg} alt={post.title} className="w-full h-64 object-cover" loading="lazy" />
              </Link>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-slate-500">{post.date}</p>
                <Link to={`/blog/${post.slug}`} state={{ post }}>
                  <h3 className="font-serif text-2xl font-bold text-ink mt-3 hover:text-primary">{post.title}</h3>
                </Link>
                <p className="text-sm text-muted mt-3 leading-relaxed">{post.summary}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-500">By {post.author}</span>
                  <Link to={`/blog/${post.slug}`} state={{ post }} className="text-primary text-xs font-bold uppercase tracking-widest">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
