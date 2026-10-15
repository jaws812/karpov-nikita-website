import './HoverGlowButton.scss'
import { useRef, useState } from 'react'
import Button from '@/shared/ui/Button'

const HoverGlowButton = (props) => {
  const {
    children,
    className = '',
    type = 'button',
    href,
    target,
    isWide,
    disabled = false,
    glowColor = 'var(--color-green-2)',
    backgroundColor = 'var(--color-black)',
    textColor = 'var(--color-white)',
    hoverTextColor = 'var(--color-white)',
    onClick,
    ...rest
  } = props

  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) {
      return
    }
    const rect = el.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const styleVars = {
    '--glow-color': glowColor,
    '--glow-bg': backgroundColor,
    '--glow-text': textColor,
    '--glow-text-hover': hoverTextColor,
    '--glow-x': `${pos.x}px`,
    '--glow-y': `${pos.y}px`,
  }

  const classes = [
    className,
    'hover-glow-button',
    isHovered && 'hover-glow-button--active',
    disabled && 'hover-glow-button--disabled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Button
      type={type}
      href={href}
      target={target}
      isWide={isWide}
      ref={ref}
      className={classes}
      style={styleVars}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <span className='hover-glow-button__glow' aria-hidden='true' />
      <span className='hover-glow-button__content'>{children}</span>
    </Button>
  )
}

export default HoverGlowButton
