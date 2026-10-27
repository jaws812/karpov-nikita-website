import css from './Metric.module.scss'

const MetricCard = (props) => {
  const { description, subtitle, title } = props
  return (
    <div className={css.item}>
      <dt>{description}</dt>
      <dd className={css.itemDetail}>
        <span className={css.valueSubtitle}>{subtitle}</span>
        <span className={css.value}>{title}</span>
      </dd>
    </div>
  )
}

export default MetricCard
