import React from "react";
import "./CustomPackageSection.css";

const CustomPackageSection: React.FC = () => (
  <section className="custom-package-section">
    <div className="custom-package-desc">
      Our chefs can create a personalized menu based on your preferences,
      dietary requirements, and budget.
    </div>
    <button className="custom-package-btn">Request Custom Quote</button>
  </section>
);

export default CustomPackageSection;
