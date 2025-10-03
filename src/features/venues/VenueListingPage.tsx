import { useState, useEffect, useRef } from 'react'
import { mockVenues } from './venueData'
import VenueItemCard from './components/VenueItemCard.tsx'
import './VenueListingPage.css'
import { useNavigate } from 'react-router-dom'

interface VenueFilters {
  searchQuery: string
  selectedCity: string
  guestCount: string
  venueType: string
}

interface DropdownState {
  city: boolean
  guestCount: boolean
  venueType: boolean
}

const VenueListingPage: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  
  const [filters, setFilters] = useState<VenueFilters>({
    searchQuery: '',
    selectedCity: '',
    guestCount: '',
    venueType: ''
  })
  
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    city: false,
    guestCount: false,
    venueType: false
  })
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen({ city: false, guestCount: false, venueType: false })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const venues = Object.values(mockVenues)
  const popularSearches = ['Wedding Halls', 'Garden Venues', 'Luxury Hotels', 'Banquet Halls']
  
  const cities = ['Lahore', 'Islamabad', 'Karachi', 'Peshawar', 'Multan']
  const guestCounts = ['50-100', '100-200', '200-300', '300-500', '500+']
  const venueTypes = ['Banquet Hall', 'Garden', 'Hotel', 'Resort', 'Historic']

  const handleSearch = () => {
    console.log('Searching with filters:', filters)
    
    // Mock search functionality - you can replace this with your API call
    const searchParams = {
      query: filters.searchQuery.trim(),
      city: filters.selectedCity,
      guestCount: filters.guestCount,
      venueType: filters.venueType
    }
    
    // Filter mock venues based on current filters (placeholder logic)
    let filteredVenues = venues
    
    if (searchParams.query) {
      filteredVenues = filteredVenues.filter(venue => 
        venue.name.toLowerCase().includes(searchParams.query.toLowerCase()) ||
        venue.description.toLowerCase().includes(searchParams.query.toLowerCase()) ||
        venue.tagline.toLowerCase().includes(searchParams.query.toLowerCase())
      )
    }
    
    if (searchParams.city) {
      filteredVenues = filteredVenues.filter(venue => 
        venue.location.toLowerCase().includes(searchParams.city.toLowerCase())
      )
    }
    
    if (searchParams.venueType) {
      filteredVenues = filteredVenues.filter(venue => 
        venue.features.some(feature => 
          feature.toLowerCase().includes(searchParams.venueType.toLowerCase())
        ) ||
        venue.name.toLowerCase().includes(searchParams.venueType.toLowerCase())
      )
    }
    
    if (searchParams.guestCount) {
      // Extract guest count range and filter
      const guestRange = searchParams.guestCount
      if (guestRange !== '500+') {
        const [min, max] = guestRange.split('-').map(num => parseInt(num))
        filteredVenues = filteredVenues.filter(venue => 
          venue.capacity.max >= min && venue.capacity.min <= max
        )
      } else {
        filteredVenues = filteredVenues.filter(venue => venue.capacity.max >= 500)
      }
    }
    
    console.log(`Found ${filteredVenues.length} venues matching criteria`)
    // TODO: Update state with filtered venues or navigate to results
  }

  const handlePopularSearch = (searchTerm: string) => {
    setFilters(prev => ({ ...prev, searchQuery: searchTerm }))
  }

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownOpen(prev => ({
      city: false,
      guestCount: false,
      venueType: false,
      [dropdown]: !prev[dropdown]
    }))
  }

  const selectOption = (type: keyof VenueFilters, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }))
    setDropdownOpen(prev => ({ ...prev, city: false, guestCount: false, venueType: false }))
  }

  const handleViewDetails = (venueId: string) => {
    navigate(`/venue/${venueId}`);
  }

  return (
    <div className="venue-listing-page">
      <main>
        {/* Hero Section with Search */}
        <section className="venue-hero-section">
          <div className="venue-hero-container">
            <h1 className="venue-hero-title">Discover Your Dream Wedding Venue</h1>
            
            {/* Search Bar - Redesigned to match image */}
            <div className="search-container" ref={dropdownRef}>
              <div className="search-bar-redesigned">
                {/* Main Search Input */}
                <div className="search-input-section">
                  <input
                    type="text"
                    placeholder="Search venues, banquet halls, wedding halls.."
                    value={filters.searchQuery}
                    onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                    className="search-input-redesigned"
                  />
                </div>
                
                {/* Vertical Divider */}
                <div className="search-divider"></div>
                
                {/* City Dropdown */}
                <div className="custom-dropdown-redesigned">
                  <button 
                    className={`dropdown-trigger-redesigned ${dropdownOpen.city ? 'active' : ''}`}
                    onClick={() => toggleDropdown('city')}
                  >
                    {filters.selectedCity || 'Select City'}
                    <span className="dropdown-arrow-redesigned">▼</span>
                  </button>
                  {dropdownOpen.city && (
                    <div className="dropdown-menu-redesigned">
                      {cities.map(city => (
                        <div
                          key={city}
                          className="dropdown-item-redesigned"
                          onClick={() => selectOption('selectedCity', city)}
                        >
                          {city}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Vertical Divider */}
                <div className="search-divider"></div>
                
                {/* Guest Count Dropdown */}
                <div className="custom-dropdown-redesigned">
                  <button 
                    className={`dropdown-trigger-redesigned ${dropdownOpen.guestCount ? 'active' : ''}`}
                    onClick={() => toggleDropdown('guestCount')}
                  >
                    {filters.guestCount || 'Guest Count'}
                    <span className="dropdown-arrow-redesigned">▼</span>
                  </button>
                  {dropdownOpen.guestCount && (
                    <div className="dropdown-menu-redesigned">
                      {guestCounts.map(count => (
                        <div
                          key={count}
                          className="dropdown-item-redesigned"
                          onClick={() => selectOption('guestCount', count)}
                        >
                          {count}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Vertical Divider */}
                <div className="search-divider"></div>
                
                {/* Venue Type Dropdown */}
                <div className="custom-dropdown-redesigned">
                  <button 
                    className={`dropdown-trigger-redesigned ${dropdownOpen.venueType ? 'active' : ''}`}
                    onClick={() => toggleDropdown('venueType')}
                  >
                    {filters.venueType || 'Venue Type'}
                    <span className="dropdown-arrow-redesigned">▼</span>
                  </button>
                  {dropdownOpen.venueType && (
                    <div className="dropdown-menu-redesigned">
                      {venueTypes.map(type => (
                        <div
                          key={type}
                          className="dropdown-item-redesigned"
                          onClick={() => selectOption('venueType', type)}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Search Button */}
                <button onClick={handleSearch} className="search-button-redesigned">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Popular Searches */}
            <div className="popular-searches">
              <span className="popular-label">Popular searches:</span>
              <div className="popular-tags">
                {popularSearches.map(search => (
                  <button
                    key={search}
                    onClick={() => handlePopularSearch(search)}
                    className="popular-tag"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Venues Grid Section */}
        <section className="venues-grid-section">
          <div className="venues-container">
            {/* Premium Venues Badge */}
            <div className="premium-venues-container">
              <div className="premium-venues-badge">
                <span className="crown-icon">👑</span>
                <span>Premium Venues</span>
              </div>
            </div>

            <div className="section-header">
              <div className="section-title-area">
                <h2 className="section-title">Featured & Sponsored Venues</h2>
                <div className="title-decoration">
                  <div className="decoration-line"></div>
                  <span className="decoration-flower">❀</span>
                  <div className="decoration-line"></div>
                </div>
                <p className="section-subtitle">
                  Discover our carefully curated collection of premium wedding venues, each offering 
                  <strong> exclusive packages</strong> and <strong>guaranteed quality service</strong> for your perfect wedding day.
                </p>
              </div>
              <div className="venues-count">
                {venues.slice(0, 1).length} of {venues.length} venues
              </div>
            </div>

            {/* Feature Benefits */}
            <div className="feature-benefits">
              <div className="benefit-item">
                <span className="benefit-icon verified">●</span>
                <span className="benefit-text">Verified Venues</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon booking">●</span>
                <span className="benefit-text">Instant Booking</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon guarantee">●</span>
                <span className="benefit-text">Best Price Guarantee</span>
              </div>
            </div>
            
            {/* 3 Column Grid (1 on mobile) - Show all venues */}
            <div className="venues-grid-three-col">
              {venues.map(venue => (
                <VenueItemCard
                  key={venue.id}
                  venue={venue}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
            
            {/* View All Venues Button */}
            {venues.length > 6 && (
              <div className="view-all-venues-section">
                <button className="view-all-venues-btn">
                  View All {venues.length} Venues
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default VenueListingPage