import React from 'react';

interface VenueItemCardFooterProps {
  price: number;
  onViewDetails: () => void;
}

const VenueItemCardFooter: React.FC<VenueItemCardFooterProps> = ({ 
  price, 
  onViewDetails 
}) => {
  return (
    <div className="venue-item-footer">
      <div className="price-section">
        <div className="price-accent"></div>
        <div className="price-info">
          <div className="price-label">Starting from</div>
          <div className="price-value">PKR {price.toLocaleString()}</div>
        </div>
      </div>
      <button 
        className="view-details-button"
        onClick={onViewDetails}
      >
        View Details
      </button>
    </div>
  );
};

export default VenueItemCardFooter;