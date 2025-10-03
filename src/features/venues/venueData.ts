// Venue data types and mock data

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

// Mock venue data
export const mockVenues: Record<string, Venue> = {
  "1": {
    id: "1",
    name: "Rosewood Manor",
    tagline: "Where Elegance Meets Timeless Romance",
    description: "Nestled among rolling hills and manicured gardens, Rosewood Manor offers an enchanting setting for your special day. Our historic estate combines classic architecture with modern amenities, creating the perfect backdrop for unforgettable wedding celebrations.",
    location: "Napa Valley, California",
    capacity: {
      min: 50,
      max: 200
    },
    price: {
      starting: 8500,
      currency: "USD"
    },
    rating: 4.9,
    totalReviews: 127,
    features: [
      "Historic Manor House",
      "Rose Garden Ceremony Site",
      "Grand Ballroom",
      "Bridal Suite",
      "Groom's Lounge",
      "Professional Lighting",
      "Sound System",
      "Catering Kitchen"
    ],
    contact: {
      phone: "+1 (707) 555-0123",
      email: "events@rosewoodmanor.com",
      website: "www.rosewoodmanor.com"
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Rosewood Manor exterior with gardens",
        category: "exterior"
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        alt: "Grand ballroom with chandelier",
        category: "interior"
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Garden ceremony setup",
        category: "ceremony"
      },
      {
        id: "4",
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        alt: "Reception dinner setup",
        category: "reception"
      },
      {
        id: "5",
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Rose garden pathway",
        category: "garden"
      }
    ],
    amenities: [
      {
        id: "1",
        name: "Catering Kitchen",
        icon: "🍽️",
        description: "Professional kitchen for catering services",
        included: true
      },
      {
        id: "2",
        name: "Bridal Suite",
        icon: "👰",
        description: "Private getting-ready room for the bride",
        included: true
      },
      {
        id: "3",
        name: "Parking",
        icon: "🚗",
        description: "On-site parking for 150+ vehicles",
        included: true
      },
      {
        id: "4",
        name: "Sound System",
        icon: "🎵",
        description: "Professional audio equipment",
        included: true
      },
      {
        id: "5",
        name: "Lighting",
        icon: "💡",
        description: "Ambient and dance floor lighting",
        included: true
      },
      {
        id: "6",
        name: "Wedding Coordinator",
        icon: "📋",
        description: "On-site coordination on wedding day",
        included: false
      }
    ],
    reviews: [
      {
        id: "1",
        authorName: "Sarah & Michael",
        authorLocation: "San Francisco, CA",
        rating: 5,
        review: "Rosewood Manor exceeded all our expectations! The gardens were absolutely stunning, and the staff made our day perfect. Our guests are still talking about how magical everything was.",
        date: "September 2024",
        eventType: "Wedding"
      },
      {
        id: "2",
        authorName: "Emily & James",
        authorLocation: "Los Angeles, CA",
        rating: 5,
        review: "The most beautiful venue we've ever seen. The historic charm combined with modern amenities made our wedding day a dream come true. Highly recommend!",
        date: "August 2024",
        eventType: "Wedding"
      },
      {
        id: "3",
        authorName: "Jessica & David",
        authorLocation: "Sacramento, CA",
        rating: 4,
        review: "Beautiful venue with incredible photo opportunities. The rose garden ceremony was breathtaking. Our only small issue was with parking during peak season.",
        date: "July 2024",
        eventType: "Wedding"
      }
    ]
  },
  "2": {
    id: "2",
    name: "Oceanview Terrace",
    tagline: "Coastal Romance with Breathtaking Views",
    description: "Perched on dramatic cliffs overlooking the Pacific Ocean, Oceanview Terrace offers an unparalleled setting for seaside weddings. Our modern glass pavilion and expansive terraces provide stunning 360-degree ocean views.",
    location: "Big Sur, California",
    capacity: {
      min: 30,
      max: 150
    },
    price: {
      starting: 12000,
      currency: "USD"
    },
    rating: 4.8,
    totalReviews: 89,
    features: [
      "Glass Pavilion",
      "Ocean View Terrace",
      "Cliffside Ceremony Site",
      "Modern Facilities",
      "Professional Photography Areas",
      "Climate Control",
      "Premium Sound System",
      "Oceanfront Cocktail Area"
    ],
    contact: {
      phone: "+1 (831) 555-0456",
      email: "events@oceanviewterrace.com",
      website: "www.oceanviewterrace.com"
    },
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Oceanview Terrace with Pacific backdrop",
        category: "exterior"
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Glass pavilion interior",
        category: "interior"
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Cliffside ceremony with ocean view",
        category: "ceremony"
      }
    ],
    amenities: [
      {
        id: "1",
        name: "Climate Control",
        icon: "🌡️",
        description: "Temperature controlled glass pavilion",
        included: true
      },
      {
        id: "2",
        name: "Ocean View",
        icon: "🌊",
        description: "Unobstructed Pacific Ocean views",
        included: true
      },
      {
        id: "3",
        name: "Valet Parking",
        icon: "🚗",
        description: "Professional valet service",
        included: false
      }
    ],
    reviews: [
      {
        id: "1",
        authorName: "Maria & Carlos",
        authorLocation: "San Jose, CA",
        rating: 5,
        review: "The ocean views were absolutely incredible! Our ceremony at sunset was magical, and the glass pavilion was perfect for our reception.",
        date: "October 2024",
        eventType: "Wedding"
      }
    ]
  },
  "3": {
    id: "3",
    name: "Golden Gardens Estate",
    tagline: "Luxury Meets Natural Beauty",
    description: "Set in the heart of wine country, Golden Gardens Estate offers sprawling vineyards, manicured gardens, and elegant indoor spaces perfect for both intimate gatherings and grand celebrations.",
    location: "Sonoma County, California",
    capacity: {
      min: 75,
      max: 300
    },
    price: {
      starting: 12000,
      currency: "USD"
    },
    rating: 4.8,
    totalReviews: 89,
    features: ["Vineyard Views", "Garden Ceremony", "Wine Cellar Reception", "Luxury Suites"],
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Golden Gardens Estate vineyard ceremony",
        category: "exterior"
      }
    ],
    amenities: [
      {
        id: "1",
        name: "Wine Cellar",
        icon: "🍷",
        description: "Private wine cellar for receptions",
        included: true
      },
      {
        id: "2",
        name: "Garden Pavilion",
        icon: "🌺",
        description: "Covered outdoor pavilion",
        included: true
      }
    ],
    reviews: [
      {
        id: "1",
        authorName: "Lisa & Robert",
        authorLocation: "San Francisco, CA",
        rating: 5,
        review: "The vineyard setting was absolutely perfect for our fall wedding!",
        date: "September 2024",
        eventType: "Wedding"
      }
    ],
    contact: {
      phone: "(707) 555-0123",
      email: "events@goldengardens.com",
      website: "www.goldengardens.com"
    }
  },
  "4": {
    id: "4",
    name: "Crystal Lake Pavilion",
    tagline: "Lakeside Elegance & Serenity",
    description: "A stunning lakeside venue featuring panoramic water views, elegant pavilions, and pristine gardens. Perfect for couples seeking a tranquil yet sophisticated celebration.",
    location: "Lake Tahoe, Nevada",
    capacity: {
      min: 60,
      max: 180
    },
    price: {
      starting: 9500,
      currency: "USD"
    },
    rating: 4.7,
    totalReviews: 156,
    features: ["Lakeside Ceremony", "Mountain Views", "Floating Dock", "Sunset Terrace"],
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        alt: "Crystal Lake Pavilion lakeside view",
        category: "exterior"
      }
    ],
    amenities: [
      {
        id: "1",
        name: "Lakeside Deck",
        icon: "🌊",
        description: "Private deck overlooking the lake",
        included: true
      },
      {
        id: "2",
        name: "Mountain Views",
        icon: "⛰️",
        description: "Stunning mountain backdrop",
        included: true
      }
    ],
    reviews: [
      {
        id: "1",
        authorName: "Amanda & Chris",
        authorLocation: "Sacramento, CA",
        rating: 5,
        review: "The lake views were breathtaking! Our guests are still talking about it.",
        date: "August 2024",
        eventType: "Wedding"
      }
    ],
    contact: {
      phone: "(775) 555-0189",
      email: "info@crystallake.com",
      website: "www.crystallakepavilion.com"
    }
  },
  "5": {
    id: "5",
    name: "Heritage Mansion",
    tagline: "Historic Grandeur for Modern Romance",
    description: "A beautifully restored Victorian mansion offering old-world charm with contemporary amenities. Features grand ballrooms, secret gardens, and timeless architectural details.",
    location: "Portland, Oregon",
    capacity: {
      min: 40,
      max: 250
    },
    price: {
      starting: 7500,
      currency: "USD"
    },
    rating: 4.9,
    totalReviews: 203,
    features: ["Victorian Architecture", "Secret Garden", "Grand Ballroom", "Historic Library"],
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Heritage Mansion Victorian elegance",
        category: "interior"
      }
    ],
    amenities: [
      {
        id: "1",
        name: "Grand Ballroom",
        icon: "💃",
        description: "Historic ballroom with crystal chandeliers",
        included: true
      },
      {
        id: "2",
        name: "Secret Garden",
        icon: "🌹",
        description: "Private garden ceremony space",
        included: true
      }
    ],
    reviews: [
      {
        id: "1",
        authorName: "Rachel & Daniel",
        authorLocation: "Seattle, WA",
        rating: 5,
        review: "The Victorian charm was exactly what we dreamed of for our wedding!",
        date: "July 2024",
        eventType: "Wedding"
      }
    ],
    contact: {
      phone: "(503) 555-0167",
      email: "events@heritagemansion.com",
      website: "www.heritagemansion.com"
    }
  },
  "6": {
    id: "6",
    name: "Skyline Rooftop Gardens",
    tagline: "Urban Sophistication Above the City",
    description: "An exclusive rooftop venue featuring stunning city skyline views, modern architecture, and beautifully landscaped gardens suspended high above the urban landscape.",
    location: "Downtown Seattle, Washington",
    capacity: {
      min: 80,
      max: 220
    },
    price: {
      starting: 11000,
      currency: "USD"
    },
    rating: 4.6,
    totalReviews: 142,
    features: ["City Skyline Views", "Rooftop Gardens", "Modern Design", "Sunset Ceremonies"],
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        alt: "Skyline Rooftop Gardens city view",
        category: "exterior"
      }
    ],
    amenities: [
      {
        id: "1",
        name: "Panoramic Views",
        icon: "🏙️",
        description: "360-degree city skyline views",
        included: true
      },
      {
        id: "2",
        name: "Rooftop Bar",
        icon: "🍸",
        description: "Full-service rooftop bar",
        included: true
      }
    ],
    reviews: [
      {
        id: "1",
        authorName: "Taylor & Jordan",
        authorLocation: "Bellevue, WA",
        rating: 5,
        review: "The city lights during our evening reception were absolutely magical!",
        date: "June 2024",
        eventType: "Wedding"
      }
    ],
    contact: {
      phone: "(206) 555-0194",
      email: "info@skylinerooftop.com",
      website: "www.skylinerooftopgardens.com"
    }
  }
}