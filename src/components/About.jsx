import React from 'react'
import { leadershipHighlights } from '../utils/siteContent'

const aboutStats = [
  { value: '2,500+', label: 'People Reached Yearly' },
  { value: '12', label: 'Active Ministry Teams' },
  { value: '38', label: 'Outreach Initiatives' },
  { value: '91%', label: 'Mission Funds Deployed' },
]

export default function About() {
  return (
    <section id="about" className="section-shell bg-surface scroll-mt-24">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-church text-[10px]" aria-hidden="true"></i>
            About Mwariki Baptist
          </span>
          <h2 className="section-title mt-5">Biblical Faith. Accountable Leadership. Community Impact.</h2>
          <p className="section-subtitle">
            We are a Christ-centered church shaping faithful disciples, strengthening families, and serving the community with measurable compassion.
          </p>
        </div>

        <div className="card-elevated overflow-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-12">
            <article className="xl:col-span-7 relative min-h-[320px] md:min-h-[420px]">
              <img
                src="/images/church image 1.jpg"
                alt="Mwariki Baptist congregation gathered in worship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

              <div className="absolute left-5 right-5 md:left-8 md:right-8 bottom-8">
                <p className="chip bg-white/90 border-primary/30 text-warning">Mission and Identity</p>
                <h3 className="font-serif text-white text-2xl md:text-4xl font-bold mt-4 leading-tight">
                  Worshiping Christ. Forming Disciples. Serving Community.
                </h3>
                <p className="text-white/90 mt-3 text-sm md:text-base leading-relaxed max-w-prose">
                  Our church family is built on biblical teaching, prayerful leadership, and practical service that transforms lives over time.
                </p>
              </div>
            </article>

            <article className="xl:col-span-5 p-7 md:p-9 bg-surface">
              <h3 className="font-serif text-3xl text-ink font-bold">Why People Trust Mwariki Baptist</h3>
              <div className="mt-6 space-y-4">
                {leadershipHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-borderSoft bg-surfaceAlt p-4">
                    <h4 className="text-base font-bold text-ink">{item.title}</h4>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
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

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutStats.map((stat) => (
            <article key={stat.label} className="card-elevated p-5 text-center">
              <p className="font-serif text-3xl text-ink font-bold leading-none">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-slate-500 mt-2 leading-tight">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
