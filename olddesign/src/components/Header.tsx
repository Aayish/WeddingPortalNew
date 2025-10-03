import { useState } from 'react'
import type { TabType } from '../App'
import './Header.css'

interface HeaderProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
  isLoggedIn: boolean
  onAuthToggle: () => void
}

const tabs = [
  { id: 'venue' as TabType, label: 'Venue' },
  { id: 'caterer' as TabType, label: 'Caterer' },
  { id: 'photographers' as TabType, label: 'Photographers' },
  { id: 'bridal-makeup' as TabType, label: 'Bridal Makeup' },
  { id: 'bridal-dresses' as TabType, label: 'Bridal Dresses' },
]

const Header = ({ activeTab, onTabChange, isLoggedIn, onAuthToggle }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleTabClick = (tab: TabType) => {
    onTabChange(tab)
    setIsMobileMenuOpen(false) // Close mobile menu when tab is selected
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <div className="logo-placeholder">
            <span className="logo-text heading-serif">Wedding Portal</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <ul className="nav-list">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button
                  className={`nav-button ${activeTab === tab.id ? 'nav-button-active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Button */}
        <div className="header-auth">
          <button className="btn btn-primary auth-button" onClick={onAuthToggle}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <ul className="mobile-nav-list">
          {tabs.map((tab) => (
            <li key={tab.id} className="mobile-nav-item">
              <button
                className={`mobile-nav-button ${activeTab === tab.id ? 'mobile-nav-button-active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header