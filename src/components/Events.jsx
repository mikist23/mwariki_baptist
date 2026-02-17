import React from 'react'

const events = [
  {
    day: 24,
    month: 'Dec',
    time: '08:30 AM - 11:30 AM',
    title: 'Christmas Eve Candlelight Service',
    place: 'Main Sanctuary',
    description: 'Celebrate the birth of Christ with worship, carols, and communion.',
    image: '/images/church image 1.jpg',
  },
  {
    day: 31,
    month: 'Dec',
    time: '10:00 PM - 12:00 AM',
    title: "New Year's Eve Prayer Service",
    place: 'Main Sanctuary',
    description: 'A night of prayer, reflection, and thanksgiving as we enter the new year.',
    image: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=1000&q=80',
  },
  {
    day: 7,
    month: 'Jan',
    time: '09:00 AM - 11:00 AM',
    title: 'Baptism Sunday',
    place: 'Main Sanctuary',
    description: 'Celebrate faith milestones with our church family.',
    image: '/images/sermon 1.jpeg',
  },
]

export default function Events() {
  return (
    <section id="events" className="section-shell bg-surfaceAlt">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-calendar-days text-[10px]" aria-hidden="true"></i>
            Upcoming Events
          </span>
          <h2 className="section-title mt-5">Gather, Worship, and Grow Together</h2>
          <p className="section-subtitle">Stay connected to our church calendar and key community moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <article key={event.title} className="card-elevated overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-52 object-cover" loading="lazy" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">{event.time}</p>
                    <h3 className="font-serif text-2xl text-ink font-bold mt-2 leading-tight">{event.title}</h3>
                  </div>
                  <div className="chip text-center min-w-[62px] justify-center">
                    <span className="font-serif text-xl leading-none">{event.day}</span>
                    <span>{event.month}</span>
                  </div>
                </div>
                <p className="text-sm text-muted mt-3 leading-relaxed">{event.description}</p>
                <p className="text-sm text-slate-600 mt-4">
                  <i className="fas fa-location-dot text-primary mr-2" aria-hidden="true"></i>
                  {event.place}
                </p>
                <button type="button" className="btn-secondary w-full mt-6">
                  Reserve a Spot
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
