import React from "react";
import "./OverviewLeft.css";

const OverviewLeft: React.FC = () => (
  <div className="overview-left">
    <div className="overview-about-box">
      <h2 className="overview-about-title">About Royal Feast Catering</h2>
      <p className="overview-about-desc">
        Royal Feast Catering has been serving exquisite Pakistani and
        international cuisine for over 15 years. We specialize in creating
        memorable dining experiences for shaadi ceremonies, valima functions,
        and special occasions. Our team of expert chefs combines traditional
        desi recipes with modern presentation to deliver exceptional culinary
        experiences.
      </p>
      <div className="overview-specialties">
        <h3>Our Specialties</h3>
        <div className="overview-specialty-badges">
          <span className="specialty-badge">Pakistani</span>
          <span className="specialty-badge">Continental</span>
          <span className="specialty-badge">Chinese</span>
          <span className="specialty-badge">Italian</span>
        </div>
      </div>
      <div className="overview-services">
        <h3>Services Offered</h3>
        <div className="overview-services-list">
          <div className="overview-services-col">
            <div className="service-item">🍽️ Outdoor Catering</div>
            <div className="service-item">🍽️ Female Staff Available</div>
            <div className="service-item">🍽️ AC Catering Setup</div>
          </div>
          <div className="overview-services-col">
            <div className="service-item">🍽️ Live BBQ Counter</div>
            <div className="service-item">🍽️ Halal Certified</div>
            <div className="service-item">🍽️ Professional Service</div>
          </div>
        </div>
      </div>
    </div>
    <div className="overview-quick-stats-box">
      <h3>Quick Stats</h3>
      <div className="overview-quick-stats">
        <div className="quick-stat">
          <span className="quick-stat-icon">👥</span>
          <div>
            <div className="quick-stat-value">100 people</div>
            <div className="quick-stat-label">Minimum Guests</div>
          </div>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-icon">⏱️</span>
          <div>
            <div className="quick-stat-value">15+ years</div>
            <div className="quick-stat-label">Experience</div>
          </div>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-icon">🏅</span>
          <div>
            <div className="quick-stat-value">500+</div>
            <div className="quick-stat-label">Events Completed</div>
          </div>
        </div>
        <div className="quick-stat">
          <span className="quick-stat-icon">⭐</span>
          <div>
            <div className="quick-stat-value">4.8/5</div>
            <div className="quick-stat-label">Rating</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OverviewLeft;
