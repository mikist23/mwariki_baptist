import React from 'react'
import { Link } from 'react-router-dom'
import { sermons } from '../utils/sermonsData'

export default function Sermons() {
  return (
    <section id="sermons" className="section-shell bg-surface">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-bible text-[10px]" aria-hidden="true"></i>
            Sermon Archive
          </span>
          <h2 className="section-title mt-5">Recent Biblical Teaching</h2>
          <p className="section-subtitle">Browse recent messages and open each sermon page for details and next actions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((it) => (
            <article key={it.id} className="card-elevated overflow-hidden">
              <Link to={`/sermons/${it.id}`} className="block">
                <img src={it.img} alt={it.title} className="w-full h-64 object-cover" loading="lazy" />
              </Link>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-slate-500">{it.date}</p>
                <h3 className="font-serif text-2xl text-ink font-bold mt-3">{it.title}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{it.summary}</p>
                <p className="text-xs text-slate-500 mt-3">By Pastor {it.pastor}</p>
                <div className="mt-6 flex gap-3">
                  <Link to={`/sermons/${it.id}`} className="btn-primary flex-1">View</Link>
                  <Link to={`/sermons/${it.id}#download`} className="btn-secondary flex-1">Resources</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
