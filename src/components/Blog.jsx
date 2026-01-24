import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../utils/blogData'

export default function Blog(){
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Blog</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Read the Latest Blog</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(p=> (
            <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow-sm group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden h-64">
                <Link to={`/blog/${p.slug}`} state={{ post: p }}>
                  <img src={p.mainImg} alt="Blog" className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" />
                </Link>
                <div className="absolute top-4 left-4 bg-primary text-white text-center px-3 py-1 rounded shadow-lg">
                  <span className="block text-xl font-bold">{p.date.split(' ')[0]}</span>
                  <span className="text-xs uppercase font-semibold">{p.date.split(' ')[1].replace(',', '')}</span>
                </div>
              </div>
              <div className="p-8">
                <Link to={`/blog/${p.slug}`} state={{ post: p }}>
                   <h4 className="text-xl font-bold mb-3 hover:text-primary transition cursor-pointer font-serif">{p.title}</h4>
                </Link>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{p.summary}</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <Link to={`/blog/${p.slug}`} state={{ post: p }} className="text-primary text-sm font-bold uppercase tracking-widest hover:text-gray-900 transition">Read More</Link>
                  <span className="text-xs text-gray-400 font-semibold uppercase"><i className="fas fa-user-circle mr-1"></i> Admin</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
