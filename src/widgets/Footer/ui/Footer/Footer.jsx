import css from './Footer.module.scss'
import FooterCards from '../FooterCards/FooterCards'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <FooterCards />
    </footer>
  )
}

export default Footer
