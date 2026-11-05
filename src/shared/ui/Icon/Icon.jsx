import { svgItems } from './icons'

const Icon = (props) => {
  const { className, name, viewBox = '0 0 24 24', size = '24px' } = props

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
      {svgItems[name].draw !== undefined ? svgItems[name].draw : svgItems[name]}
    </svg>
  )
}

export default Icon
