import React, { useState } from 'react';
import './styles/caterer-search-bar.css';
import { FaSearch } from 'react-icons/fa';
import type { Caterer } from './catererTypes';

const cuisineOptions: string[] = [
  "Pakistani",
  "BBQ",
  "Continental",
  "Chinese",
  "Fusion"
];
const priceOptions: string[] = [
  "PKR 1000",
  "PKR 1200",
  "PKR 1300",
  "PKR 1400",
  "PKR 1500"
];
// ...existing code...
interface SearchBarProps {
  caterers: Caterer[];
  setFiltered: (filtered: Caterer[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ caterers, setFiltered }) => {
  const [dropdownOpen, setDropdownOpen] = useState<{ cuisine: boolean; price: boolean }>({ cuisine: false, price: false });
  const [cuisine, setCuisine] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const selectOption = (type: 'cuisine' | 'price', value: string) => {
    if (type === 'cuisine') setCuisine(value);
    if (type === 'price') setPrice(value);
    setDropdownOpen(prev => ({ ...prev, [type]: false }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let filtered = caterers;
    if (cuisine && cuisine.trim() !== "") {
      filtered = filtered.filter(
        (c: Caterer) => Array.isArray(c.amenities) && c.amenities.some((a: string) => a && a.toLowerCase().includes(cuisine.toLowerCase()))
      );
    }
    if (price && price.trim() !== "") {
      filtered = filtered.filter(
        (c: Caterer) => c.price && typeof c.price.starting === 'number' && c.price.starting === Number(price.replace(/[^\d]/g, ''))
      );
    }
    if (location && location.trim() !== "") {
      filtered = filtered.filter(
        (c: Caterer) => c.name && c.name.toLowerCase().includes(location.toLowerCase())
      );
    }
    setFiltered(filtered);
  };

  // ...existing code...

  const toggleDropdown = (type: 'cuisine' | 'price') => {
    setDropdownOpen(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <form className="caterer_search-bar" onSubmit={handleSubmit}>
      <div className="caterer_search-bar__fields">
        <input
          type="text"
          className="caterer_search-bar__input"
          placeholder="Search caterers, cuisine type, wedding halls..."
          value={location}
          onChange={e => setLocation(e.target.value)}
          aria-label="Search caterers"
        />
        <div className="caterer_search-bar__divider" />
        <div className="caterer_search-bar__dropdown">
          <button
            type="button"
            className={`caterer_search-bar__dropdown-trigger${dropdownOpen.cuisine ? ' active' : ''}`}
            onClick={() => toggleDropdown('cuisine')}
          >
            {cuisine || 'Select Cuisine'}
            <span className="caterer_search-bar__dropdown-arrow">▼</span>
          </button>
          {dropdownOpen.cuisine && (
            <div className="caterer_search-bar__dropdown-menu">
              {cuisineOptions.map(opt => (
                <div
                  key={opt}
                  className="caterer_search-bar__dropdown-item"
                  onClick={() => selectOption('cuisine', opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="caterer_search-bar__divider" />
        <div className="caterer_search-bar__dropdown">
          <button
            type="button"
            className={`caterer_search-bar__dropdown-trigger${dropdownOpen.price ? ' active' : ''}`}
            onClick={() => toggleDropdown('price')}
          >
            {price || 'Per Head Price'}
            <span className="caterer_search-bar__dropdown-arrow">▼</span>
          </button>
          {dropdownOpen.price && (
            <div className="caterer_search-bar__dropdown-menu">
              {priceOptions.map(opt => (
                <div
                  key={opt as string}
                  className="caterer_search-bar__dropdown-item"
                  onClick={() => selectOption('price', opt as string)}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="caterer_search-bar__divider" />
        <button type="submit" className="caterer_search-bar__search-btn" aria-label="Search">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
