import React, { useEffect, useRef, useState } from 'react'
import { churchIdentity } from '../utils/siteContent'

const slides = [
  {
    id: 1,
    title: 'Faithful Ministry for a Changing Generation',
    subtitle: 'Welcome to Mwariki Baptist Church',
    text: churchIdentity.heroLead,
    img: '/images/church image 1.jpg',
    cta: { text: 'Plan Your Visit', href: '#contact', secondary: false },
  },
  {
    id: 2,
    title: 'Transparent Stewardship. Lasting Community Impact.',
    subtitle: 'Trusted Partnership',
    text: 'We serve families through discipleship, education, outreach, and accountable leadership.',
    img: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1950&q=80',
    cta: { text: 'Explore Ministries', href: '#services', secondary: true },
  },
  {
    id: 3,
    title: 'Worship, Formation, and Community Care',
    subtitle: 'Modern Classic Church Experience',
    text: 'Join a Christ-centered church family focused on biblical teaching and practical service.',
    img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1950&q=80',
    cta: { text: 'Watch Sermons', href: '#sermons', secondary: false },
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 6500)

    return () => clearInterval(timerRef.current)
  }, [])

  const setSlide = (idx) => {
    clearInterval(timerRef.current)
    setCurrent(idx)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 6500)
  }

  const prev = () => setSlide((current - 1 + slides.length) % slides.length)
  const next = () => setSlide((current + 1) % slides.length)

  return (
    <header id="home" className="relative min-h-screen overflow-hidden bg-ink">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`slide absolute inset-0 bg-cover bg-center ${idx === current ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(15,23,42,0.82), rgba(15,23,42,0.58)), url('${slide.img}')`,
          }}
        >
          <div className="section-wrap h-full min-h-screen flex items-center">
            <div className="slide-content max-w-3xl pt-24 pb-14">
              <span className="kicker border-white/30 bg-white/10 text-white">{slide.subtitle}</span>
              <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight font-bold mt-6">
                {slide.title}
              </h1>
              <p className="text-slate-100 text-lg md:text-xl mt-6 leading-relaxed max-w-prose">{slide.text}</p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href={slide.cta.href} className="btn-primary">
                  {slide.cta.text}
                </a>
                <a href="/donate" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink">
                  Support the Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink transition"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink transition"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setSlide(idx)}
            className={`h-2 rounded-full transition-all ${idx === current ? 'w-10 bg-primary' : 'w-4 bg-white/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </header>
  )
}
