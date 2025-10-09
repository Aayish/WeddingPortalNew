import React, { useState, useEffect } from "react";
//import Test from './test';
//import './styles/caterer.css';

import type { Caterer } from "./catererTypes";
// import { Test2 } from './Test2';
// import { Test2 } from './Test2';
import CatererCard2 from "./CaterCard/CatererCard2";

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
  console.log("Test: caterer1");
  const sponsoredCaterers = caterers?.filter((c) => c.isSponsored) || [];
  console.log("SponsoredGridTest: caterers", caterers);
  console.log("SponsoredGridTest: ready", ready);
  console.log("SponsoredGridTest: sponsoredCaterers", sponsoredCaterers);

  if (!ready) {
    return (
      <div className="caterer-grid caterer-grid--3col">
        Loading sponsored caterers...
      </div>
    );
  }
  if (sponsoredCaterers.length === 0) {
    return (
      <div className="caterer-grid caterer-grid--3col">
        No sponsored caterers available.
      </div>
    );
  }
  const displayCaterers: Caterer[] =
    sponsoredCaterers.length >= 6
      ? sponsoredCaterers.slice(0, 6)
      : Array.from(
          { length: 6 },
          (_, i) => sponsoredCaterers[i % sponsoredCaterers.length]
        );

  return (
    <div className="caterer-grid caterer-grid--3col">
      {displayCaterers.map((caterer) =>
        caterer ? (
          // <Test2 key={caterer.id + '-' + idx} caterer={caterer} />
          <CatererCard2
            key={caterer.id}
            id={caterer.id}
            name={caterer.name}
            image={
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            }
            location={caterer.location}
            capacity={caterer.capacity}
            cuisineTypes={caterer.amenities || []}
            rating={caterer.rating}
            startingPrice={caterer.price.starting}
            isSponsored={caterer.isSponsored}
            onViewDetails={() => {
              /* your handler here, e.g. navigate or alert */
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default SponsoredGridTest;
