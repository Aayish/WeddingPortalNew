import type { TabType } from '../App'
import VenueSection from './VenueSection.tsx'
import './MainContent.css'

interface MainContentProps {
  activeTab: TabType
}

const MainContent = ({ activeTab }: MainContentProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'venue':
        return <VenueSection />
      case 'caterer':
        return (
          <div className="content-section">
            <div className="content-placeholder">
              <h2 className="heading-serif">Caterer Services</h2>
              <p>Coming Soon - Discover amazing catering services for your special day.</p>
            </div>
          </div>
        )
      case 'photographers':
        return (
          <div className="content-section">
            <div className="content-placeholder">
              <h2 className="heading-serif">Wedding Photographers</h2>
              <p>Coming Soon - Find professional photographers to capture your memories.</p>
            </div>
          </div>
        )
      case 'bridal-makeup':
        return (
          <div className="content-section">
            <div className="content-placeholder">
              <h2 className="heading-serif">Bridal Makeup Artists</h2>
              <p>Coming Soon - Book talented makeup artists for your wedding day.</p>
            </div>
          </div>
        )
      case 'bridal-dresses':
        return (
          <div className="content-section">
            <div className="content-placeholder">
              <h2 className="heading-serif">Bridal Dresses</h2>
              <p>Coming Soon - Explore beautiful wedding dress collections.</p>
            </div>
          </div>
        )
      default:
        return <VenueSection />
    }
  }

  return (
    <main className="main-content">
      {renderContent()}
    </main>
  )
}

export default MainContent