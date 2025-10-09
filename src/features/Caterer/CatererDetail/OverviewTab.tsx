import React from "react";
import "./OverviewTab.css";
import OverviewLeft from "./OverviewLeft";
import OverviewRight from "./OverviewRight";

const OverviewTab: React.FC = () => (
  <div className="overview-tab-grid">
    <OverviewLeft />
    <OverviewRight />
  </div>
);

export default OverviewTab;
