import css from './BurgerButton.module.scss'
import clsx from 'clsx'

const BurgerButton = (props) => {
  const { className, onClick, isActive } = props

  const title = isActive ? 'Закрыть меню' : 'Открыть меню'

  return (
    <button
      className={clsx(css.burgerButton, className, isActive && css.isActive)}
      type='button'
      title={title}
      aria-label={title}
      aria-expanded={isActive}
      onClick={onClick}
    >
      <span className={css.line}></span>
      <span className={css.line}></span>
      <span className={css.line}></span>
    </button>
  )
}

export default BurgerButton
