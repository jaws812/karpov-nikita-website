import css from './ProjectCard.module.scss'

const ProjectCard = (props) => {
  const { type, year, title, description, tools, note, links, index } = props

  return (
    <div className={css.projectCard}>
      <header className={css.header}>
        {type} &bull; {year}
      </header>
      <div className={css.wrapper}>
        <div className={css.top}>
          <div className={css.counter}>
            {(index + 1).toString().padStart(2, '0')}
          </div>
          <h3 className={css.title}>{title}</h3>
          <ul className={css.descriptionList}>
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {note && <div className={css.note}>{note}</div>}
        </div>
        <div className={css.bottom}>
          <ul className={css.list}>
            {tools.map((tool) => (
              <li className={css.item} key={tool}>
                {tool}
              </li>
            ))}
          </ul>
          <div className={css.linksWrapper}>
            {links?.length > 0 ? (
              links.map((link) => (
                <a
                  className={css.links}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  key={link.label}
                >
                  {link.label}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 24 24'
                    width='24px'
                    height='24px'
                  >
                    <g>
                      <path
                        style={{
                          fill: 'none',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeMiterlimit: '10',
                        }}
                        d='M20,12v7c0,0.552-0.448,1-1,1H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h7'
                      />
                      <polyline
                        style={{
                          fill: 'none',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeMiterlimit: '10',
                        }}
                        points='20,10 20,4 14,4 '
                      />
                      <line
                        style={{
                          fill: 'none',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          strokeMiterlimit: '10',
                        }}
                        x1='20'
                        y1='4'
                        x2='9'
                        y2='15'
                      />
                    </g>
                  </svg>
                </a>
              ))
            ) : (
              <div className={css.onRequest}>
                Название и ссылка — по запросу
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
