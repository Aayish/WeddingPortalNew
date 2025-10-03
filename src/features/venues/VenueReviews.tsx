import './VenueReviews.css'

interface VenueReviewsProps {
  venueId: string
}

const VenueReviews: React.FC<VenueReviewsProps> = ({ venueId }) => {
  return (
    <section className="venue-reviews-section">
      <div className="venue-reviews-container">
        <h2>Reviews</h2>
        <p>Reviews for venue {venueId}</p>
      </div>
    </section>
  )
}

export default VenueReviews