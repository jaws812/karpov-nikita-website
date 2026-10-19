import './Grid.scss'
import clsx from 'clsx'

const gapClasses = { md: 'grid--md-gap', lg: 'grid--lg-gap' }

const Grid = (props) => {
  const { children, columns = 2, gap, isFirstWide } = props

  return (
    <ul
      className={clsx(
        'grid',
        gapClasses[gap],
        columns > 1 && [`grid--${columns}`],
      )}
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
