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
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden scroll-mt-24">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-12 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in">
          <span className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            <i className="fas fa-church text-[10px]" aria-hidden="true"></i>
            About Mwariki Baptist
          </span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-5 leading-tight">
            A Classic Church Community for a Modern World
          </h3>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            Rooted in Scripture, formed by prayer, and committed to serving people with clarity, compassion, and conviction.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[32px] shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[380px] lg:min-h-[520px]">
              <img
                src="/images/church image 1.jpg"
                alt="Mwariki Baptist congregation worshiping together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6">
                <div className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  <i className="fas fa-book-bible text-primary" aria-hidden="true"></i>
                  Christ Centered Teaching
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                    Worship, Fellowship, and Discipleship
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We exist to help people know Christ, grow in faith, and serve others. Our gatherings are welcoming, our teaching is biblical, and our mission is practical.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'fa-cross', title: 'Biblical Preaching', text: 'Clear teaching grounded in God\'s Word.' },
                    { icon: 'fa-hands-praying', title: 'Prayer Culture', text: 'A church family that prays together consistently.' },
                    { icon: 'fa-people-group', title: 'Strong Fellowship', text: 'Meaningful relationships across all ages.' },
                    { icon: 'fa-hand-holding-heart', title: 'Local Outreach', text: 'Serving the community with compassion.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <i className={`fas ${item.icon} text-primary text-sm`} aria-hidden="true"></i>
                      </div>
                      <p className="text-sm font-bold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-lg transition-all duration-300"
                >
                  Explore Ministries
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                >
                  Prayer Request
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          id="stats-section"
          ref={statsRef}
        >
          {[
            { target: 2500, label: 'Members' },
            { target: 12, label: 'Pastors' },
            { target: 3000, label: 'Donations' },
            { target: 4, label: 'Churches' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="block text-3xl md:text-4xl font-serif font-bold text-primary counter" data-target={stat.target}>
                0
              </span>
              <span className="text-[11px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
