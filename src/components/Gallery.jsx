import React, { useEffect, useMemo, useState } from 'react'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=900&q=80', category: 'services', title: 'Sunday Worship Service', description: 'Weekly congregational worship and Scripture teaching.' },
  { id: 2, src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=80', category: 'services', title: 'Biblical Preaching', description: 'Faithful preaching centered on the Word of God.' },
  { id: 3, src: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=900&q=80', category: 'services', title: 'Prayer and Worship', description: 'Corporate prayer and worship in one accord.' },
  { id: 4, src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80', category: 'events', title: 'Youth Discipleship Forum', description: 'Interactive discipleship sessions for young believers.' },
  { id: 5, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80', category: 'events', title: 'Church Fellowship Lunch', description: 'Shared meals, testimonies, and meaningful fellowship.' },
  { id: 6, src: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=900&q=80', category: 'events', title: 'Prayer Vigil Night', description: 'Evening gathering for intercession and renewal.' },
  { id: 7, src: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=900&q=80', category: 'community', title: 'Youth Mentorship', description: 'Guiding youth through biblical growth and support.' },
  { id: 8, src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80', category: 'community', title: 'Community Outreach', description: 'Serving local families with practical love and care.' },
  { id: 9, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80', category: 'community', title: 'Neighborhood Mission Day', description: 'Church members sharing hope through local outreach.' },
]

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'services', name: 'Services' },
  { id: 'events', name: 'Events' },
  { id: 'community', name: 'Community' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages
    return galleryImages.filter((img) => img.category === activeCategory)
  }, [activeCategory])

  const selectedIndex = selectedImage ? filteredImages.findIndex((item) => item.id === selectedImage.id) : -1

  const navigate = (dir) => {
    if (!selectedImage || !filteredImages.length) return
    const next = dir === 'next' ? (selectedIndex + 1) % filteredImages.length : (selectedIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[next])
  }

  useEffect(() => {
    if (!selectedImage) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowRight') navigate('next')
      if (e.key === 'ArrowLeft') navigate('prev')
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedImage, selectedIndex, filteredImages])

  return (
    <>
      <section id="gallery" className="section-shell bg-surface">
        <div className="section-wrap">
          <div className="section-head">
            <span className="kicker">
              <i className="fas fa-images text-[10px]" aria-hidden="true"></i>
              Church Gallery
            </span>
            <h2 className="section-title mt-5">Life at Mwariki Baptist</h2>
            <p className="section-subtitle">Moments from worship, fellowship, and outreach across our church family.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${
                  activeCategory === category.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                type="button"
                className="gallery-item relative overflow-hidden rounded-2xl border border-borderSoft h-52 md:h-64"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} className="w-full h-full object-cover image-transition" loading="lazy" />
                <div className="gallery-overlay absolute inset-0 flex items-end">
                  <div className="p-4 text-left text-white">
                    <p className="font-semibold text-sm">{image.title}</p>
                    <p className="text-xs opacity-90">{image.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <p className="bg-black/60 text-white text-xs px-3 py-2 rounded-full">{selectedImage.title}</p>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-black/60 text-white"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white"
              onClick={() => navigate('prev')}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white"
              onClick={() => navigate('next')}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
