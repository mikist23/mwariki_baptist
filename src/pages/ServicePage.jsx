import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getServiceById } from '../utils/servicesData'

export default function ServicePage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const service = getServiceById(id)

  if (!service) {
    return (
      <div className="min-h-screen bg-surfaceAlt">
        <Navbar variant="solid" />
        <main className="pt-32 pb-20 section-wrap">
          <div className="card-elevated p-10 text-center max-w-3xl mx-auto">
            <h1 className="section-title text-3xl">Service not found</h1>
            <p className="section-subtitle">The ministry link may be outdated.</p>
            <Link to="/" className="btn-primary mt-6">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surfaceAlt">
      <Navbar variant="solid" />

      <main className="pt-28 pb-16">
        <section className="section-wrap">
          <div className="card-elevated p-8 md:p-10">
            <button type="button" onClick={() => navigate(-1)} className="text-sm font-bold text-slate-600 hover:text-primary">
              <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back
            </button>
            <p className="chip mt-5">Ministry Details</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink font-bold mt-4">{service.title}</h1>
            <p className="text-muted text-lg mt-3 max-w-prose">{service.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="chip normal-case tracking-normal">{service.next}</span>
              <span className="chip normal-case tracking-normal">{service.location}</span>
            </div>
          </div>
        </section>

        <section className="section-wrap mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="card-elevated overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full min-h-[320px] object-cover" loading="lazy" />
          </article>

          <article className="card-elevated p-8">
            <h2 className="font-serif text-3xl text-ink font-bold">What to Expect</h2>
            <ul className="mt-5 space-y-3">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-muted">
                  <i className="fas fa-check text-primary mt-1" aria-hidden="true"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              {service.schedule.map((row) => (
                <div key={`${row.label}-${row.day}`} className="rounded-2xl border border-borderSoft bg-surfaceAlt px-4 py-3 flex justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-ink">{row.label}</p>
                    <p className="text-xs text-slate-500">{row.day}</p>
                  </div>
                  <p className="text-xs font-bold text-primary">{row.time}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="/#contact" className="btn-primary">Ask About Ministry</a>
              <a href="/#events" className="btn-secondary">Upcoming Events</a>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
