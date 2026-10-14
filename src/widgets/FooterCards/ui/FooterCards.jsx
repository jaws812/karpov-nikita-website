import { cardItems } from '@/widgets/FooterCards/model/cardItems'
import { menu } from '@/shared/config/menu'
import Grid from '@/shared/ui/Grid'
import ContactCard from '@/shared/ui/ContactCard'
import './FooterCards.scss'

const FooterCards = () => {
  return (
    <div className='footer-cards'>
      <div className='footer-cards__wrapper container'>
        <header className='footer-cards__header'>
          <div className='footer-cards__connection'>Способы связи</div>
          <h2 className='footer-cards__title h1'>Контакты</h2>
          <div className='footer-cards__description'>
            Работаю с React. Открыт к офису в Самаре и к удалёнке.
          </div>
          <Grid>
            {cardItems.map((cardItem) => {
              if (cardItem.secondColumn !== undefined) {
                return (
                  <Grid actionClassName='first-item-wide' key={cardItem.title}>
                    {cardItem.secondColumn.map((item) => (
                      <ContactCard {...item} key={item.linkType} />
                    ))}
                  </Grid>
                )
              }
              return <ContactCard {...cardItem} key={cardItem.linkType} />
            })}
          </Grid>
        </header>
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
