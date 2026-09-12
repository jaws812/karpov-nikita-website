import './BurgerButton.scss'

const BurgerButton = (props) => {
  const {
    className,
    onClick,
  } = props

  const title = "Открыть меню"

  return (
    <button
      className={`${className} burger-button`}
      type="button"
      aria-label={title}
      title={title}
      onClick={onClick}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  )
}

export default BurgerButton