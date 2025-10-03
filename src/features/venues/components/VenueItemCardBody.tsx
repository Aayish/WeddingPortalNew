import React, { useRef, useState, useEffect } from 'react';
import type { VenueAmenity } from '../venueData.ts';

interface VenueItemCardBodyProps {
  name: string;
  location: string;
  capacity: {
    min: number;
    max: number;
  };
  amenities: VenueAmenity[];
}

const VenueItemCardBody: React.FC<VenueItemCardBodyProps> = ({ 
  name, 
  location, 
  capacity, 
  amenities 
}) => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState<VenueAmenity[]>([]);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (tagsRef.current) {
      const containerWidth = tagsRef.current.offsetWidth;
      let totalWidth = 0;
      const visible: VenueAmenity[] = [];

      for (const amenity of amenities) {
        const tagWidth = amenity.name.length * 8 + 24; // Approximate width calculation
        if (totalWidth + tagWidth <= containerWidth) {
          visible.push(amenity);
          totalWidth += tagWidth + 6; // Add gap
        } else {
          break;
        }
      }

      setVisibleTags(visible);
      setHiddenCount(amenities.length - visible.length);
    }
  }, [amenities]);

  return (
    <div className="venue-card-content-new">
      <h3 className="venue-name-new">{name}</h3>
      <p className="venue-location-new">
        <span className="location-icon">📍</span>
        {location}
      </p>
      <p className="venue-capacity-new">
        <span className="capacity-icon">👥</span>
        {capacity.min}-{capacity.max} guests
      </p>
      
      {/* Feature Tags */}
      <div className="venue-features-tags" ref={tagsRef}>
        {visibleTags.map(amenity => (
          <span key={amenity.id} className="feature-tag">
            {amenity.name}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className="feature-tag-more">
            +{hiddenCount} more
          </span>
        )}
      </div>
      
      {/* Spacer to push footer down */}
      <div className="venue-content-spacer"></div>
    </div>
  );
};

export default VenueItemCardBody;