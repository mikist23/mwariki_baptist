import React from 'react'

const events = [
  {
    day:24, 
    month:'Dec', 
    time:'08:30 AM - 11:30 AM', 
    title:'Christmas Eve Candlelight Service', 
    place:'Main Sanctuary',
    description: 'Celebrate the birth of our Savior with candlelight service, carols, and communion.',
    image: '/images/church image 1.jpg'
  },
  {
    day:31, 
    month:'Dec', 
    time:'10:00 PM - 12:00 AM', 
    title:"New Year's Eve Service", 
    place:'Main Sanctuary',
    description: 'Join us for a night of prayer, reflection, and celebration as we welcome the new year in God\'s presence.',
    image: 'https://picsum.photos/seed/church-new-year/800/600.jpg'
  },
  {
    day:7, 
    month:'Jan', 
    time:'09:00 AM - 11:00 AM', 
    title:'Baptism Sunday', 
    place:'Main Sanctuary',
    description: 'Special service for those wishing to be baptized and celebrate their faith journey with our church family.',
    image: '/images/sermon 1.jpeg'
  },
  {
    day:14, 
    month:'Jan', 
    time:'06:30 PM - 08:00 PM', 
    title:'Community Prayer Fellowship', 
    place:'Fellowship Hall',
    description: 'Monthly gathering for prayer, testimony sharing, and spiritual fellowship with our church community.',
    image: 'https://picsum.photos/seed/church-fellowship/800/600.jpg'
  }
]

export default function Events(){
  return (
    <section id="events" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-calendar-alt text-xs animate-pulse"></i>
            <span>Upcoming Events</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience fellowship, worship, and spiritual growth at our upcoming gatherings
          </p>
        </div>

        {/* Events Timeline/Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Featured Event */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer transform hover:scale-102 transition-all duration-500">
              {/* Event Image */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={events[0].image} 
                  alt={events[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-primary to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Featured Event
                  </span>
                </div>

                {/* Date Overlay on Image */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-primary">{events[0].day}</span>
                      <span className="text-sm text-gray-700 font-semibold">{events[0].month}</span>
                    </div>
                    <div className="h-px w-px bg-gray-300"></div>
                    <div className="text-xs text-gray-600 font-medium max-w-[80px]">
                      {events[0].time}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-8 md:p-12 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif group-hover:text-primary transition-colors">
                      {events[0].title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {events[0].description}
                    </p>
                    <div className="flex items-center gap-3 text-gray-700">
                      <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                      <span className="font-medium">{events[0].place}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button className="bg-gradient-to-r from-primary to-amber-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <i className="fas fa-check mr-2"></i>
                      Join Event
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300">
                      <i className="fas fa-share-alt mr-2"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(1).map((e, index) => (
              <div 
                key={e.title} 
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={e.image} 
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <div className="text-center">
                      <span className="block text-xl font-bold text-primary">{e.day}</span>
                      <span className="text-xs text-gray-700 font-semibold">{e.month}</span>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-3">
                    <i className="fas fa-clock"></i>
                    <span>{e.time}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors font-serif leading-tight">
                    {e.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {e.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                      <span className="text-xs font-medium">{e.place}</span>
                    </div>
                    
                    <button className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-yellow-600 transition-colors">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events CTA */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-12 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-calendar-alt mr-3"></i>
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
