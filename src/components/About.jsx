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
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img src="/images/church image 1.jpg" alt="Worship" className="rounded-lg shadow-xl w-full h-96 object-cover transform transition group-hover:scale-[1.02] duration-500" />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-lg hidden md:block shadow-lg">
              <p className="text-white font-serif text-xl italic">"For God so loved the world..."</p>
            </div>
          </div>

          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Welcome</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">Welcome to Our Church</h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-lg font-light">A place of warmth, peace, and joy. We are dedicated to spreading the message of hope and love to our community and beyond.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t pt-8" id="stats-section" ref={statsRef}>
              <div>
                <span className="block text-4xl font-bold text-primary counter font-serif" data-target="2500">0</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Members</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary counter font-serif" data-target="12">0</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Pastors</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary counter font-serif" data-target="3000">0</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Donations</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary counter font-serif" data-target="4">0</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Churches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
