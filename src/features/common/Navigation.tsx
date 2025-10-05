import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navigation.css'

interface NavigationProps {
  activeSection?: string
}

const navigationItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'venues', label: 'Venues', path: '/venues' },
  { id: 'caterers', label: 'Caterers', path: '/caterers' },
  { id: 'photographers', label: 'Photographers', path: '#photographers' }, // Keep as anchor for now
  { id: 'bridal-makeup', label: 'Bridal Makeup', path: '#bridal-makeup' }, // Keep as anchor for now
  { id: 'bridal-dresses', label: 'Bridal Dresses', path: '#bridal-dresses' }, // Keep as anchor for now
]

const Navigation = ({ activeSection }: NavigationProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.path.startsWith('#')) {
      // Handle anchor links (scroll to section)
      window.location.href = item.path
    } else {
      // Handle React Router navigation
      navigate(item.path)
    }
    setIsMenuOpen(false)
  }

  // Determine active section based on current route
  const getCurrentSection = () => {
    if (location.pathname === '/') return 'home'
    if (location.pathname === '/venues') return 'venues'
    if (location.pathname.startsWith('/venue/')) return 'venues'
    return activeSection || 'home'
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-icon">💖</div>
          <div className="logo-text">
            <span className="logo-title">Blissful Weddings</span>
            <span className="logo-subtitle">WEDDING PLANNER</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-menu">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => handleNavClick(item)}
                className={`nav-link ${getCurrentSection() === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="nav-actions">
          <button className="login-btn">Login</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu">
          {navigationItems.map((item) => (
            <li key={item.id} className="mobile-nav-item">
              <button
                onClick={() => handleNavClick(item)}
                className={`mobile-nav-link ${getCurrentSection() === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="mobile-nav-item">
            <button className="mobile-login-btn">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation