import React, { useState, useEffect } from 'react';
//import Test from './test';
//import './styles/caterer.css';

import type { Caterer } from './catererTypes';
// import { Test2 } from './Test2';
import { Test2 } from './Test2';

interface SponsoredGridTestProps {
  caterers: Caterer[];
}


const SponsoredGridTest: React.FC<SponsoredGridTestProps> = ({ caterers }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (caterers && caterers.length > 0) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [caterers]);
 console.log('Test: caterer1');
  const sponsoredCaterers = caterers?.filter(c => c.isSponsored) || [];
  console.log('SponsoredGridTest: caterers', caterers);
  console.log('SponsoredGridTest: ready', ready);
  console.log('SponsoredGridTest: sponsoredCaterers', sponsoredCaterers);
  
  if (!ready) {
    return <div className="caterer-grid caterer-grid--3col">Loading sponsored caterers...</div>;
  }
  if (sponsoredCaterers.length === 0) {
    return <div className="caterer-grid caterer-grid--3col">No sponsored caterers available.</div>;
  }
  const displayCaterers: Caterer[] = sponsoredCaterers.length >= 6
    ? sponsoredCaterers.slice(0, 6)
    : Array.from({ length: 6 }, (_, i) => sponsoredCaterers[i % sponsoredCaterers.length]);

  return (
    <div className="caterer-grid caterer-grid--3col">
      {displayCaterers.map((caterer,idx) => (
        caterer ? (
          <Test2 key={caterer.id + '-' + idx} caterer={caterer} />
    ) : null
      ))}
    </div>
  );
};

export default SponsoredGridTest;
