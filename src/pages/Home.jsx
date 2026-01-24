import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import About from '../components/About'
import Services from '../components/Services'
import Sermons from '../components/Sermons'
import Blog from '../components/Blog'
import Causes from '../components/Causes'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="font-sans text-gray-600 antialiased">
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <Sermons />
        <section
        className="relative py-32 bg-fixed bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
             "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <i className="fas fa-quote-left text-4xl text-primary mb-6 block opacity-50"></i>

          <h2 className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-6 max-w-4xl mx-auto text-white">
            "For God so loved the world, that he gave his only begotten Son, that
            whosoever believeth in him should not perish, but have everlasting life."
          </h2>

          <p className="text-primary font-bold tracking-widest uppercase">
            – John 3:16
          </p>
        </div>
      </section>

        <Blog />
        <Causes />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
