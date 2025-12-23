import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Contact</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Get In Touch</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-8 font-serif">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-4 text-xl"></i>
                <p className="text-gray-600 leading-relaxed">198 West 21th Street, Suite 721<br/>New York NY 10016</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-primary mt-1 mr-4 text-xl"></i>
                <p className="text-gray-600 font-medium">+ 1235 2355 98</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-4 text-xl"></i>
                <p className="text-gray-600 font-medium">info@yoursite.com</p>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="name" type="text" placeholder="Your Name" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
              <input name="email" type="email" placeholder="Your Email" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
            </div>
            <input name="subject" type="text" placeholder="Subject" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
            <textarea name="message" rows="5" placeholder="Message" className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" />
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition shadow-lg w-full md:w-auto uppercase tracking-wide text-sm">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
