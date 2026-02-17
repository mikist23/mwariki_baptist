import React from 'react'
import { leadershipHighlights } from '../utils/siteContent'

export default function About() {
  return (
    <section id="about" className="section-shell bg-surface scroll-mt-24">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-church text-[10px]" aria-hidden="true"></i>
            About Mwariki Baptist
          </span>
          <h2 className="section-title mt-5">A Biblical Church with Modern Stewardship</h2>
          <p className="section-subtitle">
            We help people know Christ deeply, grow in discipleship consistently, and serve communities with practical compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <article className="card-elevated overflow-hidden">
            <img
              src="/images/church image 1.jpg"
              alt="Mwariki Baptist congregation in worship"
              className="w-full h-[380px] object-cover"
              loading="lazy"
            />
            <div className="p-7">
              <p className="chip">Mission Focus</p>
              <h3 className="font-serif text-3xl font-bold text-ink mt-4">Worship. Formation. Outreach.</h3>
              <p className="text-muted mt-4 leading-relaxed">
                Our services combine reverent worship, Scripture-centered teaching, and practical ministry that strengthens families and neighborhoods.
              </p>
            </div>
          </article>

          <article className="card-elevated p-8 md:p-10">
            <h3 className="font-serif text-3xl text-ink font-bold">Why People and Partners Trust Us</h3>
            <div className="mt-6 space-y-5">
              {leadershipHighlights.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="text-lg font-bold text-ink">{item.title}</h4>
                  <p className="text-muted text-sm mt-1 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="btn-primary">
                Explore Ministries
              </a>
              <a href="#contact" className="btn-secondary">
                Request Prayer
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
