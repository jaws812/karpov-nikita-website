import Button from "@/shared/ui/Button";
import './Header.scss'
import Logo from "@/shared/ui/Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__info">
          <Logo className="header__logo" />
          <div className="header__name">Никита Карпов</div>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a
                className="header__menu-link"
                href="#"
              >
                Обо мне
              </a>
            </li>
            <li className="header__menu-item">
              <a
                className="header__menu-link"
                href="#"
              >
                Стек
              </a>
            </li>
            <li className="header__menu-item">
              <a
                className="header__menu-link"
                href="#"
              >
                Проекты
              </a>
            </li>
            <li className="header__menu-item">
              <a
                className="header__menu-link"
                href="#"
              >
                Путь
              </a>
            </li>
            <li className="header__menu-item">
              <a
                className="header__menu-link"
                href="#"
              >
                Как я работаю
              </a>
            </li>
            <li className="header__menu-item">
              <a
                className="header__menu-link"
                href="#"
              >
                Контакты
              </a>
            </li>
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