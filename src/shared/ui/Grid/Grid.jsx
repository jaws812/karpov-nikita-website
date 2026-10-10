import './Grid.scss'

const Grid = (props) => {
  const {
    children,
    columns = 2,
    gapClassName,
  } = props

  return (
    <div
      className={`grid ${columns > 1 ? `grid--${columns}` : ''} ${gapClassName ? `grid--${gapClassName}` : ''}`}
    >
      {children?.map((child, index) => (
        <li
          className="grid__item"
          key={index}
        >{child}</li>
      ))}
    </div>
  )
}

export default Grid