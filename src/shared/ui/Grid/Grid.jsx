import './Grid.scss'
import clsx from 'clsx'

const Grid = (props) => {
  const { children, columns = 2, gapClassName, isFirstWide } = props

  return (
    <ul
      className={clsx('grid', {
        [`grid--${columns}`]: columns > 1,
        [`grid--${gapClassName}`]: gapClassName,
      })}
    >
      {children?.map((child, index) => (
        <li
          className={clsx(
            'grid__item',
            isFirstWide && index === 0 && `grid--first-item-wide`,
          )}
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid
