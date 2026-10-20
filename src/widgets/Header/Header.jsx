import Button from '@/shared/ui/Button'
import Logo from '@/shared/ui/Logo'
import BurgerButton from '@/shared/ui/BurgerButton'
import { useEffect, useState } from 'react'
import { menu } from '@/shared/config/menu'
import { contacts } from '@/shared/config/contacts'
import css from './Header.module.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => {
    setIsOpen(!isOpen)
  }

  const hideMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('is-lock', isOpen)

    return () => {
      document.documentElement.classList.remove('is-lock')
    }
  }, [isOpen])

  return (
    <header className={css.header}>
      <div className={`${css.wrapper} container`}>
        <div className={css.info}>
          <Logo className={css.headerLogo} />
          <div className={css.headerName}>Никита Карпов</div>
        </div>
        <dialog className={css.overlayMenuDialog} open={isOpen}>
          <nav className={css.headerMenu}>
            <ul className={css.headerMenuList}>
              {menu.map(({ label, href }) => (
                <li key={href}>
                  <a
                    className={css.headerMenuLink}
                    href={href}
                    onClick={hideMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <div className={css.action}>
          <div>
            <Button isSmall href={contacts.telegram.link} target='_blank'>
              Telegram
            </Button>
          </div>
        </div>
        <BurgerButton onClick={onClick} isActive={isOpen} />
      </div>
    </header>
  )
}

export default Header
