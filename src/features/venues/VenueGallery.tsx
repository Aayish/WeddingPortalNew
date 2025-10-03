import './VenueGallery.css'

interface VenueGalleryProps {
  venueId: string
  activeImageIndex: number
  setActiveImageIndex: (index: number) => void
}

const VenueGallery: React.FC<VenueGalleryProps> = ({ venueId }) => {
  return (
    <section className="venue-gallery-section">
      <div className="venue-gallery-container">
        <h2>Gallery</h2>
        <p>Gallery for venue {venueId}</p>
      </div>
    </section>
  )
}

export default VenueGallery