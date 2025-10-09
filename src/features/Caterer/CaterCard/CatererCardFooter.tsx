import React from "react";
import { useNavigate } from "react-router-dom";

interface CatererCardFooterProps {
  startingPrice: number;
  onViewDetails: () => void;
}

const CatererCardFooter: React.FC<CatererCardFooterProps> = ({
  startingPrice,
 
}) => {
  const navigate = useNavigate();
  return (
    <div className="caterer-card__footer">
      <div className="price-accent1"> </div>
      <div className="caterer-card__price-section">
        <div className="caterer-card__price-label">Starting from</div>
        <div className="caterer-card__price">
          PKR {startingPrice.toLocaleString()}
        </div>
      </div>

      <button
        className="caterer-card__view-details-btn"
        onClick={() => navigate("/caterer-detail")}
      >
        View Details
      </button>
    </div>
  );
};

export default CatererCardFooter;
