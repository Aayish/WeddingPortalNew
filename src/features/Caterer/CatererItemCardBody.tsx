import React, { useRef, useState, useEffect } from 'react';

interface CatererItemCardBodyProps {
  name: string;
  location: string;
  capacity: { min: number; max: number };
  amenities?: string[];
}

const CatererItemCardBody: React.FC<CatererItemCardBodyProps> = ({ name, location, capacity, amenities = [] }) => {
  const tagsRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (tagsRef.current) {
      const containerWidth = tagsRef.current.offsetWidth;
      let totalWidth = 0;
      const visible: string[] = [];
      for (const amenity of amenities) {
        const tagWidth = amenity.length * 8 + 24;
        if (totalWidth + tagWidth <= containerWidth) {
          visible.push(amenity);
          totalWidth += tagWidth + 6;
        } else {
          break;
        }
      }
      setVisibleTags(visible);
      setHiddenCount(amenities.length - visible.length);
    }
  }, [amenities]);

  return (
    <div className="caterer-card-body">
      <div className="caterer-card-title">{name}</div>
      <div className="caterer-card-meta">
        <span className="caterer-card-location">📍 {location}</span>
      </div>
      <div className="caterer-card-meta">
        <span className="caterer-card-guests">👥 {capacity.min}-{capacity.max} guests</span>
      </div>
      <div className="caterer-card-amenities" ref={tagsRef}>
        {visibleTags.map((a, i) => (
          <span key={i} className="caterer-card-amenity-pill">{a}</span>
        ))}
        {hiddenCount > 0 && (
          <span className="caterer-card-amenity-pill caterer-card-amenity-more">More+</span>
        )}
      </div>
    </div>
  );
};

export default CatererItemCardBody;
