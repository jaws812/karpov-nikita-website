import css from './ProjectCard.module.scss'
import Icon from '@/shared/ui/Icon'
import { counter } from '@/shared/lib/counter'

const ProjectCard = (props) => {
  const { type, year, title, description, tools, note, links, index } = props

  return (
    <div className={css.projectCard}>
      <header className={css.header}>
        {type} &bull; {year}
      </header>
      <div className={css.wrapper}>
        <div className={css.top}>
          <div className={css.counter}>{counter(index)}</div>
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
                  <Icon name='arrowTopRight' size={16} />
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
