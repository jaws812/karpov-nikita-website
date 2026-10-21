import css from './ContactCard.module.scss'
import clsx from 'clsx'

const ContactCard = (props) => {
  const { subtitle, title, isAccent, href, srcIcon, widthIcon, heightIcon } =
    props

  return (
    <a
      className={clsx(css.contactCard, isAccent && css.accent)}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <div className={css.header}>
        <img
          className={css.image}
          src={srcIcon}
          alt=''
          width={widthIcon}
          height={heightIcon}
          loading='lazy'
        />
        <svg
          className={css.headerIcon}
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
      </div>
      <div className={css.bottom}>
        <div className={css.subtitle}>{subtitle}</div>
        <h3 className={css.title}>{title}</h3>
        {isAccent && (
          <div className={css.extra}>
            Написать в Telegram
            <svg
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
