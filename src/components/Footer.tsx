import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">Blissful Weddings</h3>
          <p className="footer-tagline">Making your dream wedding a reality</p>
        </div>
        <div className="footer-links">
          <span className="footer-copyright">© 2025 Blissful Weddings</span>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">Privacy Policy</a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">Terms of Service</a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer