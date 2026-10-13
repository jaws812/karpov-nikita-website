import './HoverGlowButton.scss'
import { useRef, useState } from 'react'

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

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const specificProps = isLink ? { href, target } : { type, disabled }

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
    'button',
    'hover-glow-button',
    isWide && 'button--wide',
    isHovered && 'hover-glow-button--active',
    disabled && 'hover-glow-button--disabled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component
      ref={ref}
      className={classes}
      style={styleVars}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...specificProps}
      {...rest}
    >
      <span className='hover-glow-button__glow' aria-hidden='true' />
      <span className='hover-glow-button__content'>{children}</span>
    </Component>
  )
}

export default HoverGlowButton
