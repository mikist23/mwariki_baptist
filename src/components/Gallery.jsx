import React, { useState, useEffect, useCallback } from 'react'

const galleryImages = [
  { 
    id: 1, 
    src: "/images/church image 1.jpg", 
    category: "services",
    title: "Sunday Service",
    description: "Weekly worship service gathering",
    date: "2024-01-21"
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "events",
    title: "Community Event",
    description: "Annual church community celebration",
    date: "2024-01-15"
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "community",
    title: "Youth Ministry",
    description: "Youth group activities and fellowship",
    date: "2024-01-10"
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1507692049790-de58293a4653?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "services",
    title: "Prayer Meeting",
    description: "Mid-week prayer and bible study",
    date: "2024-01-08"
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "events",
    title: "Baptism Ceremony",
    description: "Celebrating new believers",
    date: "2024-01-05"
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "community",
    title: "Outreach Program",
    description: "Serving the local community",
    date: "2023-12-28"
  },
  { 
    id: 7, 
    src: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "services",
    title: "Choir Performance",
    description: "Glorious worship through music",
    date: "2023-12-24"
  },
  { 
    id: 8, 
    src: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "events",
    title: "Christmas Celebration",
    description: "Christmas service and celebration",
    date: "2023-12-25"
  },
  { 
    id: 9, 
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "community",
    title: "Bible Study Group",
    description: "Weekly bible study and fellowship",
    date: "2023-12-20"
  },
  { 
    id: 10, 
    src: "/images/sermon 1.jpeg", 
    category: "services",
    title: "Sermon Series",
    description: "Powerful teaching from the Word",
    date: "2023-12-18"
  },
  { 
    id: 11, 
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "events",
    title: "Easter Service",
    description: "Resurrection Sunday celebration",
    date: "2023-04-09"
  },
  { 
    id: 12, 
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    category: "community",
    title: "Church Picnic",
    description: "Annual family fellowship picnic",
    date: "2023-06-15"
  }
]

const categories = [
  { id: 'all', name: 'All Photos', icon: 'fa-th' },
  { id: 'services', name: 'Services', icon: 'fa-church' },
  { id: 'events', name: 'Events', icon: 'fa-calendar' },
  { id: 'community', name: 'Community', icon: 'fa-users' }
]

export default function Gallery(){
  const [selectedImage, setSelectedImage] = useState(null)
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [activeCategory, setActiveCategory] = useState('all')
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [pinchDistance, setPinchDistance] = useState(null)

  const filterImages = useCallback((category) => {
    if (category === 'all') {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category))
    }
    setActiveCategory(category)
  }, [])

  const openLightbox = (image) => {
    setSelectedImage(image)
    setZoomLevel(1)
    setIsFullscreen(false)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setZoomLevel(1)
    setIsFullscreen(false)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    }
    
    setSelectedImage(filteredImages[newIndex])
    setZoomLevel(1)
  }

  const handleZoom = (action) => {
    if (action === 'in') {
      setZoomLevel(prev => Math.min(prev + 0.25, 3))
    } else if (action === 'out') {
      setZoomLevel(prev => Math.max(prev - 0.25, 0.5))
    } else if (action === 'reset') {
      setZoomLevel(1)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      })
    } else if (e.touches.length === 2) {
      // Pinch to zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      setPinchDistance(distance)
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchDistance !== null) {
      e.preventDefault()
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      const scale = distance / pinchDistance
      setZoomLevel(prev => Math.max(0.5, Math.min(3, prev * scale)))
      setPinchDistance(distance)
    }
  }

  const handleTouchEnd = (e) => {
    if (touchStart && e.changedTouches.length === 1) {
      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
      setTouchEnd(touchEnd)

      // Swipe detection for navigation
      const deltaX = touchEnd.x - touchStart.x
      const deltaY = touchEnd.y - touchStart.y
      const minSwipeDistance = 50

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          navigateImage('next')
        } else {
          navigateImage('prev')
        }
      }
    }
    setPinchDistance(null)
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      
      switch(e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          navigateImage('prev')
          break
        case 'ArrowRight':
          navigateImage('next')
          break
        case '+':
        case '=':
          handleZoom('in')
          break
        case '-':
          handleZoom('out')
          break
        case '0':
          handleZoom('reset')
          break
        case 'f':
          toggleFullscreen()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage])

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Gallery</h2>
            <h3 className="text-4xl font-serif font-bold text-gray-900">Church Gallery</h3>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => filterImages(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`fas ${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item group h-64 rounded-lg cursor-pointer relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs opacity-90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand text-white text-xs"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/95'} flex items-center justify-center`}
             onClick={closeLightbox}>
          
          {/* Controls Bar */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={closeLightbox}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Close (ESC)"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
                <div>
                  <h3 className="font-semibold">{selectedImage.title}</h3>
                  <p className="text-sm opacity-80">{selectedImage.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleZoom('out'); }}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Zoom Out (-)"
                >
                  <i className="fas fa-search-minus"></i>
                </button>
                <span className="text-sm px-2">{Math.round(zoomLevel * 100)}%</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleZoom('in'); }}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Zoom In (+)"
                >
                  <i className="fas fa-search-plus"></i>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleZoom('reset'); }}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Reset Zoom (0)"
                >
                  <i className="fas fa-compress"></i>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Fullscreen (F)"
                >
                  <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
                </button>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl mx-auto px-8 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-lg" style={{ maxHeight: isFullscreen ? '100vh' : '80vh' }}>
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="block transition-transform duration-300 cursor-move image-transition"
                style={{ 
                  transform: `scale(${zoomLevel})`,
                  maxWidth: isFullscreen ? 'none' : '100%',
                  maxHeight: isFullscreen ? 'none' : '80vh'
                }}
                draggable={false}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            title="Previous Image (←)"
          >
            <i className="fas fa-chevron-left text-2xl"></i>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            title="Next Image (→)"
          >
            <i className="fas fa-chevron-right text-2xl"></i>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
            {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
          </div>

          {/* Thumbnails Strip */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center">
            <div className="flex space-x-2 max-w-4xl mx-auto px-4 overflow-x-auto">
              {filteredImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(img); setZoomLevel(1); }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-300 ${
                    img.id === selectedImage.id 
                      ? 'border-primary scale-110' 
                      : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
