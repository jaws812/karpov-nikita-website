import css from './WorkCard.module.scss'

const WorkCard = (props) => {
  const { title, description, index } = props

  return (
    <div className={css.workCard}>
      <div className={css.counter}>
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <h3 className='work-card__title'>{title}</h3>
      <div className={css.description}>{description}</div>
    </div>
  )
}

export default WorkCard
