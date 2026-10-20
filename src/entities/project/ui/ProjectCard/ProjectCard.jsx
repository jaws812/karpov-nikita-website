import css from './ProjectCard.module.scss'

const ProjectCard = (props) => {
  const { year, title, subtitle, description, tools, index } = props

  return (
    <div className={css.projectCard}>
      <header className={css.header}>Сайт {year}</header>
      <div className={css.wrapper}>
        <div className={css.counter}>
          {(index + 1).toString().padStart(2, '0')}
        </div>
        <div className={css.title}>{title}</div>
        <div>{subtitle}</div>
        <div className={css.description}>{description}</div>
        <ul className={css.list}>
          {tools.map((tool) => (
            <li className={css.item} key={tool}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
