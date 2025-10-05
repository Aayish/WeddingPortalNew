import React from 'react';

interface CatererItemCardFooterProps {
  price: number;
  onViewDetails: () => void;
}

const CatererItemCardFooter: React.FC<CatererItemCardFooterProps> = ({ price, onViewDetails }) => (
  <div className="caterer-item-footer">
    <div className="caterer-price-section">
      <div className="caterer-price-accent"></div>
      <div className="caterer-price-info">
        <div className="caterer-price-label">Starting from</div>
        <div className="caterer-price-value">PKR {price.toLocaleString()}</div>
      </div>
    </div>
    <button className="caterer-view-details-button" onClick={onViewDetails}>
      View Details
    </button>
  </div>
);

export default CatererItemCardFooter;
