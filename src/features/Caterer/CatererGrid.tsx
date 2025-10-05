import React from 'react';
import CatererCard from './CatererCard';
import './styles/caterer.css';
import type { Caterer } from './catererTypes';

interface CatererGridProps {
  caterers: Caterer[];
}

const CatererGrid: React.FC<CatererGridProps> = ({ caterers }) => (
  <div className="caterer-grid">
    {caterers.map(caterer => (
      <CatererCard key={caterer.id} {...caterer} />
    ))}
  </div>
);

export default CatererGrid;
