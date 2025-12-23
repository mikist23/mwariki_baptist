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
  const timerRef = useRef()

  useEffect(()=>{
    timerRef.current = setInterval(()=> setCurrent(c => (c+1)%slides.length), 5000)
    return ()=> clearInterval(timerRef.current)
  },[])

  const next = ()=>{ clearInterval(timerRef.current); setCurrent(c => (c+1)%slides.length); timerRef.current = setInterval(()=> setCurrent(c => (c+1)%slides.length), 5000)}
  const prev = ()=>{ clearInterval(timerRef.current); setCurrent(c => (c-1+slides.length)%slides.length); timerRef.current = setInterval(()=> setCurrent(c => (c+1)%slides.length), 5000)}

  return (
    <header id="home" className="relative h-screen overflow-hidden bg-gray-900">
      {slides.map((s, i) => (
        <div key={s.id} className={`slide absolute inset-0 bg-cover bg-center ${i===current ? 'active' : ''}`} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${s.img}')`}}>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="slide-content px-6 max-w-4xl mx-auto">
              <span className="block text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">{s.subtitle}</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">{s.title}</h1>
              <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">{s.text}</p>
              <div className="buttons flex flex-col sm:flex-row justify-center gap-4">
                <a href={s.cta.href} className={`${s.cta.primary ? 'bg-primary text-white' : 'bg-transparent border-2 border-white text-white'} px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition shadow-lg uppercase text-sm tracking-wider`}>{s.cta.text}</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white/50 hover:text-white text-4xl p-2 transition z-20 focus:outline-none">
        <i className="fas fa-chevron-left" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white/50 hover:text-white text-4xl p-2 transition z-20 focus:outline-none">
        <i className="fas fa-chevron-right" />
      </button>
    </header>
  )
}
