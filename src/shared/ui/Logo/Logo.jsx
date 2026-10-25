import css from './Logo.module.scss'

const Logo = () => {
  const title = 'Главная страница'

  return (
    <a className={css.logo} href='/' title={title} aria-label={title}>
      <img src='/logo.svg' alt='' width={32} height={32} />
    </a>
  )
}

export default Logo
