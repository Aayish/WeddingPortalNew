import React from 'react';
import Navigation from '../../features/common/Navigation';
import Footer from '../../components/Footer';
import './styles/caterer.css';
import { CatererHeroSection } from './Caterer-hero-section';
import './styles/catererdetail-hero-section.css'
const CatererDetail: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <CatererHeroSection />
        <section className="caterer-servicesdetails-section">
          {/* Caterer Services Details Section: Add amenities, services, pricing, etc. */}
          <div className="caterer-servicesdetails-content">
            <h2 className="caterer-servicesdetails-title">Services & Details</h2>
            <ul className="caterer-servicesdetails-list">
              <li>Outdoor Catering</li>
              <li>Halal Guarantee</li>
              <li>Live Cooking</li>
              <li>Buffet</li>
              <li>Waiters</li>
              <li>Decor</li>
              <li>Sound</li>
            </ul>
            <div className="caterer-servicesdetails-price">Starting from PKR 3,500</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CatererDetail;
