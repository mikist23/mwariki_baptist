export const sermons = [
  {
    id: 'sunset-inspire',
    date: 'July 01, 2019',
    title: 'Let the Sunset Inspire You',
    pastor: 'Majimbo Absai',
    summary: 'A reflective message on hope, renewal, and God’s daily mercies.',
    img: '/images/sermon 1.jpeg',
  },
  {
    id: 'spiritual-mentality',
    date: 'July 01, 2019',
    title: 'Developing Spiritual Mentality',
    pastor: 'Majimbo Absai',
    summary: 'Growing a Christ-centered mindset through Scripture and prayer.',
    img: '/images/sermon 1.jpeg',
  },
  {
    id: 'bible-motivate',
    date: 'July 01, 2019',
    title: 'Let the Bible Motivate You',
    pastor: 'Majimbo Absai',
    summary: 'Practical encouragement for living out the Word in everyday life.',
    img: '/images/sermon 1.jpeg',
  },
  {
    id: 'faith-in-trials',
    date: 'July 01, 2019',
    title: 'Faith in the Fire',
    pastor: 'Majimbo Absai',
    summary: 'Trusting God through seasons of testing and uncertainty.',
    img: '/images/sermon 1.jpeg',
  },
  {
    id: 'grace-and-truth',
    date: 'July 01, 2019',
    title: 'Grace and Truth',
    pastor: 'Majimbo Absai',
    summary: 'How mercy and truth walk together in the life of the believer.',
    img: '/images/sermon 1.jpeg',
  },
  {
    id: 'steadfast-joy',
    date: 'July 01, 2019',
    title: 'Steadfast Joy',
    pastor: 'Majimbo Absai',
    summary: 'Finding lasting joy in Christ beyond circumstances.',
    img: '/images/sermon 1.jpeg',
  },
]

export function getSermonById(id) {
  return sermons.find((sermon) => sermon.id === id)
}
