import TestimonialCard from './TestimonialCard'
import './TestimonialsSection.css'

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  review: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    location: 'Lahore',
    rating: 5,
    review: 'Blissful Weddings turned our wildest dreams into the most beautiful reality. Every detail was lovingly crafted, and our hearts are still full of gratitude. It truly was the wedding of our dreams.',
    image: '/api/placeholder/60/60'
  },
  {
    id: '2',
    name: 'Fatima & Hassan',
    location: 'Karachi',
    rating: 5,
    review: 'From the moment we said "yes" to each other, Blissful Weddings helped us say "yes" to everything else. Our love story deserved nothing less than perfection, and that\'s exactly what we received.',
    image: '/api/placeholder/60/60'
  },
  {
    id: '3',
    name: 'Aisha Khan',
    location: 'Islamabad',
    rating: 5,
    review: 'Every bride deserves to feel like the most beautiful version of herself. Thanks to the incredible artists I found here, I felt radiant, confident, and completely myself on my wedding day.',
    image: '/api/placeholder/60/60'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Love Stories That Inspire Us</h2>
          <p className="testimonials-description">
            Every wedding is a testament to love's power to create magic. These beautiful souls 
            trusted us with their most precious day, and their joy fills our hearts with purpose.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection