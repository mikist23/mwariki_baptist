import React, { useEffect, useState } from 'react'

const links = ['home', 'about', 'services', 'sermons', 'events', 'causes', 'blog', 'gallery', 'contact']

export default function Navbar({ variant = 'transparent' }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isSolid = variant === 'solid' || scrolled

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Primary">
      <div
        className={`transition-all duration-300 ${
          isSolid ? 'bg-white/95 backdrop-blur-md border-b border-borderSoft shadow-soft py-3' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-shell flex items-center justify-between gap-6">
          <a
            href="/"
            className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
              isSolid ? 'text-ink' : 'text-white'
            }`}
          >
            MWARIKI <span className="text-primary">BAPTIST</span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-primary ${
                  isSolid ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {item}
              </a>
            ))}
            <a href="/donate" className="btn-primary">
              Donate
            </a>
          </div>

          <button
            type="button"
            className={`lg:hidden w-11 h-11 rounded-full border transition-colors ${
              isSolid
                ? 'border-borderSoft text-ink hover:text-primary'
                : 'border-white/40 text-white hover:text-primary'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${mobileOpen ? 'times' : 'bars'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-borderSoft shadow-soft">
          <div className="container mx-auto px-shell py-4">
            <div className="grid grid-cols-1 gap-2">
              {links.map((item) => (
                <a
                  key={item}
                  href={`/#${item}`}
                  className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-slate-700 hover:bg-accentSoft hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="/donate" className="btn-primary mt-2" onClick={() => setMobileOpen(false)}>
                Donate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
