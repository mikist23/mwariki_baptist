import React from 'react'

const causes = [
  // {title:'Health Care, Food', raised:'$25,000', goal:'$50,000', pct:40, img:'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
  // {title:'Restore Old Church', raised:'$75,000', goal:'$100,000', pct:75, img:'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
  // {title:'Save Children', raised:'$4,000', goal:'$20,000', pct:20, img:'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
  {title:'Mission', raised:'$25,000', goal:'$50,000', pct:40, img: "/images/church image 1.jpg"},
  {title:'Church Instruments', raised:'$75,000', goal:'$100,000', pct:75, img:"/images/church image 1.jpg"},
  {title:'Save Children', raised:'$4,000', goal:'$20,000', pct:20, img:"/images/church image 1.jpg"},
]

export default function Causes(){
  return (
    <section id="causes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Donate Charity</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Causes Needs Our Help</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map(c=> (
            <div key={c.title} className="bg-white rounded-lg shadow-sm overflow-hidden border">
              <img src={c.img} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-serif">{c.title}</h3>
                <div className="relative w-full bg-gray-200 h-2 rounded-full mb-4">
                  <div className="absolute top-0 left-0 bg-primary h-2 rounded-full" style={{width: `${c.pct}%`}}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mb-6 font-bold uppercase">
                  <span>Raised: <span className="text-primary">{c.raised}</span></span>
                  <span>Goal: <span className="text-gray-900">{c.goal}</span></span>
                </div>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition uppercase text-sm tracking-wide">Donate Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
