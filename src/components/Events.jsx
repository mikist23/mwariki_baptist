import React from 'react'

const events = [
  {day:24, month:'Dec', time:'08:30 AM - 11:30 AM', title:'Christmas Eve Service', place:'Main Sanctuary'},
  {day:31, month:'Dec', time:'10:00 PM - 12:00 AM', title:"New Year's Vigil", place:'Prayer Hall'}
]

export default function Events(){
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Events</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Upcoming Events</h3>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map(e=> (
            <div key={e.title} className="flex flex-col md:flex-row bg-white rounded-lg p-8 hover:shadow-lg transition items-center group cursor-pointer">
              <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                <span className="block text-3xl font-bold text-primary">{e.day} <span className="text-gray-800 text-lg">{e.month}</span></span>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wide">{e.time}</span>
              </div>
              <div className="w-full md:w-2/4 text-center md:text-left mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition font-serif">{e.title}</h4>
                <p className="text-gray-500 text-sm mt-2"><i className="fas fa-map-marker-alt text-primary mr-2"></i>{e.place}</p>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-right">
                <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-bold group-hover:bg-primary group-hover:text-white transition uppercase tracking-wide">Join Us</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
