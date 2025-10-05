import './HeroSection.css'
// import HowItWorksSection from './HowItWorksSection'

const HeroSection = () => {
  const cardData = [
    {
      icon: '👑',
      title: "I'm with the Bride",
      subtitle: 'Bridal focused services',
      description: 'Discover exquisite bridal wear, jewelry, and beauty services.',
    },
    {
      icon: '👥',
      title: "I'm with the Groom",
      subtitle: 'Venues & planning',
      description: 'Explore premium venues, catering, and event coordination.',
    },
    {
      icon: '🧭',
      title: 'Just Exploring',
      subtitle: 'Browse all vendors',
      description: 'Browse our complete collection of wedding services.',
    },
  ]

  return (
    <div>
      <section className="hero-section">
        {/* Hero Section with Background and Text */}
        <div className="hero-background-section">
          <div className="hero-text-content">
            <h1 className="hero-main-heading">
              Plan Your Wedding, <span className="hero-highlight">Stress-Free</span>
            </h1>
            <p className="hero-subheading">
              Whether you're with the bride, the groom, or just exploring —
              <br />
              we'll guide you every step of the way to your <span className="hero-highlight">perfect Pakistani wedding</span>.
            </p>
          </div>
        </div>
        <div className="hero-cards-container">
          {cardData.map((card, index) => (
            <div key={index} className="hero-card">
              <div className="hero-card-icon">{card.icon}</div>
              <h3 className="hero-card-title">{card.title}</h3>
              <p className="hero-card-subtitle">{card.subtitle}</p>
              <p className="hero-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <HowItWorksSection /> */}
    </div>
  )
}

export default HeroSection