import React, { useState, useEffect } from 'react'
import type { Venue } from './venueData'
import './VenueInfoSection.css'

interface VenueInfoSectionProps {
  venueId: string
}

const VenueInfoSection: React.FC<VenueInfoSectionProps> = ({ venueId }) => {
  const [venue, setVenue] = useState<Venue | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    import('./venueData').then(({ fetchFeaturedVenues }) => {
      fetchFeaturedVenues().then((venues) => {
        const found = venues.find(v => v.id === venueId)
        setVenue(found)
        setIsLoading(false)
      })
    })
  }, [venueId])

  if (isLoading || !venue) {
    return (
      <section className="venue-info-section loading">
        <div className="venue-info-loading">
          <div className="loading-spinner"></div>
          <p>Loading venue details...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="venue-info-section">
      <div className="venue-info-container">
        <div className="venue-info-content">
          <div className="venue-info-main">
            <div className="venue-description">
              <h2 className="section-title">About {venue.name}</h2>
              <p className="description-text">{venue.description}</p>
            </div>

            <div className="venue-features">
              <h3 className="features-title">Venue Features</h3>
              <div className="features-grid">
                {venue.features.map((feature: string, index: number) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="venue-info-sidebar">
            <div className="venue-details-card">
              <h3 className="card-title">Venue Details</h3>
              
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{venue.location}</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Capacity</span>
                <span className="detail-value">
                  {venue.capacity.min} - {venue.capacity.max} guests
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Starting Price</span>
                <span className="detail-value">
                  ${venue.price.starting.toLocaleString()} {venue.price.currency}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Rating</span>
                <div className="rating-value">
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
              </div>

              <div className="contact-info">
                <h4 className="contact-title">Contact Information</h4>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href={`tel:${venue.contact.phone}`} className="contact-link">
                    {venue.contact.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href={`mailto:${venue.contact.email}`} className="contact-link">
                    {venue.contact.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <a 
                    href={`https://${venue.contact.website}`} 
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {venue.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueInfoSection