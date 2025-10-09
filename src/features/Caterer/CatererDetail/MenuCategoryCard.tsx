import React from "react";
import "./MenuCategoryCard.css";

interface MenuCategoryCardProps {
  title: string;
  items: string[];
  icon?: string;
}

const MenuCategoryCard: React.FC<MenuCategoryCardProps> = ({
  title,
  items,
  icon,
}) => (
  <div className="menu-category-card">
    <h3 className="menu-category-title">
      {icon && <span className="menu-category-icon">{icon}</span>} {title}
    </h3>
    <ul className="menu-category-list">
      {items.map((item, idx) => (
        <li key={idx} className="menu-category-item">
          <span className="menu-category-dot">•</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default MenuCategoryCard;
