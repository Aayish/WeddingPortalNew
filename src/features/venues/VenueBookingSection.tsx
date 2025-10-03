import './VenueBookingSection.css'

interface VenueBookingSectionProps {
  venueId: string
}

const VenueBookingSection: React.FC<VenueBookingSectionProps> = ({ venueId }) => {
  return (
    <section className="venue-booking-section">
      <div className="venue-booking-container">
        <h2>Book This Venue</h2>
        <p>Booking form for venue {venueId}</p>
      </div>
    </section>
  )
}

export default VenueBookingSection