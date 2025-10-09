import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import MenuAndPackagesTab from "./MenuAndPackagesTab";
import "./CatererServiceDetailSection.css";

const TABS = [
  "Overview",
  "Menu & Packages",
  "Gallery",
  "Reviews",
  "About & Contact",
];

const CatererServiceDetailSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="caterer-service-detail-section">
      <div className="caterer-service-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`caterer-service-tab${
              activeTab === tab ? " active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="caterer-service-tab-content">
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Menu & Packages" && <MenuAndPackagesTab />}
        {/* Other tabs will be implemented later */}
      </div>
    </section>
  );
};

export default CatererServiceDetailSection;
