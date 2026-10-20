import css from './Logo.module.scss'
import clsx from 'clsx'

const Logo = (props) => {
  const { className } = props
  const title = 'Главная страница'

  return (
    <a
      className={clsx(css.logo, className)}
      href='/'
      title={title}
      aria-label={title}
    >
      <img src='/logo.svg' alt='' width={122} height={40} />
    </a>
  )
}

export default Logo
