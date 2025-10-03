import { useState } from 'react'
import type { SearchFilters } from '../config/api'
import './SearchBar.css'

interface SearchBarProps {
  onSearchChange: (filters: SearchFilters) => void
}

const capacityOptions = [
  { value: '', label: 'Any Capacity' },
  { value: '50', label: 'Up to 50 guests' },
  { value: '100', label: 'Up to 100 guests' },
  { value: '200', label: 'Up to 200 guests' },
  { value: '300', label: 'Up to 300 guests' },
  { value: '500', label: 'Up to 500 guests' },
  { value: '1000', label: '500+ guests' },
]

const venueTypeOptions = [
  { value: '', label: 'All Venue Types' },
  { value: 'banquet-hall', label: 'Banquet Hall' },
  { value: 'garden', label: 'Garden Venue' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'resort', label: 'Resort' },
  { value: 'farmhouse', label: 'Farmhouse' },
  { value: 'rooftop', label: 'Rooftop' },
  { value: 'beach', label: 'Beach' },
  { value: 'palace', label: 'Palace/Heritage' },
]

const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  const [searchName, setSearchName] = useState('')
  const [capacity, setCapacity] = useState('')
  const [venueType, setVenueType] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    const newFilters = {
      searchName: field === 'searchName' ? value : searchName,
      capacity: field === 'capacity' ? value : capacity,
      venueType: field === 'venueType' ? value : venueType,
    }

    if (field === 'searchName') setSearchName(value)
    if (field === 'capacity') setCapacity(value)
    if (field === 'venueType') setVenueType(value)

    onSearchChange(newFilters)
  }

  const handleAdvancedToggle = () => {
    setShowAdvanced(!showAdvanced)
  }

  return (
    <div className="search-bar">
      <div className="search-bar-main">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search by venue name..."
            value={searchName}
            onChange={(e) => handleInputChange('searchName', e.target.value)}
            className="search-input search-input-text"
          />
        </div>

        <div className="search-input-group">
          <select
            value={capacity}
            onChange={(e) => handleInputChange('capacity', e.target.value)}
            className="search-input search-select"
          >
            {capacityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="search-input-group">
          <select
            value={venueType}
            onChange={(e) => handleInputChange('venueType', e.target.value)}
            className="search-input search-select"
          >
            {venueTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button 
          className="btn btn-secondary advanced-search-btn"
          onClick={handleAdvancedToggle}
        >
          {showAdvanced ? 'Hide' : 'Advanced'} Search
        </button>
      </div>

      {showAdvanced && (
        <div className="search-bar-advanced">
          <div className="advanced-filters">
            <div className="advanced-filter-group">
              <label className="filter-label">Price Range</label>
              <div className="price-range">
                <input
                  type="number"
                  placeholder="Min Price"
                  className="search-input price-input"
                />
                <span className="price-separator">-</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  className="search-input price-input"
                />
              </div>
            </div>
            
            <div className="advanced-filter-group">
              <label className="filter-label">Amenities</label>
              <div className="amenities-grid">
                <label className="amenity-checkbox">
                  <input type="checkbox" />
                  <span>Parking</span>
                </label>
                <label className="amenity-checkbox">
                  <input type="checkbox" />
                  <span>Catering</span>
                </label>
                <label className="amenity-checkbox">
                  <input type="checkbox" />
                  <span>Outdoor Space</span>
                </label>
                <label className="amenity-checkbox">
                  <input type="checkbox" />
                  <span>AC/Climate Control</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar