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
      <div className="font-sans text-gray-600 antialiased bg-gray-50 min-h-screen flex flex-col">
        <Navbar solid={true} />
        <main className="flex-grow pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Sermon not found</h1>
            <p className="text-gray-600 mb-8">
              The sermon you're looking for doesn't exist (or the link is outdated).
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/70 via-white to-slate-100/80"></div>
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
                  href="/#sermons"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors"
                >
                  <i className="fas fa-bible" aria-hidden="true"></i>
                  <span>All Sermons</span>
                </a>
              </div>

              <div className="mt-10 animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <i className="fas fa-user text-primary" aria-hidden="true"></i>
                  <span>By Pastor {sermon.pastor}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mt-5 leading-tight">
                  {sermon.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">{sermon.summary}</p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <i className="fas fa-calendar-alt text-primary" aria-hidden="true"></i>
                    <span>{sermon.date}</span>
                  </span>
                  {action && (
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      <i className="fas fa-bolt" aria-hidden="true"></i>
                      <span>Requested: {action}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 animate-fade-in">
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                  <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
                    <img
                      src={sermon.img}
                      alt={sermon.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 animate-slide-up">
                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 md:p-10 space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">About This Sermon</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {sermon.summary} This message is part of the ongoing teaching ministry at Mwariki Baptist.
                      Use the actions below to watch or download once media is available.
                    </p>
                  </div>

                  <div id="watch" className="scroll-mt-24">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Watch</div>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
                      <p className="text-sm text-gray-600">
                        Watch the full sermon video here when it is uploaded.
                      </p>
                      <Link
                        to={`/sermons/${sermon.id}?action=watch#watch`}
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
                      >
                        <i className="fas fa-play" aria-hidden="true"></i>
                        Watch Sermon
                      </Link>
                    </div>
                  </div>

                  <div id="download" className="scroll-mt-24">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Download</div>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
                      <p className="text-sm text-gray-600">
                        Download sermon notes or audio once files are available.
                      </p>
                      <Link
                        to={`/sermons/${sermon.id}?action=download#download`}
                        className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        <i className="fas fa-download" aria-hidden="true"></i>
                        Download Notes
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Request This Sermon</span>
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
