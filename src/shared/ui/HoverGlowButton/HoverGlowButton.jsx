import css from './HoverGlowButton.module.scss'
import { useRef } from 'react'
import Button from '@/shared/ui/Button'
import clsx from 'clsx'

const HoverGlowButton = (props) => {
  const {
    children,
    className,
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

  const handleMouseMove = (e) => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
  }

  const styleVars = {
    '--glow-color': glowColor,
    '--glow-bg': backgroundColor,
    '--glow-text': textColor,
    '--glow-text-hover': hoverTextColor,
  }

  return (
    <Button
      className={clsx(className, css.hoverGlowButton, disabled && css.disabled)}
      type={type}
      href={href}
      target={target}
      isWide={isWide}
      ref={ref}
      style={styleVars}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      <span className={css.glow} aria-hidden='true' />
      <span className={css.content}>{children}</span>
    </Button>
  )
}

export default HoverGlowButton
