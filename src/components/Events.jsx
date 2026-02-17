import React from 'react'

const events = [
  {
    day: 23,
    month: 'Feb',
    time: '09:00 AM - 11:30 AM',
    title: 'Sunday Worship and Vision Gathering',
    place: 'Main Sanctuary',
    description: 'Worship together as we share ministry vision, testimonies, and prayer for the season ahead.',
    image: '/images/church image 1.jpg',
  },
  {
    day: 8,
    month: 'Mar',
    time: '06:30 PM - 08:30 PM',
    title: 'Family Prayer Night',
    place: 'Fellowship Hall',
    description: 'An evening of prayer, scripture reflection, and encouragement for families and caregivers.',
    image: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=1000&q=80',
  },
  {
    day: 12,
    month: 'Apr',
    time: '10:00 AM - 12:00 PM',
    title: 'Baptism and Testimony Service',
    place: 'Main Sanctuary',
    description: 'Celebrate new life in Christ as candidates share testimonies and receive baptism.',
    image: '/images/sermon 1.jpeg',
  },
  {
    day: 17,
    month: 'May',
    time: '11:00 AM - 02:00 PM',
    title: 'Community Fellowship Day',
    place: 'Church Grounds',
    description: 'A churchwide fellowship day with outreach stories, food sharing, and community connection.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
  },
]

export default function Events() {
  const [featured, ...others] = events

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

        <div className="max-w-6xl mx-auto">
          <article className="card-elevated overflow-hidden mb-10">
            <div className="relative min-h-[180px] md:min-h-[210px]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10"></div>
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 text-ink text-xs font-bold uppercase tracking-wider px-4 py-2">
                  <i className="fas fa-star text-primary" aria-hidden="true"></i>
                  Featured Event
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 md:right-6">
                <div className="chip justify-start w-fit bg-white/90 text-warning border-primary/30">
                  <span className="font-serif text-lg leading-none">{featured.day}</span>
                  <span>{featured.month}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-white/85 mt-2">{featured.time}</p>
                <h3 className="font-serif text-lg md:text-2xl text-white font-bold mt-1 leading-tight">{featured.title}</h3>
                <p className="text-sm text-white/90 mt-1 max-w-3xl leading-relaxed">{featured.description}</p>
                <p className="text-sm text-white/90 mt-1">
                  <i className="fas fa-location-dot text-primary mr-2" aria-hidden="true"></i>
                  {featured.place}
                </p>
                <button type="button" className="btn-secondary mt-2 bg-white/90 border-white text-ink hover:bg-white">
                  Reserve a Spot
                </button>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((event) => (
              <article key={event.title} className="card-elevated overflow-hidden h-full">
                <img src={event.image} alt={event.title} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500">{event.time}</p>
                      <h3 className="font-serif text-[1.45rem] text-ink font-bold mt-2 leading-tight">{event.title}</h3>
                    </div>
                    <div className="chip text-center min-w-[64px] justify-center leading-tight">
                      <span className="font-serif text-xl leading-none">{event.day}</span>
                      <span>{event.month}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mt-3 leading-relaxed min-h-[72px]">{event.description}</p>
                  <p className="text-sm text-slate-600 mt-4 min-h-[20px]">
                    <i className="fas fa-location-dot text-primary mr-2" aria-hidden="true"></i>
                    {event.place}
                  </p>
                  <button type="button" className="btn-secondary w-full mt-auto">
                    Reserve a Spot
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
