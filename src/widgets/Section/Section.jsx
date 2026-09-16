import './Section.scss'

const Section = (props) => {
  const {
    children,
    title,
    stepTitle,
  } = props

  return (
    <section className="section">
      <div className="section__wrapper container">
        <div className="section__header">
          <div className="section__step">{stepTitle}</div>
          <h2 className="section__title">{title}</h2>
        </div>
        <div className="section__body">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section