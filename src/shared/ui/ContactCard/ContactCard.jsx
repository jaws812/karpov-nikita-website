import './ContactCard.scss'

const ContactCard = (props) => {
  const {
    subtitle,
    title,
    linkType,
    isAccent,
  } = props

  const dataLinks = [
    {
      type: 'telegram',
      valueLink: 'https://t.me/josodo2xx',
      srcIcon: '/telegram.svg',
    },
    {
      type: 'email',
      valueLink: 'mailto:nikitakarpov-2002@yandex.ru',
      srcIcon: '/email.svg',
    },
    {
      type: 'document',
      valueLink: 'https://nikita-karpov-resume.pdf',
      srcIcon: '/document.svg',
    },
    {
      type: 'github',
      valueLink: 'https://github.com/jaws812',
      srcIcon: '/github.svg',
    },
  ]

  const linkAttrs = dataLinks.find((data) => data.type === linkType)

  const linkHref = linkAttrs.valueLink

  const srcIcon = linkAttrs.srcIcon

  return (
    <a
      className={`contact-card ${isAccent ? 'contact-card--accent' : ''}`}
      href={linkHref !== null ? linkHref : ''}
      target="_blank"
    >
      <header className="contact-card__header">
        <img
          className="contact-card__image"
          src={`${srcIcon}`}
          alt=""
          width=""
          height=""
          loading="lazy"
        />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 11.6667H28.3334V28.3334"
            stroke="#0A140E"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6667 28.3334L28.3334 11.6667"
            stroke="#0A140E"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </header>
      <div className="contact-card__bottom">
        <div className="contact-card__subtitle">{subtitle}</div>
        <h3 className="contact-card__title">
          {title}
        </h3>
        {isAccent && <div className="contact-card__extra">
          Написать в Telegram
          {/*<svg*/}
          {/*  width="40"*/}
          {/*  height="40"*/}
          {/*  viewBox="0 0 40 40"*/}
          {/*  fill="none"*/}
          {/*  xmlns="http://www.w3.org/2000/svg"*/}
          {/*>*/}
          {/*  <path*/}
          {/*    d="M11.6667 11.6667H28.3334V28.3334"*/}
          {/*    stroke="#0A140E"*/}
          {/*    strokeWidth="3.33333"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*  />*/}
          {/*  <path*/}
          {/*    d="M11.6667 28.3334L28.3334 11.6667"*/}
          {/*    stroke="#0A140E"*/}
          {/*    strokeWidth="3.33333"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*  />*/}
          {/*</svg>*/}
        </div>}
      </div>
    </a>
  )
}

export default ContactCard