import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DonatePage from './pages/DonatePage'
import BlogPage from './pages/BlogPage'
import ServicePage from './pages/ServicePage'
import SermonPage from './pages/SermonPage'
import ScrollToTop from './components/ScrollToTop'

export default function App(){
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/sermons/:id" element={<SermonPage />} />
      </Routes>
    </BrowserRouter>
  )
}
