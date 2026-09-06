import './Logo.scss'

const Logo = (props) => {
  const {
    className = '',
  } = props
  const title = 'Главная страница'

  return (
    <a
      className={`${className} logo`}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width={122}
        height={40}
      />
    </a>
  )
}

export default Logo