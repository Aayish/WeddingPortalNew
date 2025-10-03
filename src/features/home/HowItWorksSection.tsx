import './HowItWorksSection.css';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: '👥',
      title: 'Choose Your Role',
      description: "Select whether you're with the bride, groom, or just exploring to get personalized recommendations.",
    },
    {
      id: 2,
      icon: '🔍',
      title: 'Browse Curated Options',
      description: 'Discover hand-picked vendors and services tailored to your needs and budget across Pakistan.',
    },
    {
      id: 3,
      icon: '💜',
      title: 'Shortlist & Connect',
      description: 'Save your favorites, compare options, and connect directly with vendors to plan your perfect wedding.',
    },
  ];

  return (
    <section className="how-it-works-section">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-description">
        Three simple steps to plan your dream wedding with Pakistan's most trusted vendors.
      </p>
      <div className="how-it-works-steps">
        {steps.map((step) => (
          <div key={step.id} className="how-it-works-step">
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;