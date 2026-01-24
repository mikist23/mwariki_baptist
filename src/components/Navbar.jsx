import React, { useEffect, useState } from 'react'

export default function Navbar({ solid = false }){
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  const isScrolled = scrolled || solid

  return (
    <nav id="navbar" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled py-2' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" id="nav-logo" className={`${isScrolled ? 'text-gray-900' : 'text-white'} text-2xl font-bold font-serif tracking-tighter`}>
          CHRISTIAN<span className="text-primary">.</span>
        </a>

        <div className="hidden lg:flex space-x-6 items-center">
          {['home','about','services','sermons','events','causes','blog','gallery','contact'].map(item=> (
            <a key={item} href={`/#${item}`} className={`nav-link text-xs font-bold hover:text-primary transition uppercase tracking-widest ${isScrolled ? 'text-gray-900' : 'text-white/90'}`}>{item}</a>
          ))}
          <a href="/donate" className={`ml-4 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${isScrolled ? 'bg-primary text-white hover:bg-yellow-600' : 'bg-white text-primary hover:bg-primary hover:text-white'}`}>
            Donate
          </a>
        </div>

        <button onClick={()=>setMobileOpen(v=>!v)} className="lg:hidden text-primary text-2xl focus:outline-none">
          <i className="fas fa-bars" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t absolute w-full left-0 top-full shadow-lg">
          {['Home','About','Services','Sermons','Events','Causes','Blog','Gallery','Contact','Donate'].map(link=> (
            <a key={link} href={link === 'Donate' ? '/donate' : `/#${link.toLowerCase()}`} className="block py-3 px-6 hover:bg-gray-50 text-gray-800 font-bold text-sm uppercase tracking-wider border-b border-gray-100">{link}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
