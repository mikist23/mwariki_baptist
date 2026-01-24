import React from "react";

const items = [
  {
    date: "July 01, 2019",
    title: "Let the Sunset Inspire You",
    pastor: "Majimbo Absai",
    img:
      "/images/sermon 1.jpeg",
  },
  {
    date: "July 01, 2019",
    title: "Developing Spiritual Mentality",
    pastor: "Majimbo Absai",
    img:
      //"https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "/images/sermon 1.jpeg",
  },
  {
    date: "July 01, 2019",
    title: "Let the Bible Motivate You",
    pastor: "Majimbo Absai",
    img:
      //"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "/images/sermon 1.jpeg",
  },
  {
    date: "July 01, 2019",
    title: "Let the Sunset Inspire You",
    pastor: "Majimbo Absai",
    img:
      //"https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "/images/sermon 1.jpeg",
  },
  {
    date: "July 01, 2019",
    title: "Developing Spiritual Mentality",
    pastor: "Majimbo Absai",
    img:
      //"https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "/images/sermon 1.jpeg",
  },
  {
    date: "July 01, 2019",
    title: "Let the Bible Motivate You",
    pastor: "Majimbo Absai",
    img:
      //"https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "/images/sermon 1.jpeg",
  },
];

export default function Sermons() {
  return (
    <section id="sermons" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* heading like the screenshot */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="h-px w-20 bg-gray-300" />
            <span className="text-xs tracking-widest text-gray-400">SERVICES</span>
            <div className="h-px w-20 bg-gray-300" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Mwariki Baptist
          </h2>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((it, idx) => (
            <article key={idx} className="group">
              {/* image box with border & subtle shadow */}
              <div className="relative overflow-hidden rounded-md border border-gray-100 shadow-sm">
                {/* image */}
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-[360px] object-cover transform transition duration-700 group-hover:scale-105"
                />

                {/* dark overlay (keeps the image visible but gives space for text/buttons) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 flex flex-col justify-end">
                  {/* inside overlay: small 'By Pastor' label */}
                  <div className="px-6 py-6">
                    <div className="inline-block bg-black/35 backdrop-blur-sm px-3 py-1 rounded text-white text-xs uppercase tracking-wider mb-4 font-semibold">
                      By Pastor: <span className="font-serif ml-2">{it.pastor}</span>
                    </div>

                    {/* action buttons centered */}
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-white bg-opacity-95 text-gray-900 px-4 py-2 rounded-md text-xs font-bold shadow-sm hover:scale-105 transition"
                        aria-label="Watch"
                      >
                        <i className="fas fa-play text-sm" />
                        <span>WATCH</span>
                      </a>

                      <a
                        href="#"
                        className="inline-flex items-center gap-2 border border-white/60 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-white/10 transition"
                        aria-label="Download"
                      >
                        <i className="fas fa-download text-sm" />
                        <span>DOWNLOAD</span>
                      </a>
                    </div>
                  </div>
                </div>

                
              </div>

              {/* title + date below */}
              <div className="mt-6 text-center">
                <h3 className="text-lg font-serif text-gray-900 mb-2 hover:text-primary transition">
                  <a href="#">{it.title}</a>
                </h3>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{it.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
