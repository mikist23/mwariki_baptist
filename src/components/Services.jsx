import React from 'react'

export default function Services(){
  const services = [
    {
      id: 'sunday-worship',
      icon: 'fa-church',
      title: 'Sunday Worship',
      summary: 'A welcoming service with praise, prayer, and Bible teaching for the whole family.',
      next: 'Every Sunday • Morning',
      location: 'Main Sanctuary',
      highlights: ['Warm welcome for newcomers', 'Worship & prayer', 'Biblical preaching'],
      schedule: [
        { label: 'Main Service', day: 'Sunday', time: 'Morning' },
      ],
      image: '/images/church image 1.jpg',
    },
    {
      id: 'bible-study',
      icon: 'fa-book-bible',
      title: 'Bible Study',
      summary: 'Mid-week study and discussion to deepen your understanding of Scripture and grow together.',
      next: 'Weekly • Mid-week',
      location: 'Fellowship Hall',
      highlights: ['Interactive teaching', 'Small group discussion', 'Prayer & fellowship'],
      schedule: [
        { label: 'Bible Study', day: 'Mid-week', time: 'Evening' },
      ],
      image:
        'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'prayer-meeting',
      icon: 'fa-hands-praying',
      title: 'Prayer Meeting',
      summary: 'A focused time of corporate prayer for our church, families, and the community.',
      next: 'Weekly • Evening',
      location: 'Main Sanctuary',
      highlights: ['Prayer requests', 'Scripture-led prayer', 'Encouragement & testimony'],
      schedule: [
        { label: 'Prayer Meeting', day: 'Weekly', time: 'Evening' },
      ],
      image:
        'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'outreach',
      icon: 'fa-hand-holding-heart',
      title: 'Outreach & Mission',
      summary: 'Practical ministry and evangelism — serving our neighbors with the love of Christ.',
      next: 'Monthly • Community',
      location: 'Meet at Church',
      highlights: ['Community visits', 'Support & compassion', 'Sharing the Gospel'],
      schedule: [
        { label: 'Outreach', day: 'Monthly', time: 'Weekend' },
      ],
      image:
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-hands-helping text-xs" aria-hidden="true"></i>
            <span>Services & Ministries</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Find Your Place to <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Grow</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Worship with us, learn the Word, pray together, and serve our community. Click any ministry to see details.
          </p>
        </div>

        {/* Quick links / cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`Go to ${s.title} details`}
              className="group bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <i className={`fas ${s.icon} text-primary group-hover:text-white transition-colors`} aria-hidden="true"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 font-serif leading-tight">{s.title}</h4>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">{s.summary}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                      <i className="fas fa-clock text-primary/80" aria-hidden="true"></i>
                      {s.next}
                    </span>
                    <span className="text-primary font-bold text-sm group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Details */}
        <div className="mt-16 space-y-14">
          {services.map((s, idx) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Media */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''} relative`}>
                  <div className="relative h-72 lg:h-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-xs font-bold uppercase tracking-widest text-primary">Next Gathering</div>
                          <div className="text-gray-900 font-serif font-bold truncate">{s.next}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-gray-500">Location</div>
                          <div className="text-sm font-bold text-gray-800">{s.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} p-8 md:p-10`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      <i className={`fas ${s.icon} text-xs`} aria-hidden="true"></i>
                      {s.title}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                    What to Expect
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-8">{s.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Highlights</div>
                      <ul className="space-y-3">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-gray-700">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-none">
                              <i className="fas fa-check text-primary text-xs" aria-hidden="true"></i>
                            </span>
                            <span className="text-sm leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Schedule</div>
                      <div className="space-y-3">
                        {s.schedule.map((row) => (
                          <div key={`${row.label}-${row.day}`} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-gray-900 truncate">{row.label}</div>
                              <div className="text-xs text-gray-500">{row.day}</div>
                            </div>
                            <div className="text-xs font-bold text-primary">{row.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Ask About This Ministry</span>
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a
                      href="#events"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                      <span>See Upcoming Events</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
