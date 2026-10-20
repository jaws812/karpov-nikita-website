import css from './ExperienceCard.module.scss'

const ExperienceCard = (props) => {
  const { timeline, title, organization, description } = props

  return (
    <div className={css.experienceCard}>
      <div className={css.timeline}>{timeline}</div>
      <h3 className={css.title}>{title}</h3>
      <div className={css.organization}>{organization}</div>
      <div className={css.description}>{description}</div>
    </div>
  )
}

export default ExperienceCard
