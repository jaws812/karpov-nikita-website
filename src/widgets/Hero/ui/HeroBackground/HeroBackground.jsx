import { useEffect, useRef, useState } from 'react'
import { config } from '../../model/backgroundConfig'
import css from './HeroBackground.module.scss'

const rand = (min, max) => min + Math.random() * (max - min)

const createStars = () => {
  const isMobile = matchMedia('(width <= 767px)').matches
  const count = isMobile ? config.countMobile : config.count
  return Array.from({ length: count }, () => {
    const duration = rand(config.durationMin, config.durationMax)
    return {
      x: rand(-0.3, 1.3),
      y: rand(-0.3, 1.3),
      size: rand(config.sizeMin, config.sizeMax),
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      duration,
      delay: rand(0, duration),
    }
  })
}

const HeroBackground = () => {
  const [stars] = useState(createStars)
  const backgroundRef = useRef(null)
  const spaceRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    const background = backgroundRef.current
    const space = spaceRef.current
    const svg = svgRef.current

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const section = background.parentElement
    const gradient = svg.querySelector('linearGradient')
    const lines = [...svg.querySelectorAll('line')]
    const starElements = space.querySelectorAll('[data-js-star]')
    const items = stars.map((star, index) => ({
      ...star,
      element: starElements[index],
      animation: null,
    }))

    let width = 0
    let height = 0
    let centerX = 0
    let centerY = 0

    const measure = () => {
      const rect = background.getBoundingClientRect()
      const styles = getComputedStyle(background)
      width = rect.width
      height = rect.height
      centerX = (width * parseFloat(styles.getPropertyValue('--cx'))) / 100
      centerY = (height * parseFloat(styles.getPropertyValue('--cy'))) / 100
      gradient.setAttribute('x2', width)
    }

    measure()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(background)

    const pointer = {
      x: centerX,
      y: centerY,
      targetX: centerX,
      targetY: centerY,
      isMouse: false,
    }

    const handlePointerMove = (event) => {
      const rect = background.getBoundingClientRect()
      pointer.targetX = event.clientX - rect.left
      pointer.targetY = event.clientY - rect.top
      pointer.isMouse = true
    }

    const handlePointerLeave = () => {
      pointer.isMouse = false
    }

    const canHover = matchMedia('(pointer: fine)').matches

    if (canHover) {
      section.addEventListener('pointermove', handlePointerMove)
      section.addEventListener('pointerleave', handlePointerLeave)
    }

    let isVisible = true

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      background.classList.toggle(css.paused, !isVisible)
    })
    intersectionObserver.observe(background)

    const findNodes = (originX, originY) => {
      const nodes = []

      items.forEach((star) => {
        star.animation ??= star.element.getAnimations()[0]

        if (!star.animation) {
          return
        }

        const durationMs = star.duration * 1000
        const time = (star.animation.currentTime ?? 0) + star.delay * 1000
        const progress = (time % durationMs) / durationMs

        if (progress < 0.3) {
          return
        }

        const z = config.zFrom + (config.zTo - config.zFrom) * progress
        const scale = config.perspective / (config.perspective - z)
        const x = originX + (star.x * width - originX) * scale
        const y = originY + (star.y * height - originY) * scale

        if (Math.hypot(x - pointer.x, y - pointer.y) > config.near) {
          return
        }

        let fade = 1

        if (progress < 0.45) {
          fade = (progress - 0.3) / 0.15
        } else if (progress > 0.8) {
          fade = (1 - progress) / 0.2
        }

        nodes.push({ x, y, fade })
      })

      return nodes
    }

    const drawLines = (nodes) => {
      const strength = pointer.isMouse
        ? config.lineStrength
        : config.lineStrengthIdle
      let used = 0

      for (let a = 0; a < nodes.length && used < lines.length; a++) {
        for (let b = a + 1; b < nodes.length && used < lines.length; b++) {
          const first = nodes[a]
          const second = nodes[b]
          const distance = Math.hypot(first.x - second.x, first.y - second.y)
          if (distance > config.link) {
            continue
          }

          const middleX = (first.x + second.x) / 2
          const middleY = (first.y + second.y) / 2
          const toPointer = Math.hypot(middleX - pointer.x, middleY - pointer.y)
          const opacity =
            (1 - distance / config.link) *
            (1 - toPointer / config.near) *
            Math.min(first.fade, second.fade) *
            strength

          const line = lines[used]
          used++
          line.setAttribute('x1', first.x)
          line.setAttribute('y1', first.y)
          line.setAttribute('x2', second.x)
          line.setAttribute('y2', second.y)
          line.style.opacity = Math.max(0, opacity)
        }
      }

      for (let i = used; i < lines.length; i++) {
        lines[i].style.opacity = 0
      }
    }

    let frame = 0

    const draw = (now) => {
      frame = requestAnimationFrame(draw)

      if (!isVisible || document.hidden) {
        return
      }

      if (!pointer.isMouse) {
        pointer.targetX = centerX + Math.sin(now / 4300) * width * 0.12
        pointer.targetY = centerY + Math.sin(now / 3100) * height * 0.22
      }

      pointer.x += (pointer.targetX - pointer.x) * config.ease
      pointer.y += (pointer.targetY - pointer.y) * config.ease

      const originX = centerX + (pointer.x - centerX) * config.steer
      const originY = centerY + (pointer.y - centerY) * config.steer
      space.style.perspectiveOrigin = `${originX}px ${originY}px`

      drawLines(findNodes(originX, originY))
    }

    frame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      section.removeEventListener('pointermove', handlePointerMove)
      section.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [stars])

  return (
    <div className={css.background} ref={backgroundRef} aria-hidden='true'>
      <div
        className={css.space}
        ref={spaceRef}
        style={{
          '--z-from': `${config.zFrom}px`,
          '--z-to': `${config.zTo}px`,
        }}
      >
        {stars.map((star, index) => (
          <span
            className={css.star}
            key={index}
            data-js-star=''
            style={{
              '--size': `${star.size}px`,
              '--color': star.color,
              '--duration': `${star.duration}s`,
              '--delay': `-${star.delay}s`,
              left: `${star.x * 100}%`,
              top: `${star.y * 100}%`,
            }}
          />
        ))}
        <svg className={css.links} ref={svgRef}>
          <defs>
            <linearGradient
              id='starGradient'
              gradientUnits='userSpaceOnUse'
              x1='0'
              y1='0'
              x2='1600'
              y2='0'
            >
              <stop offset='0%' style={{ stopColor: 'var(--color-green-1)' }} />
              <stop
                offset='100%'
                style={{ stopColor: 'var(--color-turquoise)' }}
              />
            </linearGradient>
          </defs>
          {Array.from({ length: config.maxLines }).map((_, i) => (
            <line key={i} />
          ))}
        </svg>
      </div>
    </div>
  )
}

export default HeroBackground
