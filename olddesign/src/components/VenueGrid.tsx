import { useState, useEffect } from 'react'
import type { SearchFilters } from '../config/api'
import VenueCard from './VenueCard.tsx'
import './VenueGrid.css'

export interface Venue {
  id: string
  name: string
  image: string
  startingPrice: number
  capacity: number
  location: string
  venueType: string
  features: string[]
  rating: number
  reviewCount: number
}

interface VenueGridProps {
  searchFilters: SearchFilters
}

// Mock venue data
const mockVenues: Venue[] = [
  {
    id: '1',
    name: 'Royal Gardens Banquet Hall',
    image: '/api/placeholder/400/300',
    startingPrice: 75000,
    capacity: 300,
    location: 'Lahore',
    venueType: 'banquet-hall',
    features: ['Parking', 'Catering', 'AC', 'Garden'],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: '2',
    name: 'Sunset Beach Resort',
    image: '/api/placeholder/400/300',
    startingPrice: 120000,
    capacity: 200,
    location: 'Karachi',
    venueType: 'beach',
    features: ['Beach View', 'Outdoor', 'Catering', 'Parking'],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: '3',
    name: 'Heritage Palace',
    image: '/api/placeholder/400/300',
    startingPrice: 150000,
    capacity: 500,
    location: 'Islamabad',
    venueType: 'palace',
    features: ['Heritage', 'Luxury', 'Parking', 'Catering'],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: '4',
    name: 'Green Valley Farmhouse',
    image: '/api/placeholder/400/300',
    startingPrice: 65000,
    capacity: 150,
    location: 'Rawalpindi',
    venueType: 'farmhouse',
    features: ['Garden', 'Outdoor', 'Parking', 'BBQ Area'],
    rating: 4.6,
    reviewCount: 78,
  },
  {
    id: '5',
    name: 'Sky Lounge Rooftop',
    image: '/api/placeholder/400/300',
    startingPrice: 90000,
    capacity: 100,
    location: 'Lahore',
    venueType: 'rooftop',
    features: ['City View', 'Modern', 'AC', 'Bar'],
    rating: 4.5,
    reviewCount: 45,
  },
  {
    id: '6',
    name: 'Grand Hotel Ballroom',
    image: '/api/placeholder/400/300',
    startingPrice: 110000,
    capacity: 400,
    location: 'Karachi',
    venueType: 'hotel',
    features: ['Luxury', 'AC', 'Catering', 'Valet'],
    rating: 4.8,
    reviewCount: 203,
  },
  {
    id: '7',
    name: 'Blossom Garden Venue',
    image: '/api/placeholder/400/300',
    startingPrice: 55000,
    capacity: 180,
    location: 'Islamabad',
    venueType: 'garden',
    features: ['Garden', 'Outdoor', 'Flowers', 'Parking'],
    rating: 4.4,
    reviewCount: 67,
  },
  {
    id: '8',
    name: 'Crystal Banquet Hall',
    image: '/api/placeholder/400/300',
    startingPrice: 85000,
    capacity: 250,
    location: 'Faisalabad',
    venueType: 'banquet-hall',
    features: ['AC', 'Parking', 'Catering', 'Stage'],
    rating: 4.6,
    reviewCount: 91,
  },
  {
    id: '9',
    name: 'Moonlight Resort',
    image: '/api/placeholder/400/300',
    startingPrice: 130000,
    capacity: 350,
    location: 'Murree',
    venueType: 'resort',
    features: ['Mountain View', 'Resort', 'Catering', 'Rooms'],
    rating: 4.7,
    reviewCount: 112,
  },
]

const VenueGrid = ({ searchFilters }: VenueGridProps) => {
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>(mockVenues)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = mockVenues

      // Filter by name
      if (searchFilters.searchName?.trim()) {
        filtered = filtered.filter(venue =>
          venue.name.toLowerCase().includes(searchFilters.searchName!.toLowerCase()) ||
          venue.location.toLowerCase().includes(searchFilters.searchName!.toLowerCase())
        )
      }

      // Filter by capacity
      if (searchFilters.capacity) {
        const maxCapacity = parseInt(searchFilters.capacity)
        filtered = filtered.filter(venue => venue.capacity <= maxCapacity)
      }

      // Filter by venue type
      if (searchFilters.venueType) {
        filtered = filtered.filter(venue => venue.venueType === searchFilters.venueType)
      }

      setFilteredVenues(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchFilters])

  if (isLoading) {
    return (
      <div className="venue-grid-loading">
        <div className="loading-spinner"></div>
        <p>Searching venues...</p>
      </div>
    )
  }

  if (filteredVenues.length === 0) {
    return (
      <div className="venue-grid-empty">
        <div className="empty-state">
          <h3 className="heading-serif">No venues found</h3>
          <p>Try adjusting your search filters to find more venues.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="venue-grid">
      <div className="venue-grid-header">
        <h2 className="heading-serif">Available Venues</h2>
        <p className="venue-count">{filteredVenues.length} venues found</p>
      </div>
      
      <div className="venue-cards-grid">
        {filteredVenues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  )
}

export default VenueGrid