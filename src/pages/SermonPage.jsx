import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getSermonById } from '../utils/sermonsData'

export default function SermonPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const sermon = getSermonById(id)
  const action = new URLSearchParams(location.search).get('action')

  if (!sermon) {
    return (
      <div className="min-h-screen bg-surfaceAlt">
        <Navbar variant="solid" />
        <main className="pt-32 pb-20 section-wrap">
          <div className="card-elevated p-10 text-center max-w-3xl mx-auto">
            <h1 className="section-title text-3xl">Sermon not found</h1>
            <p className="section-subtitle">The requested sermon link may be outdated.</p>
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
            <p className="chip mt-5">Sermon Detail</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink font-bold mt-4">{sermon.title}</h1>
            <p className="text-muted text-lg mt-3 max-w-prose">{sermon.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="chip normal-case tracking-normal">{sermon.date}</span>
              <span className="chip normal-case tracking-normal">Pastor {sermon.pastor}</span>
              {action && <span className="chip normal-case tracking-normal">Requested: {action}</span>}
            </div>
          </div>
        </section>

        <section className="section-wrap mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="card-elevated overflow-hidden">
            <img src={sermon.img} alt={sermon.title} className="w-full h-full min-h-[320px] object-cover" loading="lazy" />
          </article>

          <article className="card-elevated p-8 space-y-6">
            <div id="watch" className="scroll-mt-28">
              <h2 className="font-serif text-3xl text-ink font-bold">About This Sermon</h2>
              <p className="text-muted mt-3 leading-relaxed">
                This message is part of our ongoing discipleship series at Mwariki Baptist Church.
              </p>
            </div>

            <div className="rounded-2xl bg-surfaceAlt border border-borderSoft p-5">
              <h3 className="font-bold text-ink">Watch</h3>
              <p className="text-sm text-muted mt-2">View the sermon stream when media upload is available.</p>
              <Link to={`/sermons/${sermon.id}?action=watch#watch`} className="btn-primary mt-4">Watch Sermon</Link>
            </div>

            <div id="download" className="scroll-mt-28 rounded-2xl bg-surfaceAlt border border-borderSoft p-5">
              <h3 className="font-bold text-ink">Download</h3>
              <p className="text-sm text-muted mt-2">Access notes and media resources when published.</p>
              <Link to={`/sermons/${sermon.id}?action=download#download`} className="btn-secondary mt-4">Download Notes</Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/#contact" className="btn-primary">Request This Sermon</a>
              <a href="/#events" className="btn-secondary">Upcoming Events</a>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
