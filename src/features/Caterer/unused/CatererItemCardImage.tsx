import React from 'react';

interface CatererItemCardImageProps {
  image: string;
  catererName: string;
  rating: number;
  isSponsored: boolean;
}

const CatererItemCardImage: React.FC<CatererItemCardImageProps> = ({ image, catererName, rating, isSponsored }) => (
  <div className="caterer-card-image-wrap">
    <img src={image} alt={catererName} className="caterer-card-image" />
    {isSponsored && (
      <div className="caterer-card-sponsored-badge">SPONSORED</div>
    )}
    <div className="caterer-card-rating-badge">
      <span role="img" aria-label="star" className="caterer-card-rating-star">★</span>
      <span>{rating}</span>
    </div>
  </div>
);

export default CatererItemCardImage;
