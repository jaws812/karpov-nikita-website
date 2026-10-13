import './WorkCard.scss'

const WorkCard = (props) => {
  const { counter, title, description } = props

  return (
    <div className='work-card'>
      <div className='work-card__counter'>{counter}</div>
      <h3 className='work-card__title'>{title}</h3>
      <div className='work-card__description'>{description}</div>
    </div>
  )
}

export default WorkCard
