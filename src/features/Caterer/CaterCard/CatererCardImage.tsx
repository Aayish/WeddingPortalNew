import React from "react";

interface CatererCardImageProps {
  image: string;
  rating: number;
  isSponsored: boolean;
}

const CatererCardImage: React.FC<CatererCardImageProps> = ({
  image,
  rating,
  isSponsored,
}) => {
  return (
    <div className="caterer-card__image-section">
      <img src={image} alt="Caterer" className="caterer-card__image" />

      {isSponsored && (
        <div className="caterer-card__sponsored-badge">SPONSORED</div>
      )}

      <div className="caterer-card__rating-badge">
        <span className="caterer-card__star-icon">★</span>
        <span className="caterer-card__rating-text">{rating}</span>
      </div>
    </div>
  );
};

export default CatererCardImage;
