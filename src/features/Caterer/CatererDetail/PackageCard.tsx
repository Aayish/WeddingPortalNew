import React from "react";
import "./PackageCard.css";

interface PackageCardProps {
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  features: string[];
  isPopular?: boolean;
  onRequestQuote: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  subtitle,
  price,
  oldPrice,
  features,
  isPopular,
  onRequestQuote,
}) => (
  <div className={`package-card${isPopular ? " popular" : ""}`}>
    {isPopular && <div className="package-badge">Most Popular</div>}
    <h3 className="package-card-title">{title}</h3>
    <div className="package-card-subtitle">{subtitle}</div>
    <div className="package-card-price-row">
      <span className="package-card-price-currency">PKR</span>
      {oldPrice && (
        <span className="package-card-old-price">
          {oldPrice.toLocaleString()}
        </span>
      )}
      <span className="package-card-price">{price.toLocaleString()}</span>
    </div>
    <ul className="package-card-features">
      {features.map((feature, idx) => (
        <li key={idx} className="package-card-feature">
          <span className="package-card-feature-icon">✔️</span> {feature}
        </li>
      ))}
    </ul>
    <button
      className={`package-card-cta${isPopular ? " popular" : ""}`}
      onClick={onRequestQuote}
    >
      Request Quote
    </button>
  </div>
);

export default PackageCard;
