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
      <div className="font-sans text-gray-600 antialiased bg-gray-50 min-h-screen flex flex-col">
        <Navbar solid={true} />
        <main className="flex-grow pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Service not found</h1>
            <p className="text-gray-600 mb-8">
              The ministry you're looking for doesn't exist (or the link is outdated).
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
              <span>Back to Home</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="font-sans text-gray-600 antialiased bg-gray-50 min-h-screen flex flex-col">
      <Navbar solid={true} />

      <main className="flex-grow pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-amber-500/10"></div>
          <div className="container mx-auto px-6 relative pt-12 pb-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors"
                >
                  <i className="fas fa-arrow-left" aria-hidden="true"></i>
                  <span>Back</span>
                </button>

                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors"
                >
                  <i className="fas fa-layer-group" aria-hidden="true"></i>
                  <span>All Services</span>
                </a>
              </div>

              <div className="mt-10 animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <i className={`fas ${service.icon} text-primary`} aria-hidden="true"></i>
                  <span>What to Expect</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mt-5 leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">{service.summary}</p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i className="fas fa-clock text-primary" aria-hidden="true"></i>
                    <span>{service.next}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i className="fas fa-map-marker-alt text-primary" aria-hidden="true"></i>
                    <span>{service.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Image (no truncation / no crop) */}
              <div className="lg:col-span-6 animate-fade-in">
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                  <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="lg:col-span-6 animate-slide-up">
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">What to Expect</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Highlights</div>
                      <ul className="space-y-3">
                        {service.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-gray-700">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-none">
                              <i className="fas fa-check text-primary text-xs" aria-hidden="true"></i>
                            </span>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Schedule</div>
                      <div className="space-y-3">
                        {service.schedule.map((row) => (
                          <div
                            key={`${row.label}-${row.day}`}
                            className="flex items-center justify-between gap-4 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                          >
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-gray-900">{row.label}</div>
                              <div className="text-xs text-gray-500">{row.day}</div>
                            </div>
                            <div className="text-xs font-bold text-primary whitespace-nowrap">{row.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Ask About This Ministry</span>
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a
                      href="/#events"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <i className="fas fa-calendar-alt" aria-hidden="true"></i>
                      <span>See Upcoming Events</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
