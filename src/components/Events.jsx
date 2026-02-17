import React, { useEffect, useMemo, useState } from 'react'

const events = [
  {
    id: 'worship-sunday',
    dateISO: '2026-03-08',
    day: 8,
    month: 'Mar',
    weekday: 'Sunday',
    time: '09:00 AM - 11:00 AM',
    title: 'Sunday Worship Gathering',
    place: 'Main Sanctuary',
    description: 'A reverent service of worship, Scripture teaching, and congregational prayer.',
    image: '/images/church image 1.jpg',
  },
  {
    id: 'prayer-vigil',
    dateISO: '2026-03-12',
    day: 12,
    month: 'Mar',
    weekday: 'Thursday',
    time: '06:30 PM - 08:30 PM',
    title: 'Prayer Vigil Night',
    place: 'Prayer Chapel',
    description: 'An evening of intercession and spiritual renewal for families and leaders.',
    image: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'baptism-testimony',
    dateISO: '2026-03-22',
    day: 22,
    month: 'Mar',
    weekday: 'Sunday',
    time: '10:00 AM - 12:00 PM',
    title: 'Baptism and Testimony Service',
    place: 'Main Sanctuary',
    description: 'Celebrate transformed lives as believers profess faith through baptism.',
    image: '/images/sermon 1.jpeg',
  },
  {
    id: 'youth-forum',
    dateISO: '2026-04-04',
    day: 4,
    month: 'Apr',
    weekday: 'Saturday',
    time: '02:00 PM - 05:00 PM',
    title: 'Youth Discipleship Forum',
    place: 'Youth Hall',
    description: 'Interactive discipleship sessions focused on identity, purpose, and biblical living.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'fellowship-lunch',
    dateISO: '2026-04-18',
    day: 18,
    month: 'Apr',
    weekday: 'Saturday',
    time: '11:30 AM - 02:00 PM',
    title: 'Church Fellowship Lunch',
    place: 'Church Grounds',
    description: 'A church-family gathering for shared meals, testimonies, and encouragement.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'outreach-day',
    dateISO: '2026-04-25',
    day: 25,
    month: 'Apr',
    weekday: 'Saturday',
    time: '09:30 AM - 01:00 PM',
    title: 'Community Outreach Day',
    place: 'Mwariki Estate',
    description: 'Serve local families through prayer, practical support, and gospel witness.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
  },
]

function EventMeta({ event }) {
  return (
    <>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">
        <span>{event.weekday}</span>
        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
        <span>{event.time}</span>
      </div>
      <h3 className="font-serif text-2xl text-ink font-bold mt-2 leading-tight">{event.title}</h3>
      <p className="text-sm text-muted mt-2 leading-relaxed">{event.description}</p>
      <p className="text-sm text-slate-600 mt-3">
        <i className="fas fa-location-dot text-primary mr-2" aria-hidden="true"></i>
        {event.place}
      </p>
    </>
  )
}

export default function Events() {
  const [first, second, third, ...rest] = events
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const remainingSlides = useMemo(() => rest, [rest])
  const canPrev = currentIndex > 0
  const canNext = currentIndex < remainingSlides.length - 1

  useEffect(() => {
    if (isPaused || remainingSlides.length <= 1) {
      return
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % remainingSlides.length)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [isPaused, remainingSlides.length])

  return (
    <section id="events" className="section-shell bg-surfaceAlt">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-calendar-days text-[10px]" aria-hidden="true"></i>
            Upcoming Events
          </span>
          <h2 className="section-title mt-5">Events Layout Studio</h2>
          <p className="section-subtitle">A clear event board with one banner, one primary card, and two stacked schedule cards.</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {remainingSlides.length > 0 && (
            <section
              className="card-elevated p-5 md:p-6"
              aria-label="More upcoming events"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-serif text-2xl text-ink font-bold">More Events</h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={!canPrev}
                    className="w-10 h-10 rounded-full border border-borderSoft text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition"
                    aria-label="Previous event"
                  >
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, remainingSlides.length - 1))}
                    disabled={!canNext}
                    className="w-10 h-10 rounded-full border border-borderSoft text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition"
                    aria-label="Next event"
                  >
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-premium"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {remainingSlides.map((event) => (
                    <article key={event.id} className="w-full shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-2xl border border-borderSoft bg-surfaceAlt p-4 md:p-5">
                        <div className="md:col-span-3 rounded-xl overflow-hidden border border-borderSoft">
                          <img src={event.image} alt={event.title} className="w-full h-40 object-cover" loading="lazy" />
                        </div>
                        <div className="md:col-span-9">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="chip bg-surface border border-borderSoft text-warning">{event.day} {event.month}</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500">{event.weekday}</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500">{event.time}</span>
                          </div>
                          <h4 className="font-serif text-2xl text-ink font-bold">{event.title}</h4>
                          <p className="text-sm text-muted mt-2 leading-relaxed">{event.description}</p>
                          <p className="text-sm text-slate-600 mt-2">
                            <i className="fas fa-location-dot text-primary mr-2" aria-hidden="true"></i>
                            {event.place}
                          </p>
                          <button type="button" className="btn-secondary mt-3">Reserve a Spot</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[480px]">
            <article className="lg:col-span-5 card-elevated p-5 md:p-6 flex flex-col h-full">
              <div className="flex items-center justify-between gap-3">
                <span className="chip">Next Gathering</span>
                <span className="chip bg-surfaceAlt border border-borderSoft text-warning">
                  {first.day} {first.month}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-borderSoft bg-surfaceAlt p-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Date</p>
                  <p className="font-serif text-xl text-ink font-bold mt-1">{first.day} {first.month}</p>
                </div>
                <div className="rounded-xl border border-borderSoft bg-surfaceAlt p-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Time</p>
                  <p className="text-sm text-ink font-semibold mt-1">{first.time}</p>
                </div>
                <div className="rounded-xl border border-borderSoft bg-surfaceAlt p-3 col-span-2">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Venue</p>
                  <p className="text-sm text-ink font-semibold mt-1">{first.place}</p>
                </div>
              </div>

              <h3 className="font-serif text-4xl text-ink font-bold mt-5 leading-tight">{first.title}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">{first.description}</p>

              <div className="mt-auto pt-5 flex flex-col sm:flex-row gap-3">
                <button type="button" className="btn-primary">Reserve a Spot</button>
                <button type="button" className="btn-secondary">Add Reminder</button>
              </div>
            </article>

            <div className="lg:col-span-7 grid grid-cols-1 grid-rows-2 gap-4 h-full">
              {[second, third].map((event) => (
                <article key={event.id} className="card-elevated p-5 md:p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="chip bg-surfaceAlt border border-borderSoft text-warning">
                        {event.day} {event.month}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-slate-500">{event.time}</span>
                    </div>
                    <EventMeta event={event} />
                  </div>
                  <div className="pt-4 flex justify-start">
                    <button type="button" className="btn-secondary">Reserve a Spot</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
