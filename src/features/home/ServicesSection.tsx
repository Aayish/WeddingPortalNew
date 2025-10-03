import ServiceCard from './ServiceCard'
import './ServicesSection.css'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  color: string
  link: string
}

const services: Service[] = [
  {
    id: 'venues',
    title: 'Dream Venues',
    description: 'Discover enchanting spaces where your love story unfolds—from romantic ballrooms to intimate garden sanctuaries',
    icon: '📍',
    color: '#E8B4C8',
    link: '/venues'
  },
  {
    id: 'culinary',
    title: 'Culinary Excellence',
    description: 'Delight your guests with extraordinary cuisine crafted by master chefs who understand your vision',
    icon: '👑',
    color: '#D4A574',
    link: '/caterers'
  },
  {
    id: 'photography',
    title: 'Memory Keepers',
    description: 'Preserve every tender glance, joyful tear, and magical moment with artists who capture souls',
    icon: '📷',
    color: '#B8A5D6',
    link: '/photographers'
  },
  {
    id: 'beauty',
    title: 'Bridal Artistry',
    description: 'Radiate confidence and beauty with makeup artists who enhance your natural glow for your special day',
    icon: '💄',
    color: '#A8C5A8',
    link: '/bridal-makeup'
  },
  {
    id: 'couture',
    title: 'Bridal Couture',
    description: 'Find the gown that makes your heart skip—exquisite designs that celebrate your unique love story',
    icon: '💖',
    color: '#E8B4C8',
    link: '/bridal-dresses'
  },
  {
    id: 'planning',
    title: 'Love Planning',
    description: 'Transform dreams into reality with personalized planning tools that honor every detail of your journey',
    icon: '📅',
    color: '#D4A574',
    link: '/planning'
  }
]

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Crafting Moments of Pure Magic</h2>
          <p className="services-description">
            Every detail of your wedding should whisper the story of your love.
            <br />
            Our carefully curated collection of artisans and venues are
            <br />
            dedicated to making your heart's deepest wishes come true.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection