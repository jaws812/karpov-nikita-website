import './Grid.scss'

const Grid = (props) => {
  const { children, columns = 2, gapClassName, actionClassName } = props

  return (
    <ul
      className={`grid ${columns > 1 ? `grid--${columns}` : ''} ${gapClassName ? `grid--${gapClassName}` : ''}`}
    >
      {children?.map((child, index) => (
        <li
          className={`grid__item ${actionClassName && index === 0 ? `grid--${actionClassName}` : ''}`}
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid
