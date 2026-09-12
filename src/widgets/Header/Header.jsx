import Button from "@/shared/ui/Button";
import Logo from "@/shared/ui/Logo";
import BurgerButton from "@/shared/ui/BurgerButton";
import './Header.scss'

const Header = () => {
  const menuItems = [
    {
      label: 'Обо мне',
      href: '#',
    },
    {
      label: 'Стек',
      href: '#',
    },
    {
      label: 'Стек',
      href: '#',
    },
    {
      label: 'Путь',
      href: '#',
    },
    {
      label: 'Как я работаю',
      href: '#',
    },
    {
      label: 'Контакты',
      href: '#',
    },
  ]

  const onClick = (event) => {
    const overlayMenu = document.querySelector('[data-js-overlay-menu-dialog]')

    event.currentTarget.classList.toggle("is-active")
    overlayMenu.open = !overlayMenu.open
    document.documentElement.classList.toggle("is-lock")
  }

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__info">
          <Logo className="header__logo" />
          <div className="header__name">Никита Карпов</div>
        </div>
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=''
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({label, href}, index) => (
                <li
                  className="header__menu-item"
                  key={index}
                >
                  <a
                    className="header__menu-link"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <div className="header__action">
          <div className="header__action-soc1als">
            <Button
              className="button--small"
              href="https://t.me/josodo2xx"
              target="_blank"
            >Telegram</Button>
          </div>
        </div>
        <BurgerButton
          className={"header__burger-button"}
          onClick={onClick}
        />
      </div>
    </header>
  )
}

export default Header