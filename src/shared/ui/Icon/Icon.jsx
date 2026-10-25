import { svgItems } from './icons'

const Icon = (props) => {
  const { className, name, size = '24px' } = props

  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      width={size}
      height={size}
      fill='none'
      stroke='currentColor'
      aria-hidden='true'
    >
      {svgItems[name]}
    </svg>
  )
}

export default Icon
