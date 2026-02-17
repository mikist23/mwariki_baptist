export const sermons = [
  {
    id: 'sunset-inspire',
    date: 'July 01, 2019',
    title: 'Let the Sunset Inspire You',
    pastor: 'Majimbo Absai',
    summary: 'A reflective message on hope, renewal, and God’s daily mercies.',
    img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'spiritual-mentality',
    date: 'July 01, 2019',
    title: 'Developing Spiritual Mentality',
    pastor: 'Majimbo Absai',
    summary: 'Growing a Christ-centered mindset through Scripture and prayer.',
    img: 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bible-motivate',
    date: 'July 01, 2019',
    title: 'Let the Bible Motivate You',
    pastor: 'Majimbo Absai',
    summary: 'Practical encouragement for living out the Word in everyday life.',
    img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'faith-in-trials',
    date: 'July 01, 2019',
    title: 'Faith in the Fire',
    pastor: 'Majimbo Absai',
    summary: 'Trusting God through seasons of testing and uncertainty.',
    img: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'grace-and-truth',
    date: 'July 01, 2019',
    title: 'Grace and Truth',
    pastor: 'Majimbo Absai',
    summary: 'How mercy and truth walk together in the life of the believer.',
    img: 'https://images.unsplash.com/photo-1490127252417-7c393f9f832f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'steadfast-joy',
    date: 'July 01, 2019',
    title: 'Steadfast Joy',
    pastor: 'Majimbo Absai',
    summary: 'Finding lasting joy in Christ beyond circumstances.',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
  },
]

export function getSermonById(id) {
  return sermons.find((sermon) => sermon.id === id)
}
