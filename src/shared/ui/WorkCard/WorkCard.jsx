import './WorkCard.scss'

const WorkCard = (props) => {
  const { title, description, index } = props

  return (
    <div className='work-card'>
      <div className='work-card__counter'>
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <h3 className='work-card__title'>{title}</h3>
      <div className='work-card__description'>{description}</div>
    </div>
  )
}

export default WorkCard
