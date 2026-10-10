import './StackCard.scss'

const StackCard = (props) => {
  const {
    title,
    property,
  } = props

  return (
    <div className="stack-card">
      <div className="stack-card__title">{title}</div>
      <ul className="stack-card__list">
        {property.map(({title, description}) => (
          <li
            className="stack-card__item"
            key={title}
          >
            <div className="stack-card__item-title">{title}</div>
            <div className="stack-card__item-description">{description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StackCard