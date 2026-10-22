import Button from '@/shared/ui/Button'
import Logo from '@/shared/ui/Logo'
import BurgerButton from '@/shared/ui/BurgerButton'
import { useEffect, useState } from 'react'
import { menu } from '@/shared/config/menu'
import { contacts } from '@/shared/config/contacts'
import css from './Header.module.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('is-lock', isOpen)

    return () => {
      document.documentElement.classList.remove('is-lock')
    }
  }, [isOpen])

  useEffect(() => {
    const laptopAboveQuery = window.matchMedia('(width > 1440px)')
    const handleBreakpointChange = (event) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }
    laptopAboveQuery.addEventListener('change', handleBreakpointChange)

    return () => {
      laptopAboveQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [])

  return (
    <header className={css.header}>
      <div className={`${css.wrapper} container`}>
        <div className={css.info}>
          <Logo className={css.logo} />
          <div className={css.name}>Никита Карпов</div>
        </div>
        <dialog className={css.overlayMenuDialog} open={isOpen}>
          <nav className={css.menu}>
            <ul className={css.menuList}>
              {menu.map(({ label, href }) => (
                <li key={href}>
                  <a className={css.menuLink} href={href} onClick={closeMenu}>
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
        <BurgerButton onClick={toggleMenu} isActive={isOpen} />
      </div>
    </header>
  )
}

export default Header
