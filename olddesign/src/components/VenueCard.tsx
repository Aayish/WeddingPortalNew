import type { Venue } from './VenueGrid'
import './VenueCard.css'

interface VenueCardProps {
  venue: Venue
}

const VenueCard = ({ venue }: VenueCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleViewDetails = () => {
    // This would navigate to venue details page in a real app
    console.log('View details for venue:', venue.id)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star star-full">★</span>)
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star star-half">★</span>)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star star-empty">☆</span>)
    }

    return stars
  }

  const getFeatureIcon = (feature: string) => {
    const iconMap: { [key: string]: string } = {
      'Parking': '🅿️',
      'Catering': '🍽️',
      'AC': '❄️',
      'Garden': '🌸',
      'Outdoor': '🌿',
      'Beach View': '🏖️',
      'Heritage': '🏛️',
      'Luxury': '👑',
      'City View': '🌆',
      'Modern': '✨',
      'Bar': '🍸',
      'Valet': '🚗',
      'Flowers': '🌺',
      'Stage': '🎭',
      'Mountain View': '🏔️',
      'Resort': '🏨',
      'Rooms': '🛏️',
      'BBQ Area': '🔥',
    }
    return iconMap[feature] || '✓'
  }

  return (
    <div className="venue-card">
      <div className="venue-card-image">
        <img 
          src={venue.image} 
          alt={venue.name}
          onError={(e) => {
            // Fallback to a placeholder gradient
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, var(--color-peach) 0%, var(--color-gold) 100%)'
              parent.innerHTML = `<div class="image-placeholder">
                <span class="image-placeholder-text">${venue.name}</span>
              </div>`
            }
          }}
        />
        <div className="venue-card-rating">
          <div className="rating-stars">
            {renderStars(venue.rating)}
          </div>
          <span className="rating-text">({venue.reviewCount})</span>
        </div>
      </div>

      <div className="venue-card-content">
        <div className="venue-card-header">
          <h3 className="venue-name heading-serif">{venue.name}</h3>
          <p className="venue-location">{venue.location}</p>
        </div>

        <div className="venue-details">
          <div className="venue-price">
            <span className="price-label">From</span>
            <span className="price-amount">{formatPrice(venue.startingPrice)}</span>
          </div>
          
          <div className="venue-capacity">
            <span className="capacity-icon">👥</span>
            <span className="capacity-text">Up to {venue.capacity} guests</span>
          </div>
        </div>

        <div className="venue-features">
          {venue.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="feature-tag">
              <span className="feature-icon">{getFeatureIcon(feature)}</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
          {venue.features.length > 4 && (
            <div className="feature-tag feature-more">
              +{venue.features.length - 4} more
            </div>
          )}
        </div>

        <button 
          className="btn btn-primary venue-card-button"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default VenueCard