import React from "react";
import "./OverviewRight.css";

const OverviewRight: React.FC = () => (
  <div className="overview-right">
    <div className="overview-price-box">
      <h3>Starting Price</h3>
      <div className="overview-price-main">
        <span className="overview-price-currency">PKR</span>
        <span className="overview-price-value">3,500</span>
      </div>
      <div className="overview-price-note">
        *Prices may vary based on menu selection, guest count, and event
        requirements
      </div>
      <div className="overview-price-meta">
        <div>
          Minimum Order: <b>100 guests</b>
        </div>
        <div>
          Service Area: <b>Karachi & nearby</b>
        </div>
      </div>
    </div>
    <div className="overview-contact-box">
      <h3>Contact Information</h3>
      <div className="overview-contact-item">📞 +92 300 1234567</div>
      <div className="overview-contact-item">✉️ info@royalfeast.pk</div>
      <div className="overview-contact-item">📍 Karachi, Sindh</div>
    </div>
    <div className="overview-hours-box">
      <h3>Business Hours</h3>
      <div className="overview-hours-list">
        <div>
          Monday - Friday: <b>9:00 AM - 8:00 PM</b>
        </div>
        <div>
          Saturday: <b>10:00 AM - 6:00 PM</b>
        </div>
        <div>
          Sunday: <b>12:00 PM - 5:00 PM</b>
        </div>
      </div>
    </div>
  </div>
);

export default OverviewRight;
