import { useNavigate } from 'react-router-dom'
import './ServiceCard.css'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  color: string
  link: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const navigate = useNavigate()

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Service card clicked:', service.id)
    console.log('Event target:', e.target)
    
    // Visual feedback
    const target = e.currentTarget as HTMLElement
    target.style.transform = 'scale(0.95)'
    setTimeout(() => {
      target.style.transform = ''
    }, 150)
    
    // Handle navigation based on service type
    if (service.id === 'venues') {
      console.log('Navigating to venues page...')
      setTimeout(() => {
        navigate('/venues')
      }, 200)
    } else {
      // For other services, show a coming soon message
      setTimeout(() => {
        alert(`${service.title} - Coming Soon! This feature will be available in the next update.`)
      }, 200)
    }
  }

  return (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleCardClick}
    >
      <div className="service-card-content">
        <div 
          className="service-icon"
          style={{ backgroundColor: service.color }}
        >
          <span className="service-icon-emoji">{service.icon}</span>
        </div>
        
        <h3 className="service-title">{service.title}</h3>
        
        <p className="service-description">{service.description}</p>
      </div>
      
      <div className="service-card-hover-overlay">
        <span className="service-card-cta">Explore →</span>
      </div>
    </div>
  )
}

export default ServiceCard