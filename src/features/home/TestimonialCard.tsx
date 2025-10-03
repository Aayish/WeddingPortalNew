import './TestimonialCard.css'

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  review: string
  image: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : 'empty'}`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <div 
      className="testimonial-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="testimonial-rating">
        {renderStars(testimonial.rating)}
      </div>
      
      <blockquote className="testimonial-review">
        "{testimonial.review}"
      </blockquote>
      
      <div className="testimonial-author">
        <div className="author-avatar">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const parent = e.currentTarget.parentElement
              if (parent) {
                parent.innerHTML = `<div class="avatar-placeholder">${testimonial.name.charAt(0)}</div>`
              }
            }}
          />
        </div>
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-location">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard