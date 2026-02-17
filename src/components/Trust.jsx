import React from 'react'
import { impactStats, leadershipHighlights, partnerCta } from '../utils/siteContent'

export default function Trust() {
  return (
    <section className="section-shell bg-surfaceAlt" aria-label="Trust and partnership highlights">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-shield-heart text-[10px]" aria-hidden="true"></i>
            Trust and Partnership
          </span>
          <h2 className="section-title mt-5">Built for Long-Term Impact</h2>
          <p className="section-subtitle">
            We combine faithful ministry with clear stewardship, measurable outcomes, and responsible leadership.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {impactStats.map((stat) => (
            <article key={stat.label} className="card-elevated p-6 text-center">
              <p className="font-serif text-3xl text-ink font-bold">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {leadershipHighlights.map((item) => (
            <article key={item.title} className="card-elevated p-7">
              <h3 className="font-serif text-2xl text-ink font-bold mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="card-elevated mt-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="chip">Partnership Invitation</p>
            <h3 className="font-serif text-3xl text-ink font-bold mt-4">{partnerCta.title}</h3>
            <p className="text-muted mt-3 max-w-2xl">{partnerCta.text}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={partnerCta.primary.href} className="btn-primary">
              {partnerCta.primary.label}
            </a>
            <a href={partnerCta.secondary.href} className="btn-secondary">
              {partnerCta.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
