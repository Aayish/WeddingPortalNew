import React, { useState, useEffect } from 'react';
import { caterers } from './caterers.ts';
import { getFeaturedCaterers } from './api.ts';
// import SponsoredGrid from './SponsoredGrid.tsx';
import './styles/caterer.css';
// import Test from './test.tsx';
import SponsoredGridTest from './SponsoredGridTest.tsx';

const CatererLanding: React.FC = () => {
  const [sponsored, setSponsored] = useState<typeof caterers>([]);

  useEffect(() => {
    getFeaturedCaterers().then(setSponsored);
  }, []);
console.log('sponsored')
console.log(sponsored)
  return (
    <main>
      <section className="caterer_landing-hero">
        <div className="caterer_landing-container">
          <h1 className="caterer_landing-title">Discover Your Dream Wedding Caterer</h1>
          <p className="caterer_landing-description">Find the best caterers for your wedding, compare menus, prices, and reviews. Make your big day delicious and memorable!</p>
        </div>
      </section>
      <section className="caterer_landing-grid-section">
        <div className="caterer_landing-container">
          <h2 className="caterer_landing-title">Sponsored Caterers</h2>
          {/* <SponsoredGrid caterers={sponsored} /> */}
          <SponsoredGridTest caterers={sponsored} />
          {/* <Test caterer = {sponsored[0]}/> */}
        </div>
      </section>
    </main>
  );
};

export default CatererLanding;
