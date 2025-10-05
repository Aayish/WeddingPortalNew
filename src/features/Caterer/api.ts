import type { Caterer } from './catererTypes'

// Example mock data
const mockCaterers: Caterer[] = [
  {
    id: '1',
    name: 'Royal Banquets Catering',
    images: [
      { id: 'img1', url: '/images/caterer1.jpg', alt: 'Buffet setup' },
      { id: 'img2', url: '/images/caterer2.jpg', alt: 'Live cooking station' },
      { id: 'img3', url: '/images/caterer3.jpg', alt: 'Dessert bar' },
    ],
    location: 'Lahore, Pakistan',
    capacity: { min: 50, max: 1000 },
    price: { starting: 1200 },
    rating: 4.7,
    description: 'Royal Banquets Catering offers a wide range of multi-cuisine menus, live cooking stations, and custom desserts for your wedding events.',
    amenities: ['Multi-cuisine Menu', 'Vegetarian Options', 'Custom Desserts', 'On-site Catering', 'Event Staff', 'Beverage Service'],
    isSponsored: true,
  },
  // Add more caterers as needed
]

export async function fetchCatererById(id: string): Promise<Caterer | undefined> {
  // Simulate API delay
  await new Promise(res => setTimeout(res, 500))
  return mockCaterers.find(c => c.id === id)
}
import { caterers } from './caterers';

export function getFeaturedCaterers(): Promise<Caterer[]> {
  // Simulate fetch from /api/caterer/getfeaturedcaterere
  console.log('Fetching featured caterers...');
  return Promise.resolve(caterers.filter(c => c.isSponsored));
}
