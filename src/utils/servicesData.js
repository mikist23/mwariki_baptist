export const services = [
  {
    id: 'sunday-worship',
    icon: 'fa-church',
    title: 'Sunday Worship',
    summary: 'A welcoming service with praise, prayer, and Bible teaching for the whole family.',
    next: `Every Sunday \u2022 Morning`,
    location: 'Main Sanctuary',
    highlights: ['Warm welcome for newcomers', 'Worship & prayer', 'Biblical preaching'],
    schedule: [{ label: 'Main Service', day: 'Sunday', time: 'Morning' }],
    image: '/images/church image 1.jpg',
  },
  {
    id: 'bible-study',
    icon: 'fa-book-bible',
    title: 'Bible Study',
    summary: 'Mid-week study and discussion to deepen your understanding of Scripture and grow together.',
    next: `Weekly \u2022 Mid-week`,
    location: 'Fellowship Hall',
    highlights: ['Interactive teaching', 'Small group discussion', 'Prayer & fellowship'],
    schedule: [{ label: 'Bible Study', day: 'Mid-week', time: 'Evening' }],
    image:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'prayer-meeting',
    icon: 'fa-hands-praying',
    title: 'Prayer Meeting',
    summary: 'A focused time of corporate prayer for our church, families, and the community.',
    next: `Weekly \u2022 Evening`,
    location: 'Main Sanctuary',
    highlights: ['Prayer requests', 'Scripture-led prayer', 'Encouragement & testimony'],
    schedule: [{ label: 'Prayer Meeting', day: 'Weekly', time: 'Evening' }],
    image:
      'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'outreach',
    icon: 'fa-hand-holding-heart',
    title: 'Outreach & Mission',
    summary: 'Practical ministry and evangelism - serving our neighbors with the love of Christ.',
    next: `Monthly \u2022 Community`,
    location: 'Meet at Church',
    highlights: ['Community visits', 'Support & compassion', 'Sharing the Gospel'],
    schedule: [{ label: 'Outreach', day: 'Monthly', time: 'Weekend' }],
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  },
]

export function getServiceById(id) {
  return services.find((service) => service.id === id)
}

