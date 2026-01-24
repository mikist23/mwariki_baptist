import React from 'react'

const posts = [
  // {title:'Why Faith Generation is Key', img:'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', date:'June 04'},
  // {title:'The Importance of Service', img:'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', date:'May 12'},
  // {title:'Studying the Bible Effectively', img:'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80', date:'April 28'},
  {title:'Why Faith Generation is Key', img:"/images/church image 1.jpg", date:'June 04'},
  {title:'The Importance of Service', img:"/images/church image 1.jpg", date:'May 12'},
  {title:'Studying the Bible Effectively', img:"/images/church image 1.jpg", date:'April 28'},
]

export default function Blog(){
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Blog</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Read the Latest Blog</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(p=> (
            <div key={p.title} className="bg-white rounded-lg overflow-hidden shadow-sm group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden h-64">
                <img src={p.img} alt="Blog" className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white text-center px-3 py-1 rounded shadow-lg">
                  <span className="block text-xl font-bold">{p.date.split(' ')[0]}</span>
                  <span className="text-xs uppercase font-semibold">{p.date.split(' ')[1]}</span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 hover:text-primary transition cursor-pointer font-serif"><a href="#">{p.title}</a></h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">Understanding the roots of our belief systems helps us grow stronger together.</p>
                <div className="flex items-center justify-between border-t pt-4">
                  <a href="#" className="text-primary text-sm font-bold uppercase tracking-widest hover:text-gray-900 transition">Read More</a>
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
