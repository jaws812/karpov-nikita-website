import { useEffect, useRef, useState } from 'react'
import { backgroundConfig } from '../../model/backgroundConfig'
import css from './HeroBackground.module.scss'

const rand = (a, b) => a + Math.random() * (b - a)

const createStars = () => {
  const isMobile = matchMedia('(max-width: 767px)').matches
  const count = isMobile ? backgroundConfig.countMobile : backgroundConfig.count
  return Array.from({ length: count }, () => ({
    x: rand(-0.3, 1.3),
    y: rand(-0.3, 1.3),
    size: rand(backgroundConfig.sizeMin, backgroundConfig.sizeMax),
    color:
      backgroundConfig.colors[
        Math.floor(Math.random() * backgroundConfig.colors.length)
      ],
    duration: rand(backgroundConfig.durationMin, backgroundConfig.durationMax),
    delay: rand(0, backgroundConfig.durationMax),
  }))
}

const HeroBackground = () => {
  const [stars] = useState(createStars)
  const refBackground = useRef(null)
  const refSpace = useRef(null)
  const refSvg = useRef(null)

  useEffect(() => {
    const background = refBackground.current
    const space = refSpace.current
    const svg = refSvg.current
    if (!background || !space || !svg) {
      return
    }
    const starElements = space.querySelectorAll(['data-js-space'])
    const lineElements = svg.querySelectorAll(['data-js-line'])
    let width = 0
    let height = 0
    let centerX = 0
    let centerY = 0
    const calculateParams = () => {
      const rect = background.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const cs = getComputedStyle(background)
      const cx = parseFloat(cs.getPropertyValue('--cs')) / 100 || 0.75
      const cy = parseFloat(cs.getPropertyValue('--cy')) / 100 || 0.5
      centerX = width * cx
      centerY = height * cy
    }
    calculateParams()
    const resizeObserver = new ResizeObserver(calculateParams)
    resizeObserver.observe(background)
  }, [stars])
  return (
    <div className={css.background} ref={refBackground} aria-hidden='true'>
      <div
        className={css.space}
        ref={refSpace}
        data-js-space=''
        style={{
          '--z-from': `${backgroundConfig.zFrom}px`,
          '--z-to': `${backgroundConfig.zTo}px`,
        }}
      >
        {stars.map((s, i) => (
          <span
            className={css.star}
            key={i}
            style={{
              '--size': `${s.size}px`,
              '--color': s.color,
              '--duration': `${s.duration}s`,
              '--delay': `-${s.delay}s`,
              left: `${s.x * 100}%`,
              top: `${s.y * 100}%`,
            }}
          />
        ))}
        <svg className={css.links} ref={refSvg}>
          <defs>
            <linearGradient id='starGradient' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0%' style={{ stopColor: 'var(--color-green-1)' }} />
              <stop
                offset='100%'
                style={{ stopColor: 'var(--color-turquoise)' }}
              />
            </linearGradient>
          </defs>
          {Array.from({ length: backgroundConfig.maxLines }).map((_, i) => (
            <line key={i} data-js-line='' />
          ))}
        </svg>
      </div>
    </div>
  )
}

export default HeroBackground
