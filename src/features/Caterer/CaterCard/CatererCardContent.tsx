import React from 'react';

interface CatererCardContentProps {
  name: string;
  location: string;
  capacity: { min: number; max: number };
  cuisineTypes: string[];
}

const CatererCardContent: React.FC<CatererCardContentProps> = ({
  name,
  location,
  capacity,
  cuisineTypes
}) => {
  return (
    <div className="caterer-card__content">
      <h3 className="caterer-card__name">{name}</h3>
      
      <div className="caterer-card__location">
        <span className="caterer-card__location-icon">📍</span>
        <span className="caterer-card__location-text">{location}</span>
      </div>
      
      <div className="caterer-card__capacity">
        <span className="caterer-card__person-icon">👥</span>
        <span className="caterer-card__capacity-text">
          {capacity.min}-{capacity.max} guests
        </span>
      </div>
      
      <div className="caterer-card__cuisine-badges">
        {cuisineTypes.slice(0, 3).map((cuisine, index) => (
          <span key={index} className="caterer-card__cuisine-badge">
            {cuisine}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CatererCardContent;