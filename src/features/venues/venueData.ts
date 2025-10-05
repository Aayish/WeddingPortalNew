// Fetch a single venue by ID from REST API and map to Venue type
export const fetchVenueById = async (venueId: string): Promise<Venue | undefined> => {
  try {
    const response = await axios.get<ApiVenue>(`http://localhost:5011/api/venues/${venueId}`)
    const venue = response.data
    return {
      id: String(venue.venueId),
      name: venue.name,
      tagline: venue.tagline ?? '',
      description: venue.description,
      location: `${venue.location.city}, ${venue.location.area}, ${venue.location.address}`,
      capacity: {
        min: venue.capacityMin,
        max: venue.capacityMax
      },
      price: {
        starting: venue.priceFrom,
        currency: venue.priceCurrency ?? 'PKR'
      },
      images: [
        // Images still hardcoded, as not yet in database
        {
          id: `${venue.venueId}-img1`,
          url: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80`,
          alt: 'Modern wedding venue',
          category: 'exterior'
        },
        {
          id: `${venue.venueId}-img2`,
          url: `https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80`,
          alt: 'Elegant banquet hall',
          category: 'interior'
        },
        {
          id: `${venue.venueId}-img3`,
          url: `https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80`,
          alt: 'Garden wedding setup',
          category: 'garden'
        },
        {
          id: `${venue.venueId}-img4`,
          url: `https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80`,
          alt: 'Reception area',
          category: 'reception'
        },
        {
          id: `${venue.venueId}-img5`,
          url: `https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80`,
          alt: 'Ceremony space',
          category: 'ceremony'
        }
      ],
      amenities: (venue.facilities || []).map((f) => ({
        id: String(f.facilityId),
        name: f.name,
        icon: f.icon ?? '🏷️',
        description: f.description,
        included: f.included ?? true
      })),
      reviews: (venue.reviews || []).map((r) => ({
        id: String(r.reviewId),
        authorName: r.authorName ?? 'Anonymous',
        authorLocation: r.authorLocation ?? 'Unknown',
        rating: r.rating,
        review: r.reviewText,
        date: r.createdAt,
        eventType: r.eventType ?? 'Wedding'
      })),
      rating: venue.averageRating,
      totalReviews: venue.reviewCount,
      features: [venue.categoryName, ...(venue.facilities || []).map((f) => f.name)],
      contact: {
        phone: (venue.contacts?.find((c) => c.type === 1)?.value) || '',
        email: (venue.contacts?.find((c) => c.type === 2)?.value) || '',
        website: venue.website ?? 'https://example.com'
      }
    }
  } catch (error) {
    console.error('Error fetching venue by ID:', error)
    return undefined
  }
}
// API response types
export interface ApiLocation {
  locationId: number
  city: string
  area: string
  address: string
  latitude: number
  longitude: number
}

export interface ApiContact {
  contactId: number
  type: number
  value: string
  isPrimary: boolean
}

export interface ApiMedia {
  mediaId: number
  fileUrl: string
  mediaType: number
  isPrimary: boolean
}

export interface ApiFacility {
  facilityId: number
  name: string
  description: string
  icon?: string // Optional, added for frontend mapping
  included?: boolean // Optional, added for frontend mapping
}

export interface ApiReview {
  reviewId: number
  venueId: number
  userId: number
  rating: number
  reviewText: string
  createdAt: string
  authorName?: string // Optional, added for frontend mapping
  authorLocation?: string // Optional, added for frontend mapping
  eventType?: string // Optional, added for frontend mapping
}

export interface ApiVenue {
  venueId: number
  name: string
  description: string
  categoryId: number
  categoryName: string
  capacityMin: number
  capacityMax: number
  pricingModel: number
  priceFrom: number
  priceTo: number
  locationId: number
  location: ApiLocation
  isFeatured: boolean
  createdAt: string
  updatedAt: string
  contacts: ApiContact[]
  media: ApiMedia[]
  facilities: ApiFacility[]
  reviews: ApiReview[]
  averageRating: number
  reviewCount: number
  tagline?: string // Optional, added for frontend mapping
  priceCurrency?: string // Optional, added for frontend mapping
  website?: string // Optional, added for frontend mapping
}
// Venue data types
export interface VenueImage {
  id: string
  url: string
  alt: string
  category: 'exterior' | 'interior' | 'ceremony' | 'reception' | 'garden'
}

export interface VenueAmenity {
  id: string
  name: string
  icon: string
  description: string
  included: boolean
}

export interface VenueReview {
  id: string
  authorName: string
  authorLocation: string
  rating: number
  review: string
  date: string
  eventType: string
}

export interface Venue {
  id: string
  name: string
  tagline: string
  description: string
  location: string
  capacity: {
    min: number
    max: number
  }
  price: {
    starting: number
    currency: string
  }
  images: VenueImage[]
  amenities: VenueAmenity[]
  reviews: VenueReview[]
  rating: number
  totalReviews: number
  features: string[]
  contact: {
    phone: string
    email: string
    website: string
  }
}

// Fetch venues from REST API and map to Venue type
import axios from 'axios'

export const fetchFeaturedVenues = async (): Promise<Venue[]> => {
  const response = await axios.get<ApiVenue[]>('http://localhost:5011/api/venues/featured')
  const apiVenues = response.data
  return apiVenues.map((venue) => ({
    id: String(venue.venueId),
    name: venue.name,
  tagline: 'Beautiful venue', // TODO: Replace with API value when available
    description: venue.description,
    location: `${venue.location.city}, ${venue.location.area}, ${venue.location.address}`,
    capacity: {
      min: venue.capacityMin,
      max: venue.capacityMax
    },
    price: {
      starting: venue.priceFrom,
      currency: 'PKR' // Default, adjust if needed
    },
    images: [
      {
        id: `${venue.venueId}-img1`,
        url: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80`,
        alt: 'Modern wedding venue',
        category: 'exterior'
      },
      {
        id: `${venue.venueId}-img2`,
        url: `https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80`,
        alt: 'Elegant banquet hall',
        category: 'interior'
      },
      {
        id: `${venue.venueId}-img3`,
        url: `https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80`,
        alt: 'Garden wedding setup',
        category: 'garden'
      },
      {
        id: `${venue.venueId}-img4`,
        url: `https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80`,
        alt: 'Reception area',
        category: 'reception'
      },
      {
        id: `${venue.venueId}-img5`,
        url: `https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80`,
        alt: 'Ceremony space',
        category: 'ceremony'
      }
    ],
    amenities: (venue.facilities || []).map((f) => ({
      id: String(f.facilityId),
      name: f.name,
  icon: '🏷️', // TODO: Replace with API value when available
      description: f.description,
      included: true // Not provided, default true
    })),
    reviews: (venue.reviews || []).map((r) => ({
      id: String(r.reviewId),
  authorName: 'Anonymous', // TODO: Replace with API value when available
  authorLocation: 'Unknown', // TODO: Replace with API value when available
      rating: r.rating,
      review: r.reviewText,
      date: r.createdAt,
  eventType: 'Wedding', // TODO: Replace with API value when available
    })),
    rating: venue.averageRating,
    totalReviews: venue.reviewCount,
    features: [venue.categoryName, ...(venue.facilities || []).map((f) => f.name)],
    contact: {
      phone: (venue.contacts?.find((c) => c.type === 1)?.value) || '',
      email: (venue.contacts?.find((c) => c.type === 2)?.value) || '',
  website: 'https://example.com' // TODO: Replace with API value when available
    }
  }))
}