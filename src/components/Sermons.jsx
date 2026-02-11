import React from 'react'
import { Link } from 'react-router-dom'
import { sermons } from '../utils/sermonsData'

export default function Sermons() {
  return (
    <section
      id="sermons"
      className="py-24 bg-[radial-gradient(circle_at_top,_#fef3c7,_transparent_55%),radial-gradient(circle_at_bottom,_#e2e8f0,_transparent_45%)] relative overflow-hidden"
    >
      <div className="absolute top-8 right-6 w-64 h-64 bg-amber-200/40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-16 left-6 w-72 h-72 bg-slate-200/70 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="h-px w-24 bg-gray-300" />
            <span className="text-xs tracking-[0.3em] text-gray-400">SERMONS</span>
            <div className="h-px w-24 bg-gray-300" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Mwariki Baptist
          </h2>

          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
            Discover recent sermons and explore full details with one click.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sermons.map((it) => (
            <article
              key={it.id}
              className="group bg-white/80 backdrop-blur-sm border border-white rounded-[20px] shadow-[0_20px_50px_-35px_rgba(15,23,42,0.65)] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <Link to={`/sermons/${it.id}`} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20">
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <i className="fas fa-user text-primary" aria-hidden="true"></i>
                    <span>By Pastor {it.pastor}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/80">{it.date}</span>
                    <div className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                      <span>Details</span>
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-3">{it.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{it.summary}</p>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    to={`/sermons/${it.id}#watch`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-full text-xs font-bold hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                    aria-label={`Watch ${it.title}`}
                  >
                    <i className="fas fa-play text-sm" aria-hidden="true"></i>
                    WATCH
                  </Link>
                  <Link
                    to={`/sermons/${it.id}#download`}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-800 px-4 py-2.5 rounded-full text-xs font-semibold hover:border-primary hover:text-primary transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                    aria-label={`Download ${it.title}`}
                  >
                    <i className="fas fa-download text-sm" aria-hidden="true"></i>
                    DOWNLOAD
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
