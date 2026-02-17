import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import About from '../components/About'
import Trust from '../components/Trust'
import Services from '../components/Services'
import Sermons from '../components/Sermons'
import Blog from '../components/Blog'
import Causes from '../components/Causes'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar variant="transparent" />
      <main>
        <HeroSlider />
        <About />
        <Trust />
        <Services />
        <Sermons />
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
