import css from './Metric.module.scss'
import clsx from 'clsx'

const MetricCard = (props) => {
  const { description, subtitle, title } = props
  return (
    <div className={css.item}>
      <dt>{description}</dt>
      <dt className={clsx(css.value, css.valueSubtitle)}>{subtitle}</dt>
      <dd className={css.value}>{title}</dd>
    </div>
  )
}

export default MetricCard
