import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HeroSection from './features/home/HeroSection'
// import ServicesSection from './features/home/ServicesSection'
import TestimonialsSection from './features/home/TestimonialsSection'
import FinalCTASection from './features/home/FinalCTASection'
import VenueLandingPage from './features/venues/VenueLandingPage'
import VenueListingPage from './features/venues/VenueListingPage'
import CatererLanding from './features/Caterer/CatererLanding.tsx'
import CatererDetail from './features/Caterer/CatererDetail';

// Homepage component - only main content
const HomePage = () => (
  <>
    <HeroSection />
    {/* <ServicesSection /> */}
    <TestimonialsSection />
    <FinalCTASection />
  </>
)

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/venues" element={<VenueListingPage />} />
            <Route path="/venue/:venueId" element={<VenueLandingPage />} />
            <Route path="/caterers" element={<CatererLanding />} />
            <Route path="/caterer-detail" element={<CatererDetail />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
