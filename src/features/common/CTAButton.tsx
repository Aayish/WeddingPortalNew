import './CTAButton.css'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
}

const CTAButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  icon
}: CTAButtonProps) => {
  const baseClass = 'cta-button'
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    disabled ? `${baseClass}--disabled` : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="cta-button__icon">{icon}</span>}
      <span className="cta-button__text">{children}</span>
    </button>
  )
}

export default CTAButton