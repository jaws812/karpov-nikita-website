import { cardItems } from '../../model/cardItems'
import { menu } from '@/shared/config/menu'
import { contacts } from '@/shared/config/contacts'
import Grid from '@/shared/ui/Grid'
import ContactCard from '@/shared/ui/ContactCard'
import css from './FooterCards.module.scss'
import clsx from 'clsx'
import TiltCard from '@/shared/ui/TiltCard'
import { svgItems } from '@/shared/ui/Icon/icons'

const FooterCards = () => {
  const accentCard = cardItems[0]
  const otherCards = cardItems.slice(1)

  return (
    <section
      className={css.footerCards}
      id='contacts'
      aria-labelledby='contacts-title'
    >
      <div className={clsx(css.wrapper, 'container')}>
        <div className={css.header}>
          <div className={css.connection}>Способы связи</div>
          <h2 className={clsx(css.title, 'h1')} id='contacts-title'>
            Контакты
          </h2>
          <div className={css.description}>
            Удобнее всего написать в Telegram.
          </div>
          <Grid>
            {accentCard && (
              <TiltCard>
                <ContactCard
                  isAccent
                  {...accentCard}
                  href={contacts[accentCard.linkType].link}
                  name={contacts[accentCard.linkType].name}
                  size={contacts[accentCard.linkType].widthIcon}
                  viewBox={svgItems[accentCard.linkType].viewBox}
                />
              </TiltCard>
            )}
            {otherCards.length > 0 && (
              <Grid isFirstWide collapseAt='mobileS'>
                {otherCards.map((item) => {
                  return (
                    <ContactCard
                      {...item}
                      href={contacts[item.linkType].link}
                      name={contacts[item.linkType].name}
                      size={contacts[item.linkType].widthIcon}
                      viewBox={svgItems[item.linkType].viewBox}
                      key={item.title}
                    />
                  )
                })}
              </Grid>
            )}
          </Grid>
        </div>
        <div className={css.bottom}>
          <nav>
            <ul className={css.list}>
              {menu.map(({ label, href }) => (
                <li key={href}>
                  <a className={css.link} href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={css.extra}>
            &copy; 2026 Карпов Никита Николаевич &bull; Самара
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterCards
