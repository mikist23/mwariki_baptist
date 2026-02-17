import React from 'react'

const coreBeliefs = [
  {
    title: 'Scripture as Final Authority',
    text: 'We believe the Bible is the inspired Word of God and our final guide for faith, doctrine, and daily living.',
    icon: 'fa-book-bible',
  },
  {
    title: 'Salvation Through Christ Alone',
    text: 'We proclaim salvation by grace through faith in Jesus Christ, whose death and resurrection reconcile us to God.',
    icon: 'fa-cross',
  },
  {
    title: 'Prayer and Worship',
    text: 'We seek God through reverent worship and persistent prayer, depending on the Holy Spirit in all ministry.',
    icon: 'fa-hands-praying',
  },
  {
    title: 'Discipleship and Holy Living',
    text: 'We are committed to forming mature disciples who obey Christ, serve others, and reflect godly character.',
    icon: 'fa-people-group',
  },
]

const aboutStats = [
  { value: '5', label: 'Weekly Prayer Meetings' },
  { value: '8', label: 'Discipleship Groups' },
  { value: '320+', label: 'Bible Study Participation' },
  { value: '60+', label: 'Ministry Volunteers' },
]

export default function About() {
  return (
    <section id="about" className="section-shell bg-surface scroll-mt-24">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-church text-[10px]" aria-hidden="true"></i>
            About Mwariki Baptist
          </span>
          <h2 className="section-title mt-5">Rooted in Scripture, Growing in Christ</h2>
          <p className="section-subtitle">
            We are a Christ-centered church devoted to God&apos;s Word, faithful prayer, biblical fellowship, and lifelong discipleship.
          </p>
        </div>

        <div className="card-elevated overflow-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-12">
            <article className="xl:col-span-7 relative min-h-[320px] md:min-h-[420px]">
              <img
                src="/images/church image 1.jpg"
                alt="Mwariki Baptist congregation gathered in worship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"></div>

              <div className="absolute left-5 right-5 md:left-8 md:right-8 bottom-8">
                <p className="chip bg-white/90 border-primary/30 text-warning">Biblical Foundation</p>
                <h3 className="font-serif text-white text-2xl md:text-4xl font-bold mt-4 leading-tight">
                  Worshiping God, Making Disciples, and Living the Gospel
                </h3>
                <p className="text-white/90 mt-3 text-sm md:text-base leading-relaxed max-w-prose">
                  Our church life is shaped by biblical preaching, earnest prayer, spiritual formation, and gospel witness in everyday life.
                </p>
              </div>
            </article>

            <article className="xl:col-span-5 p-7 md:p-9 bg-surface">
              <h3 className="font-serif text-3xl text-ink font-bold">Our Core Beliefs</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreBeliefs.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-borderSoft bg-surfaceAlt p-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                    </div>
                    <h4 className="text-base font-bold text-ink leading-tight">{item.title}</h4>
                    <p className="text-sm text-muted mt-2 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#services" className="btn-primary">
                  Explore Ministries
                </a>
                <a href="#contact" className="btn-secondary">
                  Request Prayer
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutStats.map((stat) => (
            <article key={stat.label} className="card-elevated p-5 text-center">
              <p className="font-serif text-3xl text-ink font-bold leading-none">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-slate-500 mt-2 leading-tight">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
