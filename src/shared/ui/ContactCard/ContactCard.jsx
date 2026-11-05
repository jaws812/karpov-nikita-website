import css from './ContactCard.module.scss'
import clsx from 'clsx'
import Icon from '@/shared/ui/Icon'

const ContactCard = (props) => {
  const { subtitle, title, isAccent, href, name, size } = props

  return (
    <a
      className={clsx(css.contactCard, isAccent && css.accent)}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <div className={css.header}>
        <Icon className={css.icon} name={name} size={size} />
        <Icon className={css.arrow} name='arrowRightCard' size={40} />
      </div>
      <div className={css.bottom}>
        <div className={css.subtitle}>{subtitle}</div>
        <h3 className={css.title}>{title}</h3>
        {isAccent && (
          <div className={css.extra}>
            Написать в Telegram
            <Icon name='arrowRight' />
          </div>
        )}
      </div>
    </a>
  )
}

export default ContactCard
