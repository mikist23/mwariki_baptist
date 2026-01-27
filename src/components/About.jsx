import React, { useRef, useEffect } from 'react'

export default function About(){
  const statsRef = useRef()

  useEffect(()=>{
    const el = statsRef.current
    if(!el) return

    const counters = el.querySelectorAll('.counter')
    let hasAnimated = false

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !hasAnimated){
          counters.forEach(counter => {
            const target = +counter.dataset.target
            let count = 0;
            const inc = Math.ceil(target/200)
            const id = setInterval(()=>{
              count += inc
              if(count >= target){ counter.innerText = target; clearInterval(id) }
              else counter.innerText = count
            }, 10)
          })
          hasAnimated = true
        }
      })
    }, {threshold: 0.3})

    io.observe(el)
    return ()=> io.disconnect()
  },[])

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Enhanced Hover */}
          <div className="relative group animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/church image 1.jpg" 
                alt="Worship" 
                className="w-full h-96 object-cover transform transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Quote Card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-amber-600 p-8 rounded-2xl hidden lg:block shadow-2xl animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="relative">
                <i className="fas fa-quote-left text-white/30 absolute top-0 left-0 text-2xl"></i>
                <p className="text-white font-serif text-xl italic relative z-10">"For God so loved the world..."</p>
                <i className="fas fa-quote-right text-white/30 absolute bottom-0 right-0 text-2xl"></i>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-8 right-4 w-6 h-6 bg-amber-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <i className="fas fa-church text-xs animate-pulse"></i>
                <span>Welcome</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Welcome to Our <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">Church</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                A place of warmth, peace, and joy. We are dedicated to spreading the message of hope and love to our community and beyond.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-8 border-t border-gray-200" id="stats-section" ref={statsRef}>
              {[
                { target: 2500, label: 'Members', icon: 'fas fa-users' },
                { target: 12, label: 'Pastors', icon: 'fas fa-cross' },
                { target: 3000, label: 'Donations', icon: 'fas fa-hand-holding-heart' },
                { target: 4, label: 'Churches', icon: 'fas fa-place-of-worship' }
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group relative animate-slide-up" 
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="relative">
                    <i className={`${stat.icon} text-primary/50 text-2xl mb-2 block group-hover:text-primary transition-colors`}></i>
                    <span className="block text-4xl font-bold text-primary counter font-serif" data-target={stat.target}>0</span>
                    <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="pt-8 animate-fade-in" style={{animationDelay: '1s'}}>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Join Our Community</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
