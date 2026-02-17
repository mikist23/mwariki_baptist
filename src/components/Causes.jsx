import React from 'react'
import { Link } from 'react-router-dom'

const causes = [
  {
    title: 'Mission Expansion',
    raised: '$25,000',
    goal: '$50,000',
    pct: 40,
    img: '/images/church image 1.jpg',
    description:
      'Support church planting, discipleship materials, and frontline outreach in underserved communities.',
  },
  {
    title: 'Worship and Media Upgrade',
    raised: '$75,000',
    goal: '$100,000',
    pct: 75,
    img: '/images/church image 1.jpg',
    description:
      'Fund reliable instruments, media tools, and sound infrastructure that strengthen gathered worship.',
  },
  {
    title: 'Children and Family Care',
    raised: '$4,000',
    goal: '$20,000',
    pct: 20,
    img: '/images/church image 1.jpg',
    description:
      'Provide school support, meals, and practical care for vulnerable children and families.',
  },
]

export default function Causes() {
  return (
    <section id="causes" className="section-shell bg-surface">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-hand-holding-heart text-[10px]" aria-hidden="true"></i>
            Give with Purpose
          </span>
          <h2 className="section-title mt-5">Causes That Need Strategic Support</h2>
          <p className="section-subtitle">Every contribution is directed toward measurable ministry outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause) => (
            <article key={cause.title} className="card-elevated overflow-hidden">
              <img src={cause.img} alt={cause.title} className="w-full h-52 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-ink font-bold">{cause.title}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{cause.description}</p>
                <div className="mt-5 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${cause.pct}%` }}></div>
                </div>
                <div className="mt-3 flex justify-between text-xs uppercase tracking-wider text-slate-500">
                  <span>Raised: <strong className="text-primary">{cause.raised}</strong></span>
                  <span>Goal: <strong className="text-ink">{cause.goal}</strong></span>
                </div>
                <Link to="/donate" state={{ cause }} className="btn-primary w-full mt-6">
                  Donate Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
