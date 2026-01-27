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
      {/* Background blur effect when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-md -z-10"></div>
      )}
      
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" id="nav-logo" className={`relative group transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'} text-2xl font-bold font-serif tracking-tighter`}>
          CHRISTIAN
          <span className="text-primary relative">
            .
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-8">
          {['home','about','services','sermons','events','causes','blog','gallery','contact'].map((item, index) => (
            <a 
              key={item} 
              href={`/#${item}`} 
              className={`nav-link relative text-xs font-bold hover:text-primary transition-all duration-300 uppercase tracking-widest ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item}
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
            </a>
          ))}
          
          <a 
            href="/donate" 
            className={`relative px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:scale-105 overflow-hidden group ${
              isScrolled 
                ? 'bg-gradient-to-r from-primary to-amber-600 text-white shadow-lg hover:shadow-xl' 
                : 'bg-white text-primary hover:bg-primary hover:text-white'
            }`}
          >
            <span className="relative z-10">Donate</span>
            <div className={`absolute inset-0 bg-gradient-to-r from-amber-600 to-primary transition-transform duration-300 ${isScrolled ? '' : 'hidden'}`}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-amber-600 transition-transform duration-300 group-hover:scale-110"></div>
          </a>
        </div>

        <button 
          onClick={()=>setMobileOpen(v=>!v)} 
          className={`lg:hidden text-2xl focus:outline-none transition-all duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
          }`}
        >
          <i className={`fas fa-${mobileOpen ? 'times' : 'bars'} transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 absolute w-full left-0 top-full shadow-2xl animate-slide-up">
          <div className="container mx-auto px-6 py-4">
            {['Home','About','Services','Sermons','Events','Causes','Blog','Gallery','Contact','Donate'].map((link, index) => (
              <a 
                key={link} 
                href={link === 'Donate' ? '/donate' : `/#${link.toLowerCase()}`} 
                className="flex items-center gap-3 py-3 px-6 hover:bg-gray-50 text-gray-800 font-bold text-sm uppercase tracking-wider border-b border-gray-100 last:border-0 transition-all duration-300 hover:translate-x-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <i className={`fas fa-${link.toLowerCase() === 'home' ? 'home' : link.toLowerCase() === 'about' ? 'users' : link.toLowerCase() === 'services' ? 'hands-helping' : link.toLowerCase() === 'sermons' ? 'bible' : link.toLowerCase() === 'events' ? 'calendar' : link.toLowerCase() === 'causes' ? 'hand-holding-heart' : link.toLowerCase() === 'blog' ? 'newspaper' : link.toLowerCase() === 'gallery' ? 'images' : link.toLowerCase() === 'contact' ? 'envelope' : 'hand-holding-usd'} text-primary/50`}></i>
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
