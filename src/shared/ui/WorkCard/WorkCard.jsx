import css from './WorkCard.module.scss'
import { counter } from '@/shared/lib/counter'

const WorkCard = (props) => {
  const { title, description, index } = props

  return (
    <div className={css.workCard}>
      <div className={css.counter}>{counter(index)}</div>
      <h3 className={css.title}>{title}</h3>
      <div className={css.description}>{description}</div>
    </div>
  )
}

export default WorkCard
