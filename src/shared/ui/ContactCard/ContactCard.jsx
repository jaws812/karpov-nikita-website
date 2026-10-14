import './ContactCard.scss'
import { contacts } from '@/shared/config/contacts'

const ContactCard = (props) => {
  const { subtitle, title, linkType, isAccent } = props

  const linkAttrs = contacts.find((data) => data.type === linkType)

  const linkHref = linkAttrs.valueLink

  const srcIcon = linkAttrs.srcIcon

  return (
    <a
      className={`contact-card ${isAccent ? 'contact-card--accent' : ''}`}
      href={linkHref !== null ? linkHref : ''}
      target='_blank'
      rel='noreferrer'
    >
      <header className='contact-card__header'>
        <img
          className='contact-card__image'
          src={`${srcIcon}`}
          alt=''
          width=''
          height=''
          loading='lazy'
        />
        <svg
          className='contact-card__header-icon'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.6667 11.6667H28.3334V28.3334'
            stroke='#0A140E'
            strokeWidth='3.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.6667 28.3334L28.3334 11.6667'
            stroke='#0A140E'
            strokeWidth='3.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </header>
      <div className='contact-card__bottom'>
        <div className='contact-card__subtitle'>{subtitle}</div>
        <h3 className='contact-card__title'>{title}</h3>
        {isAccent && (
          <div className='contact-card__extra'>
            Написать в Telegram
            <svg
              className='contact-card__extra-icon'
              width='25'
              height='25'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='#000000'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='miter'
            >
              <polyline points='13 17 18 12 13 7'></polyline>
              <line x1='6' y1='12' x2='18' y2='12'></line>
            </svg>
          </div>
        )}
      </div>
    </a>
  )
}

export default ContactCard
