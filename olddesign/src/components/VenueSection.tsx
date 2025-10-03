import { useState } from 'react'
import type { SearchFilters } from '../config/api'
import SearchBar from './SearchBar.tsx'
import VenueGrid from './VenueGrid.tsx'
import './VenueSection.css'

const VenueSection = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    searchName: '',
    capacity: '',
    venueType: '',
  })

  const handleSearchChange = (filters: SearchFilters) => {
    setSearchFilters(filters)
  }

  return (
    <div className="venue-section">
      <div className="container">
        <SearchBar onSearchChange={handleSearchChange} />
        <VenueGrid searchFilters={searchFilters} />
      </div>
    </div>
  )
}

export default VenueSection