import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../utils/servicesData'

export default function Services() {
  return (
    <section id="services" className="section-shell bg-surfaceAlt scroll-mt-24">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-hands-helping text-[10px]" aria-hidden="true"></i>
            Services and Ministries
          </span>
          <h2 className="section-title mt-5">Find Your Place to Grow</h2>
          <p className="section-subtitle">Each ministry page now offers a clear what-to-expect view for visitors and partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="card-elevated p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform">
              <span className="w-12 h-12 rounded-2xl bg-accentSoft flex items-center justify-center text-primary">
                <i className={`fas ${service.icon}`} aria-hidden="true"></i>
              </span>
              <h3 className="font-serif text-2xl text-ink font-bold leading-tight">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.summary}</p>
              <div className="mt-auto pt-2 flex items-center justify-between text-sm">
                <span className="chip normal-case tracking-normal font-semibold">{service.next}</span>
                <span className="text-primary font-bold">Details</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
