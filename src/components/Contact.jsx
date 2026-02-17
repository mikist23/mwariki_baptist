import React from 'react'
import { churchIdentity } from '../utils/siteContent'

export default function Contact() {
  return (
    <section id="contact" className="section-shell bg-surfaceAlt">
      <div className="section-wrap">
        <div className="section-head">
          <span className="kicker">
            <i className="fas fa-envelope-open-text text-[10px]" aria-hidden="true"></i>
            Connect with Us
          </span>
          <h2 className="section-title mt-5">Prayer, Partnerships, and Questions</h2>
          <p className="section-subtitle">Reach our team directly for pastoral care, visits, or ministry partnership conversations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="card-elevated p-8">
            <h3 className="font-serif text-3xl text-ink font-bold">Contact Information</h3>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
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

            <div className="mt-8 p-5 rounded-2xl bg-accentSoft border border-primary/20">
              <h4 className="font-bold text-ink">Partnership Briefings</h4>
              <p className="text-sm text-muted mt-2">
                For investor or partner inquiries, request our ministry brief and stewardship overview through this form.
              </p>
            </div>
          </article>

          <form className="card-elevated p-8 space-y-4" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Full Name" className="input-shell" required />
              <input name="email" type="email" placeholder="Email Address" className="input-shell" required />
            </div>
            <input name="subject" type="text" placeholder="Subject" className="input-shell" required />
            <textarea name="message" rows="6" placeholder="Your message" className="input-shell" required />
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
