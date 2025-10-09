import React from "react";
import Navigation from "../../features/common/Navigation";
import Footer from "../../components/Footer";
import "./styles/caterer.css";
import { CatererHeroSection } from "./Caterer-hero-section";
import "./styles/catererdetail-hero-section.css";
import CatererServiceDetailSection from "./CatererDetail/CatererServiceDetailSection";
const CatererDetail: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <CatererHeroSection />
        <section className="caterer-servicesdetails-section">
          <CatererServiceDetailSection/>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CatererDetail;
