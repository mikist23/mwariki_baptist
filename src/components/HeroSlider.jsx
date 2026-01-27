import React, { useEffect, useState, useRef } from 'react'

const slides = [
  {
    id:1,
    title: 'Following Jesus wherever we are',
    subtitle: 'Welcome to Christian Church',
    text: "God loves us all. Join us in worship and fellowship.",
    img: "/images/church image 1.jpg"

,
    cta: {text: 'Be Part of Us', href: '#contact', primary:true}
  },
  {
    id:2,
    title: 'Connect with God and Community',
    subtitle: 'Sharing the Light',
    text: 'A place where you can find peace, hope, and purpose.',
    img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    cta: {text: 'Learn More', href: '#about', primary:false}
  },
  {
    id:3,
    title: 'Experience the Power of Prayer',
    subtitle: 'Living in Faith',
    text: "Faith is taking the first step even when you don't see the whole staircase.",
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1950&q=80',
    cta: {text: 'Watch Sermons', href: '#sermons', primary:true}
  }
]

export default function HeroSlider(){
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef()

  useEffect(()=>{
    timerRef.current = setInterval(()=> {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent(c => (c+1)%slides.length)
        setIsAnimating(false)
      }, 100)
    }, 6000)
    return ()=> clearInterval(timerRef.current)
  },[])

  const next = ()=>{ 
    clearInterval(timerRef.current); 
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(c => (c+1)%slides.length); 
      setIsAnimating(false)
    }, 100)
    timerRef.current = setInterval(()=> setCurrent(c => (c+1)%slides.length), 6000)
  }
  
  const prev = ()=>{ 
    clearInterval(timerRef.current); 
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(c => (c-1+slides.length)%slides.length); 
      setIsAnimating(false)
    }, 100)
    timerRef.current = setInterval(()=> setCurrent(c => (c+1)%slides.length), 6000)
  }

  return (
    <header id="home" className="relative h-screen overflow-hidden bg-gray-900">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-amber-500/20 opacity-50"></div>
      
      {slides.map((s, i) => (
        <div 
          key={s.id} 
          className={`slide absolute inset-0 bg-cover bg-center ${i===current ? 'active' : ''} ${isAnimating && i===current ? 'animate-fade-in' : ''}`} 
          style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${s.img}')`}}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className={`slide-content px-6 max-w-4xl mx-auto ${i===current ? 'animate-slide-up' : ''}`}>
              {/* Animated subtitle with underline */}
              <div className="relative inline-block mb-6">
                <span className="block text-primary font-bold tracking-[0.3em] uppercase text-sm md:text-base animate-pulse">
                  {s.subtitle}
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-amber-500 to-primary animate-pulse"></div>
              </div>
              
              {/* Main title with staggered animation */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                {s.title.split(' ').map((word, wordIndex) => (
                  <span 
                    key={wordIndex} 
                    className="inline-block animate-fade-in" 
                    style={{animationDelay: `${wordIndex * 0.1}s`}}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              {/* Description text */}
              <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light animate-slide-up" style={{animationDelay: '0.5s'}}>
                {s.text}
              </p>
              
              {/* CTA Buttons with hover effects */}
              <div className="buttons flex flex-col sm:flex-row justify-center gap-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <a 
                  href={s.cta.href} 
                  className={`group relative px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 uppercase text-sm tracking-wider ${
                    s.cta.primary 
                      ? 'bg-gradient-to-r from-primary to-amber-600 text-white shadow-xl hover:shadow-2xl hover:scale-105' 
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  <span className="relative z-10">{s.cta.text}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-amber-600 to-primary transition-transform duration-500 ${s.cta.primary ? '' : 'hidden'}`}></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced navigation buttons with hover effects */}
      <button 
        onClick={prev} 
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 group z-20 focus:outline-none"
      >
        <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={next} 
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 group z-20 focus:outline-none"
      >
        <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              clearInterval(timerRef.current)
              setCurrent(index)
              timerRef.current = setInterval(() => setCurrent(c => (c+1)%slides.length), 6000)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? 'bg-primary w-10' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/50 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-amber-500/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </header>
  )
}
