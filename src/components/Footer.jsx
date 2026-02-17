import React from 'react'
import { churchIdentity } from '../utils/siteContent'

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300 section-shell">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-white font-bold">{churchIdentity.name}</h3>
            <p className="text-sm leading-relaxed mt-4 text-slate-300">{churchIdentity.tagline}</p>
            <div className="mt-5 space-y-2 text-sm">
              <p>
                <i className="fas fa-location-dot text-primary mr-2" aria-hidden="true"></i>
                {churchIdentity.location}
              </p>
              <p>
                <i className="fas fa-phone text-primary mr-2" aria-hidden="true"></i>
                {churchIdentity.phone}
              </p>
              <p>
                <i className="fas fa-envelope text-primary mr-2" aria-hidden="true"></i>
                {churchIdentity.email}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="hover:text-primary">About</a></li>
              <li><a href="/#services" className="hover:text-primary">Ministries</a></li>
              <li><a href="/#sermons" className="hover:text-primary">Sermons</a></li>
              <li><a href="/#events" className="hover:text-primary">Events</a></li>
              <li><a href="/donate" className="hover:text-primary">Donate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white font-bold mb-4">Partnership</h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>Investor and mission partner briefings</li>
              <li>Quarterly stewardship reporting</li>
              <li>Community impact dashboards</li>
              <li>Leadership access and prayer forums</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white font-bold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Get updates on ministry milestones, events, and prayer needs.</p>
            <form className="space-y-2" aria-label="Newsletter subscription">
              <input type="email" placeholder="Your email" className="input-shell bg-slate-900 border-slate-700 text-white" />
              <button type="button" className="btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-xs text-slate-400 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} {churchIdentity.name}. All rights reserved.</p>
          <p>Designed for faith, credibility, and long-term community impact.</p>
        </div>
      </div>
    </footer>
  )
}
