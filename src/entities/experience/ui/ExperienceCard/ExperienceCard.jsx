import './ExperienceCard.scss'

const ExperienceCard = (props) => {
  const { timeline, title, organization, description } = props

  return (
    <div className='experience-card'>
      <div className='experience-card__timeline'>{timeline}</div>
      <h3 className='experience-card__title'>{title}</h3>
      <div className='experience-card__organization'>{organization}</div>
      <div className='experience-card__description'>{description}</div>
    </div>
  )
}

export default ExperienceCard
