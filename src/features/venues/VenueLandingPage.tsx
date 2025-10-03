import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { mockVenues } from './venueData'
import './VenueLandingPage.css'

const VenueLandingPage: React.FC = () => {
  const { venueId = "1" } = useParams<{ venueId: string }>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', message: '' })
  
  const venue = mockVenues[venueId]
  
  console.log('Venue ID:', venueId);
  console.log('Available Venues:', mockVenues);

  if (!venue) {
    return (
      <div className="venue-not-found">
        <h2>Venue Not Found</h2>
        <p>We couldn't find the venue you're looking for. Please check the URL or browse our <a href="/venues">list of venues</a>.</p>
      </div>
    )
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % venue.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length)
  }

  const goToImage = (index: number) => {
    setActiveImageIndex(index)
  }

  const openModal = (title: string, message: string) => {
    setModalContent({ title, message })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleContactVenue = () => {
    openModal(
      'Contact Feature Coming Soon!', 
      'We are working hard to bring the direct contact feature to you soon. In the meantime, you can reach out to us through our main contact page.'
    )
  }

  const handleSaveToFavorites = () => {
    openModal(
      'Favorites Feature Coming Soon!', 
      'We are developing a personalized favorites system where you can save and organize your preferred venues. Stay tuned for this exciting feature!'
    )
  }

  const handleScheduleTour = () => {
    openModal(
      'Tour Booking Coming Soon!', 
      'Our online tour scheduling system is under development. Soon you will be able to book venue tours directly through our website. We appreciate your patience!'
    )
  }

  const amenitiesData = [
    { icon: "🚗", name: "Parking Available", included: true },
    { icon: "❄️", name: "Air Conditioning", included: true },
    { icon: "🔑", name: "Valet Parking", included: true },
    { icon: "📸", name: "Photography Allowed", included: true },
    { icon: "🍽️", name: "External Catering", included: false },
    { icon: "🎨", name: "External Decor", included: true },
    { icon: "👰", name: "Bridal Suite", included: true },
    { icon: "💃", name: "Dance Floor", included: true },
    { icon: "🎭", name: "Stage Available", included: true },
    { icon: "💡", name: "Professional Lighting", included: true },
    { icon: "🔊", name: "Sound System", included: true },
    { icon: "🛡️", name: "24/7 Security", included: true },
  ]

  return (
    <div className="venue-detail-page">
      {/* Section 1: Hero Image Gallery */}
      <section className="venue-hero-gallery">
        <div className="gallery-container">
          {/* Main Image */}
          <div className="main-image-container">
            <img 
              src={venue.images[activeImageIndex]?.url} 
              alt={venue.images[activeImageIndex]?.alt}
              className="main-venue-image"
            />
            
            {/* Rating Badge */}
            <div className="rating-badge">
              <span className="rating-star">⭐</span>
              <span className="rating-value">{venue.rating}</span>
            </div>
            
            {/* Navigation Arrows */}
            <button className="nav-arrow nav-arrow-left" onClick={prevImage}>
              <span>←</span>
            </button>
            <button className="nav-arrow nav-arrow-right" onClick={nextImage}>
              <span>→</span>
            </button>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="thumbnail-gallery">
            {venue.images.map((image, index) => (
              <div 
                key={image.id}
                className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              >
                {index < 2 ? (
                  <div className="thumbnail-placeholder">
                    <span className="thumbnail-number">{index + 1}</span>
                  </div>
                ) : (
                  <img src={image.url} alt={image.alt} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Venue Details & Amenities */}
      <section className="venue-details-section">
        <div className="details-container">
          <div className="venue-info-left">
            <h1 className="venue-title">{venue.name}</h1>
            
            <div className="venue-location">
              <span className="location-icon">📍</span>
              <span>{venue.location}</span>
            </div>
            
            <div className="venue-capacity">
              <span className="capacity-icon">👥</span>
              <span>{venue.capacity.min}-{venue.capacity.max} guests</span>
            </div>
            
            <div className="venue-pricing">
              <span className="pricing-label">Starting from</span>
              <span className="pricing-amount">From PKR {venue.price.starting.toLocaleString()}</span>
            </div>
            
            <div className="venue-about">
              <h3>About This Venue</h3>
              <p>{venue.description}</p>
            </div>
          </div>
          
          <div className="venue-amenities-right">
            <h2 className="amenities-title">Venue Amenities & Features</h2>
            <div className="amenities-grid">
              {amenitiesData.map((amenity, index) => (
                <div 
                  key={index} 
                  className={`amenity-item ${!amenity.included ? 'not-available' : ''}`}
                >
                  <span className="amenity-icon">{amenity.icon}</span>
                  <span className="amenity-name">{amenity.name}</span>
                  <span className={`amenity-status ${amenity.included ? 'included' : 'not-included'}`}>
                    {amenity.included ? '✅' : '❌'}
                  </span>
                  {!amenity.included && (
                    <div className="tooltip">
                      We are working hard to bring this feature to you soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call-to-Action */}
      <section className="venue-cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Book Your Dream Venue?</h2>
          <p className="cta-description">
            Contact us today to check availability, schedule a tour, and get a personalized 
            quote for your special day. Our team is here to make your wedding dreams come true.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleContactVenue}>
              <span className="btn-icon">💝</span>
              Contact Venue
            </button>
            <button className="cta-btn secondary" onClick={handleSaveToFavorites}>
              <span className="btn-icon">⭐</span>
              Save to Favorites
            </button>
            <button className="cta-btn secondary" onClick={handleScheduleTour}>
              <span className="btn-icon">📅</span>
              Schedule Tour
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Coming Soon Features */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{modalContent.title}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-message">{modalContent.message}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn primary" onClick={closeModal}>
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VenueLandingPage