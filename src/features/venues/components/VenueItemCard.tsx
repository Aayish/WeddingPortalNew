import React from 'react';
import type { Venue } from '../venueData.ts';
import VenueItemCardImage from './VenueItemCardImage.tsx';
import VenueItemCardBody from './VenueItemCardBody.tsx';
import VenueItemCardFooter from './VenueItemCardFooter.tsx';
import './VenueItemCard.css';

interface VenueItemCardProps {
  venue: Venue;
  onViewDetails: (venueId: string) => void;
}

const VenueItemCard: React.FC<VenueItemCardProps> = ({ venue, onViewDetails }) => {
  return (
    <div className="venue-card-new">
      <VenueItemCardImage
        image={venue.images[0]?.url}
        venueName={venue.name}
        rating={venue.rating}
        isSponsored={true}
      />
      
      <VenueItemCardBody
        name={venue.name}
        location={venue.location}
        capacity={venue.capacity}
        amenities={venue.amenities}
      />
      
      <VenueItemCardFooter
        price={venue.price.starting}
        onViewDetails={() => onViewDetails(venue.id)}
      />
    </div>
  );
};

export default VenueItemCard;