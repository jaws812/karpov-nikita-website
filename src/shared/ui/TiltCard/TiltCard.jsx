import { useRef, useState } from 'react'
import clsx from 'clsx'
import css from './TiltCard.module.scss'

const TiltCard = (props) => {
  const { children } = props

  const ref = useRef(null)
  const rectRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    if (!ref.current) {
      return
    }
    rectRef.current = ref.current.getBoundingClientRect()
    setIsHovered(true)
  }

  const handleMouseMove = (event) => {
    if (!ref.current) {
      return
    }
    const rect = rectRef.current
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * -15
    const shadowX = rotateY * 0.5
    const shadowY = rotateX * 0.5
    ref.current.style.setProperty('--rotate-x', `${rotateX}deg`)
    ref.current.style.setProperty('--rotate-y', `${rotateY}deg`)
    ref.current.style.setProperty('--shadow-x', `${shadowX}px`)
    ref.current.style.setProperty('--shadow-y', `${shadowY}px`)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    ref.current.style.setProperty('--rotate-x', '0deg')
    ref.current.style.setProperty('--rotate-y', '0deg')
    ref.current.style.setProperty('--shadow-x', '0px')
    ref.current.style.setProperty('--shadow-y', '0px')
    rectRef.current = null
  }

  return (
    <div
      className={clsx(css.tiltCard, isHovered && css.hovered)}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default TiltCard
