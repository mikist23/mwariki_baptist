import React from 'react'

const imgs = [
  // 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1507692049790-de58293a4653?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  // 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  "/images/church image 1.jpg",
  "/images/church image 1.jpg",
  "/images/church image 1.jpg",
  "/images/church image 1.jpg",
  "/images/church image 1.jpg",
  "/images/church image 1.jpg",
  "/images/church image 1.jpg",
  "/images/church image 1.jpg"
]

export default function Gallery(){
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Gallery</h2>
          <h3 className="text-4xl font-serif font-bold text-gray-900">Church Gallery</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {imgs.map((src,i)=> (
            <div key={i} className="gallery-item h-64 rounded-lg cursor-pointer relative overflow-hidden">
              <img src={src} className="w-full h-full object-cover" />
              <div className="gallery-overlay absolute inset-0 flex items-center justify-center text-white"><i className="fas fa-search-plus text-3xl" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
