import './ProjectCard.scss'

const ProjectCard = (props) => {
  const { year, title, subtitle, description, tools, index } = props

  return (
    <div className='project-card'>
      <header className='project-card__header'>Сайт {year}</header>
      <div className='project-card__wrapper'>
        <div className='project-card__counter'>
          {(index + 1).toString().padStart(2, '0')}
        </div>
        <div className='project-card__title'>{title}</div>
        <div className='project-card__subtitle'>{subtitle}</div>
        <div className='project-card__description'>{description}</div>
        <div className='project-card__tools'>
          <ul className='project-card__list'>
            {tools.map((tool) => (
              <li className='project-card__item' key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
