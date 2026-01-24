import React from 'react'

export default function Services(){
  const cards = [
    {icon: 'fa-praying-hands', title: 'Daily Prayers', text: 'Join us for morning devotionals and evening prayer sessions.'},
    {icon: 'fa-bible', title: 'Continuous Teaching', text: 'Deep dive into scripture with our weekly bible study groups.'},
    {icon: 'fa-hand-holding-heart', title: 'Bible Study', text: 'Join our outreach programs to help those in need.'},
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Services</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Church Services</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(c=> (
            <div key={c.title} className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 text-center group transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <i className={`fas ${c.icon} text-3xl text-primary group-hover:text-white transition-colors`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4 font-serif">{c.title}</h4>
              <p className="text-gray-500 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
