import React from "react";
import "./CatererCard.css";
import CatererCardImage from "..//CaterCard/CatererCardImage";
import CatererCardContent from "..//CaterCard/CatererCardContent";

import CatererCardFooter from "..//CaterCard/CatererCardFooter";

interface CatererCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  capacity: { min: number; max: number };
  cuisineTypes: string[];
  rating: number;
  startingPrice: number;
  isSponsored: boolean;
  onViewDetails: (id: string) => void;
}

const CatererCard2: React.FC<CatererCardProps> = ({
  id,
  name,
  image,
  location,
  capacity,
  cuisineTypes,
  rating,
  startingPrice,
  isSponsored,
  onViewDetails,
}) => {
  return (
    <div className="caterer-card">
      <CatererCardImage
        image={image}
        rating={rating}
        isSponsored={isSponsored}
      />
      <CatererCardContent
        name={name}
        location={location}
        capacity={capacity}
        cuisineTypes={cuisineTypes}
      />
      <CatererCardFooter
        startingPrice={startingPrice}
        onViewDetails={() => onViewDetails(id)}
      />
    </div>
  );
};

export default CatererCard2;
