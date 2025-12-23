import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-dark text-gray-400 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white text-lg font-bold mb-6 font-serif">About Church</h4>
            <p className="text-sm leading-relaxed mb-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> About Us</a></li>
              <li><a href="#" className="hover:text-primary transition flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Sermons</a></li>
              <li><a href="#" className="hover:text-primary transition flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Events</a></li>
              <li><a href="#" className="hover:text-primary transition flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 font-serif">Recent Blog</h4>
            <div className="space-y-4">
              <div className="flex gap-4 group cursor-pointer">
                <div className="overflow-hidden rounded w-16 h-16 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div>
                  <a href="#" className="text-white text-sm hover:text-primary transition leading-tight block mb-1">Even the all-powerful Pointing has no control</a>
                  <span className="block text-xs text-gray-500"><i className="far fa-calendar mr-1"></i> Oct 12, 2025</span>
                </div>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="overflow-hidden rounded w-16 h-16 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div>
                  <a href="#" className="text-white text-sm hover:text-primary transition leading-tight block mb-1">Even the all-powerful Pointing has no control</a>
                  <span className="block text-xs text-gray-500"><i className="far fa-calendar mr-1"></i> Oct 16, 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-bold mb-6 font-serif">Newsletter</h4>
            <p className="text-sm mb-4 leading-relaxed">Subscribe to our newsletter to get the latest news and sermons.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Enter email" className="bg-gray-800 border-none p-3 rounded text-sm text-white focus:ring-1 focus:ring-primary focus:outline-none placeholder-gray-500" />
              <button className="bg-primary text-white py-3 rounded font-bold hover:bg-yellow-600 transition uppercase text-sm tracking-wide">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm">
          <p>&copy; 2025 Christian Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
