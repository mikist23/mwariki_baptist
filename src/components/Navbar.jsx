import React, { useEffect, useState } from 'react'

export default function Navbar(){
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <nav id="navbar" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'scrolled py-2' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" id="nav-logo" className={`${scrolled ? 'text-gray-900' : 'text-white'} text-2xl font-bold font-serif tracking-tighter`}>
          CHRISTIAN<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {['home','about','sermons','events','causes','blog','gallery','contact'].map(item=> (
            <a key={item} href={`/#${item}`} className={`nav-link text-sm font-medium hover:text-primary transition ${scrolled ? 'text-gray-900' : 'text-white/90'}`}>{item.toUpperCase()}</a>
          ))}
          <a href="/donate" className={`nav-link text-sm font-bold bg-primary px-4 py-2 rounded text-white hover:bg-opacity-90 transition`}>DONATE</a>
        </div>

        <button onClick={()=>setMobileOpen(v=>!v)} className="md:hidden text-primary text-2xl focus:outline-none">
          <i className="fas fa-bars" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0 top-full shadow-lg">
          {['Home','About','Sermons','Events','Causes','Blog','Gallery','Contact'].map(link=> (
            <a key={link} href={`/#${link.toLowerCase()}`} className="block py-3 px-6 hover:bg-gray-50 text-gray-800">{link}</a>
          ))}
            <a href="/donate" className="block py-3 px-6 hover:bg-gray-50 text-primary font-bold">Donate Now</a>
        </div>
      )}
    </nav>
  )
}
