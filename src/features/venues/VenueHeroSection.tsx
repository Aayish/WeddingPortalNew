import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockVenues, type Venue } from './venueData'
import CTAButton from '../common/CTAButton'
import './VenueHeroSection.css'

interface VenueHeroSectionProps {
  venueId: string
  activeImageIndex: number
  setActiveImageIndex: (index: number) => void
}

const VenueHeroSection: React.FC<VenueHeroSectionProps> = ({ 
  venueId, 
  activeImageIndex, 
  setActiveImageIndex 
}) => {
  const navigate = useNavigate()
  const venue: Venue | undefined = mockVenues[venueId]
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [venueId])

  useEffect(() => {
    if (!venue?.images.length) return

    const timer = setInterval(() => {
      setActiveImageIndex((activeImageIndex + 1) % venue.images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [activeImageIndex, venue?.images.length, setActiveImageIndex])

  if (isLoading || !venue) {
    return (
      <section className="venue-hero-section loading">
        <div className="venue-hero-loading">
          <div className="loading-spinner"></div>
          <p>Loading venue details...</p>
        </div>
      </section>
    )
  }

  const currentImage = venue.images[activeImageIndex]

  return (
    <section className="venue-hero-section">
      <div className="venue-hero-background">
        <img 
          src={currentImage?.url} 
          alt={currentImage?.alt}
          className="venue-hero-image"
        />
        <div className="venue-hero-overlay"></div>
      </div>

      <div className="venue-hero-content">
        <div className="venue-hero-container">
          <div className="back-navigation">
            <button 
              className="back-btn"
              onClick={() => navigate('/venues')}
            >
              ← Back to Venues
            </button>
          </div>
          <div className="venue-hero-info">
            <div className="venue-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, index) => (
                  <span 
                    key={index} 
                    className={`star ${index < Math.floor(venue.rating) ? 'filled' : 'empty'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">
                {venue.rating} ({venue.totalReviews} reviews)
              </span>
            </div>

            <h1 className="venue-name">{venue.name}</h1>
            <p className="venue-tagline">{venue.tagline}</p>
            
            <div className="venue-quick-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span className="info-text">{venue.location}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">👥</span>
                <span className="info-text">{venue.capacity.min}-{venue.capacity.max} guests</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💰</span>
                <span className="info-text">Starting from ${venue.price.starting.toLocaleString()}</span>
              </div>
            </div>

            <div className="venue-hero-actions">
              <CTAButton 
                variant="primary" 
                size="large"
                onClick={() => alert('Booking feature coming soon! Please contact us directly.')}
              >
                Book Now
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="large"
                onClick={() => alert('Virtual tour feature coming soon! Please contact us to schedule an in-person tour.')}
              >
                Schedule Tour
              </CTAButton>
            </div>
          </div>

          <div className="venue-hero-gallery-nav">
            <div className="gallery-thumbnails">
              {venue.images.slice(0, 5).map((image, index) => (
                <button
                  key={image.id}
                  className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.url} alt={image.alt} />
                </button>
              ))}
            </div>
            <div className="gallery-indicators">
              {venue.images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="venue-hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default VenueHeroSection