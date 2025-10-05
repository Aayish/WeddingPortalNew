import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCatererById } from './api'
import type { Caterer } from './catererTypes'
import './styles/caterer.css'

const CatererLandingPage: React.FC = () => {
  const { catererId = "1" } = useParams<{ catererId: string }>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', message: '' })

  const [caterer, setCaterer] = useState<Caterer | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetchCatererById(catererId).then((caterer: Caterer | undefined) => {
      setCaterer(caterer)
      setIsLoading(false)
    })
  }, [catererId])

  if (isLoading || !caterer) {
    return (
      <section className="caterer-detail-page loading">
        <div className="caterer-info-loading">
          <div className="loading-spinner"></div>
          <p>Loading caterer details...</p>
        </div>
      </section>
    )
  }

  const nextImage = () => {
    if (!caterer) return
    setActiveImageIndex((prev) => (prev + 1) % caterer.images.length)
  }

  const prevImage = () => {
    if (!caterer) return
    setActiveImageIndex((prev) => (prev - 1 + caterer.images.length) % caterer.images.length)
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

  const handleContactCaterer = () => {
    openModal(
      'Contact Feature Coming Soon!', 
      'We are working hard to bring the direct contact feature to you soon. In the meantime, you can reach out to us through our main contact page.'
    )
  }

  const handleSaveToFavorites = () => {
    openModal(
      'Favorites Feature Coming Soon!', 
      'We are developing a personalized favorites system where you can save and organize your preferred caterers. Stay tuned for this exciting feature!'
    )
  }

  const handleScheduleTasting = () => {
    openModal(
      'Tasting Booking Coming Soon!', 
      'Our online tasting scheduling system is under development. Soon you will be able to book tastings directly through our website. We appreciate your patience!'
    )
  }

  // Example amenities for caterers
  const amenitiesData = [
    { icon: "🍽️", name: "Multi-cuisine Menu", included: true },
    { icon: "🥗", name: "Vegetarian Options", included: true },
    { icon: "🍰", name: "Custom Desserts", included: true },
    { icon: "🚚", name: "On-site Catering", included: true },
    { icon: "🎉", name: "Event Staff", included: true },
    { icon: "🍾", name: "Beverage Service", included: true },
    { icon: "🧑‍🍳", name: "Live Cooking Stations", included: false },
    { icon: "📦", name: "Takeaway Service", included: true },
    { icon: "🌶️", name: "Spicy Food Options", included: true },
    { icon: "🥤", name: "Soft Drinks Included", included: true },
    { icon: "🧁", name: "Dessert Bar", included: true },
    { icon: "🛡️", name: "Food Safety Certified", included: true },
  ]

  return (
    <div className="caterer-detail-page">
      {/* Section 1: Hero Image Gallery */}
      <section className="caterer-hero-gallery">
        <div className="gallery-container">
          {/* Main Image */}
          <div className="main-image-container">
            <img 
              src={caterer.images[activeImageIndex]?.url} 
              alt={caterer.images[activeImageIndex]?.alt}
              className="main-caterer-image"
            />
            
            {/* Rating Badge */}
            <div className="rating-badge">
              <span className="rating-star">⭐</span>
              <span className="rating-value">{caterer.rating}</span>
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
            {caterer.images.map((image: Caterer['images'][0], index: number) => (
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

      {/* Section 2: Caterer Details & Amenities */}
      <section className="caterer-details-section">
        <div className="details-container">
          <div className="caterer-info-left">
            <h1 className="caterer-title">{caterer.name}</h1>
            
            <div className="caterer-location">
              <span className="location-icon">📍</span>
              <span>{caterer.location}</span>
            </div>
            
            <div className="caterer-capacity">
              <span className="capacity-icon">👥</span>
              <span>{caterer.capacity.min}-{caterer.capacity.max} guests</span>
            </div>
            
            <div className="caterer-pricing">
              <span className="pricing-label">Starting from</span>
              <span className="pricing-amount">From PKR {caterer.price.starting.toLocaleString()}</span>
            </div>
            
            <div className="caterer-about">
              <h3>About This Caterer</h3>
              <p>{caterer.description}</p>
            </div>
          </div>
          
          <div className="caterer-amenities-right">
            <h2 className="amenities-title">Caterer Amenities & Features</h2>
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
      <section className="caterer-cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Book Your Dream Caterer?</h2>
          <p className="cta-description">
            Contact us today to check availability, schedule a tasting, and get a personalized 
            quote for your special day. Our team is here to make your wedding delicious and memorable.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleContactCaterer}>
              <span className="btn-icon">💝</span>
              Contact Caterer
            </button>
            <button className="cta-btn secondary" onClick={handleSaveToFavorites}>
              <span className="btn-icon">⭐</span>
              Save to Favorites
            </button>
            <button className="cta-btn secondary" onClick={handleScheduleTasting}>
              <span className="btn-icon">🍽️</span>
              Schedule Tasting
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

export default CatererLandingPage
