import css from './StackCard.module.scss'

const StackCard = (props) => {
  const { title, property } = props

  return (
    <div className={css.stackCard}>
      <div className={css.title}>{title}</div>
      <ul className={css.list}>
        {property.map(({ title, description }) => (
          <li className={css.item} key={title}>
            <div className={css.itemTitle}>{title}</div>
            <div className={css.itemDescription}>{description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StackCard
