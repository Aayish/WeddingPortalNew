import React from 'react';

interface VenueItemCardImageProps {
  image: string;
  venueName: string;
  rating: number;
  isSponsored?: boolean;
}

const VenueItemCardImage: React.FC<VenueItemCardImageProps> = ({ 
  image, 
  venueName, 
  rating,
  isSponsored = true
}) => {
  console.log('VenueItemCardImage render:', { isSponsored, venueName, rating });
  
  return (
    <div className="venue-image-container">
      <img 
        src={image} 
        alt={venueName}
        className="venue-image"
      />
      {isSponsored && (
        <div className="sponsored-badge-card">
          Sponsored
        </div>
      )}
      <button className="favorite-btn">
        <span className="heart-icon">🤍</span>
      </button>
      <div className="venue-rating-badge">
        <span className="rating-star">⭐</span>
        <span className="rating-value">{rating}</span>
      </div>
    </div>
  );
};

export default VenueItemCardImage;