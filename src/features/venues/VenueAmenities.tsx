import './VenueAmenities.css'

interface VenueAmenitiesProps {
  venueId: string
}

const VenueAmenities: React.FC<VenueAmenitiesProps> = ({ venueId }) => {
  return (
    <section className="venue-amenities-section">
      <div className="venue-amenities-container">
        <h2>Amenities</h2>
        <p>Amenities for venue {venueId}</p>
      </div>
    </section>
  )
}

export default VenueAmenities