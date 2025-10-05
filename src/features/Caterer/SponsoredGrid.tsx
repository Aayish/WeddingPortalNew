import React from 'react';
import CatererItemCard from './CatererItemCard';
import './styles/caterer.css';
import type { Caterer } from './catererTypes';

interface SponsoredGridProps {
  caterers: Caterer[];
}

const sponsoredImages: string[] = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80"
];

const SponsoredGrid: React.FC<SponsoredGridProps> = ({ caterers }) => {
  // Only show sponsored caterers, and ensure at least 6
  const sponsoredCaterers = caterers?.filter(c => c.isSponsored) || [];
  let displayCaterers: Caterer[] = [];
  if (sponsoredCaterers.length === 0) {
    return <div className="caterer-grid caterer-grid--3col">No sponsored caterers available.</div>;
  }
  displayCaterers = sponsoredCaterers.length >= 6
    ? sponsoredCaterers.slice(0, 6)
    : Array.from({ length: 6 }, (_, i) => sponsoredCaterers[i % sponsoredCaterers.length]);

  return (
    <div className="caterer-grid caterer-grid--3col">
      {displayCaterers.map((caterer, idx) => (
        caterer ? (
          <CatererItemCard key={caterer.id + '-' + idx} caterer={caterer} image={sponsoredImages[idx % sponsoredImages.length]} />
        ) : null
      ))}
    </div>
  );
};

export default SponsoredGrid;
