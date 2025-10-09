import React from "react";
import MenuCategoryCard from "./MenuCategoryCard";
import "./SampleMenuSection.css";

const menuCategories = [
  {
    title: "Pakistani Specialties",
    items: [
      "Chicken Karahi",
      "Mutton Qorma",
      "Chicken Biryani",
      "Sindhi Biryani",
      "Chicken Tikka",
      "Seekh Kebab",
    ],
    icon: "🍽️",
  },
  {
    title: "Vegetarian Dishes",
    items: [
      "Daal Makhani",
      "Palak Paneer",
      "Mix Vegetables",
      "Aloo Gobi",
      "Chana Masala",
      "Bhindi Masala",
    ],
    icon: "🍽️",
  },
  {
    title: "Rice & Breads",
    items: [
      "Basmati Rice",
      "Vegetable Biryani",
      "Naan",
      "Roti",
      "Kulcha",
      "Paratha",
    ],
    icon: "🍽️",
  },
  {
    title: "Desserts & Beverages",
    items: [
      "Kheer",
      "Gulab Jamun",
      "Ras Malai",
      "Kulfi",
      "Fresh Lassi",
      "Soft Drinks",
    ],
    icon: "🍽️",
  },
];

const SampleMenuSection: React.FC = () => (
  <section className="sample-menu-section">
    <h2 className="sample-menu-title">Sample Menu Items</h2>
    <div className="sample-menu-subtitle">
      Explore our diverse range of Pakistani and international cuisine
    </div>
    <div className="sample-menu-cards-row">
      {menuCategories.map((cat) => (
        <MenuCategoryCard key={cat.title} {...cat} />
      ))}
    </div>
  </section>
);

export default SampleMenuSection;
