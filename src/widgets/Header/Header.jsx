import Button from '@/shared/ui/Button'
import Logo from '@/shared/ui/Logo'
import BurgerButton from '@/shared/ui/BurgerButton'
import { menu } from '@/shared/config/menu'
import { contacts } from '@/shared/config/contacts'
import './Header.scss'

const Header = () => {
  const onClick = (event) => {
    const overlayMenu = document.querySelector('[data-js-overlay-menu-dialog]')

    event.currentTarget.classList.toggle('is-active')
    overlayMenu.open = !overlayMenu.open
    document.documentElement.classList.toggle('is-lock')
  }
  const link = contacts.find(({ type }) => type === 'telegram')

  return (
    <header className='header'>
      <div className='header__wrapper container'>
        <div className='header__info'>
          <Logo className='header__logo' />
          <div className='header__name'>Никита Карпов</div>
        </div>
        <dialog
          className='header__overlay-menu-dialog'
          data-js-overlay-menu-dialog=''
        >
          <nav className='header__menu'>
            <ul className='header__menu-list'>
              {menu.map(({ label, href }) => (
                <li className='header__menu-item' key={href}>
                  <a className='header__menu-link' href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <div className='header__action'>
          <div className='header__action-soc1als'>
            <Button
              className='button--small'
              href={link.valueLink}
              target='_blank'
            >
              Telegram
            </Button>
          </div>
        </div>
        <BurgerButton className={'header__burger-button'} onClick={onClick} />
      </div>
    </header>
  )
}

export default Header
