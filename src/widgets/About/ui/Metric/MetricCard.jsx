import './Metric.scss'

const MetricCard = (props) => {
  const { description, subtitle, title } = props
  return (
    <div className='metric__item'>
      <dt className='metric__term'>{description}</dt>
      <dt className='metric__value metric__value--subtitle'>{subtitle}</dt>
      <dd className='metric__value'>{title}</dd>
    </div>
  )
}

export default MetricCard
