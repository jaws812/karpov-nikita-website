import { cardItems } from '@/widgets/FooterCards'
import { menu } from '@/shared/config/menu'
import { contacts } from '@/shared/config/contacts'
import Grid from '@/shared/ui/Grid'
import ContactCard from '@/shared/ui/ContactCard'
import './FooterCards.scss'

const FooterCards = () => {
  return (
    <div
      className='footer-cards'
      id='contacts'
      aria-labelledby='contacts-title'
    >
      <div className='footer-cards__wrapper container'>
        <div className='footer-cards__header'>
          <div className='footer-cards__connection'>Способы связи</div>
          <h2 className='footer-cards__title h1' id='contacts-title'>
            Контакты
          </h2>
          <div className='footer-cards__description'>
            Работаю с React. Открыт к офису в Самаре и к удалёнке.
          </div>
          <Grid>
            {cardItems.map((cardItem) => {
              if (cardItem.secondColumn !== undefined) {
                return (
                  <Grid actionClassName='first-item-wide' key={cardItem.title}>
                    {cardItem.secondColumn.map((item) => (
                      <ContactCard
                        {...item}
                        href={contacts[item.linkType].link}
                        srcIcon={contacts[item.linkType].srcIcon}
                        key={item.linkType}
                      />
                    ))}
                  </Grid>
                )
              }
              return (
                <ContactCard
                  {...cardItem}
                  href={contacts[cardItem.linkType].link}
                  srcIcon={contacts[cardItem.linkType].srcIcon}
                  key={cardItem.linkType}
                />
              )
            })}
          </Grid>
        </div>
        <div className='footer-cards__bottom'>
          <nav className='footer-cards__menu'>
            <ul className='footer-cards__list'>
              {menu.map(({ label, href }) => (
                <li className='footer-cards__item' key={href}>
                  <a className='footer-cards__link' href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='footer-cards__extra'>
            &copy; 2026 Карпов Никита Николаевич &bull; Самара
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCards
