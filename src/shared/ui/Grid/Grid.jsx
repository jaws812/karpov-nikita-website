import css from './Grid.module.scss'
import clsx from 'clsx'

const gapClasses = { md: css.mdGap, lg: css.lgGap }
const columnsClasses = { 2: css.grid2, 4: css.grid4 }

const Grid = (props) => {
  const { children, columns = 2, gap, isFirstWide } = props

  return (
    <ul className={clsx(css.grid, gapClasses[gap], columnsClasses[columns])}>
      {children?.map((child, index) => (
        <li
          className={clsx(
            css.item,
            isFirstWide && index === 0 && css.firstItemWide,
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
