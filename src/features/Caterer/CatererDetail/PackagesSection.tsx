import React from "react";
import PackageCard from "./PackageCard";
import "./PackagesSection.css";

const packages = [
  {
    title: "Standard Package",
    subtitle: "Perfect for intimate gatherings and family functions",
    price: 2500,
    features: [
      "2 Main Dishes (Chicken Karahi, Mutton Qorma)",
      "Rice (Biryani or Plain)",
      "2 Vegetable Dishes",
      "Daal (Lentils)",
      "Raita & Salad",
      "Naan/Roti",
      "Dessert (Kheer or Gulab Jamun)",
      "Soft Drinks",
      "Basic Table Setup",
      "Standard Service Staff",
    ],
    onRequestQuote: () => {},
  },
  {
    title: "Deluxe Package",
    subtitle: "Most popular choice for wedding celebrations",
    price: 3500,
    oldPrice: 4000,
    features: [
      "3 Main Dishes (Chicken, Mutton, Fish)",
      "Special Biryani",
      "3 Vegetable Dishes",
      "Daal & Chana",
      "Live BBQ Counter",
      "Raita, Chutney & Salad Bar",
      "Naan, Roti & Kulcha",
      "2 Desserts + Mithai Corner",
      "Fresh Juices & Soft Drinks",
      "Elegant Table Setup",
      "Professional Service Staff",
      "Female Staff Available",
    ],
    isPopular: true,
    onRequestQuote: () => {},
  },
  {
    title: "VIP Premium Package",
    subtitle: "Luxury dining experience for special occasions",
    price: 5000,
    features: [
      "4+ Main Dishes (Premium Selection)",
      "Special Sindhi/Balochi Biryani",
      "4 Vegetable Dishes",
      "Multiple Daal Varieties",
      "Live Cooking Stations",
      "Premium BBQ & Tandoor",
      "Continental Section",
      "Live Chaat Counter",
      "Dessert Station + Premium Mithai",
      "Welcome Drinks & Mocktails",
      "Premium Table & Decor Setup",
      "Dedicated Service Manager",
      "Photography-friendly Setup",
    ],
    onRequestQuote: () => {},
  },
];

const PackagesSection: React.FC = () => (
  <section className="packages-section">
    <h2 className="packages-title">Wedding Catering Packages</h2>
    <div className="packages-subtitle">
      Choose the perfect package for your special day
    </div>
    <div className="packages-cards-row">
      {packages.map((pkg) => (
        <PackageCard key={pkg.title} {...pkg} />
      ))}
    </div>
  </section>
);

export default PackagesSection;
