import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DonatePage from './pages/DonatePage'
import BlogPage from './pages/BlogPage'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}
