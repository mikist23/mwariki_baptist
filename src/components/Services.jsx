import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../utils/servicesData'

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden scroll-mt-24"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-hands-helping text-xs" aria-hidden="true"></i>
            <span>Services & Ministries</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Find Your Place to{' '}
            <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Grow</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click a ministry to view What to Expect details for that service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              aria-label={`View what to expect for ${service.title}`}
              className="group flex flex-col h-full min-h-[260px] bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <i className={`fas ${service.icon} text-primary text-xl`} aria-hidden="true"></i>
                </div>
                <h4 className="text-2xl font-serif font-bold text-gray-900 leading-tight">{service.title}</h4>
              </div>

              <p className="text-gray-500 mt-5 leading-relaxed">{service.summary}</p>

              <div className="mt-auto pt-8 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-gray-100 px-5 py-3">
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <i className="fas fa-clock text-primary" aria-hidden="true"></i>
                  </span>
                  <span className="text-sm font-semibold text-gray-700 whitespace-normal">{service.next}</span>
                </div>
                <span
                  className="text-primary text-2xl transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
