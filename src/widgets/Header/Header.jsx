import Button from "@/shared/ui/Button";
import './Header.scss'
import Logo from "@/shared/ui/Logo";

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

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__info">
          <Logo className="header__logo" />
          <div className="header__name">Никита Карпов</div>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({label, href}) => {
              return (
                <li className="header__menu-item">
                  <a
                    className="header__menu-link"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="header__action">
          <div className="header__action-soc1als">
            <Button
              className="button--small"
              href="https://t.me/josodo2xx"
              target="_blank"
            >Telegram</Button>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header