import './BurgerButton.scss'
import clsx from 'clsx'

const BurgerButton = (props) => {
  const { className, onClick } = props

  const title = 'Открыть меню'

  return (
    <button
      className={clsx('burger-button', className)}
      type='button'
      aria-label={title}
      title={title}
      onClick={onClick}
    >
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </button>
  )
}

export default BurgerButton
