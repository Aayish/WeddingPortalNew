import React from "react";
import PackagesSection from "./PackagesSection";
import SampleMenuSection from "./SampleMenuSection";
import CustomPackageSection from "./CustomPackageSection";
import "./MenuAndPackagesTab.css";

const MenuAndPackagesTab: React.FC = () => (
  <div className="menu-and-packages-tab">
    <PackagesSection />
    <SampleMenuSection />
    <CustomPackageSection />
  </div>
);

export default MenuAndPackagesTab;
