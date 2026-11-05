import { svgItems } from './icons'

const Icon = (props) => {
  const { className, name, size = 24 } = props
  const { draw, viewBox } = svgItems[name]

  return (
    <svg
      className={className}
      viewBox={viewBox}
      width={size}
      height={size}
      fill='none'
      stroke='currentColor'
      aria-hidden='true'
    >
      {draw}
    </svg>
  )
}

export default Icon
