import CTAButton from '../common/CTAButton'
import './FinalCTASection.css'

const FinalCTASection = () => {
  const handleStartJourney = () => {
    // Handle start journey action - could scroll to top, open form, etc.
    console.log('Start Your Love Story clicked')
    // In a real app, you might navigate to a getting started page
    // navigate('/get-started')
  }

  return (
    <section className="final-cta-section" id="get-started">
      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-title">Your Forever Starts Here</h2>
          <p className="final-cta-description">
            Step into a world where every detail is infused with love, and every moment 
            is designed to celebrate the beautiful future you're building together.
          </p>
          
          <div className="final-cta-action">
            <CTAButton 
              variant="primary" 
              size="large"
              onClick={handleStartJourney}
              icon="💕"
            >
              Start Your Love Story
            </CTAButton>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="final-cta-decoration">
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
          <div className="decoration-circle decoration-circle-3"></div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection