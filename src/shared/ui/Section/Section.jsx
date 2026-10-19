import './Section.scss'
import clsx from 'clsx'

const Section = (props) => {
  const { children, title, stepTitle, id, isSectionBodyFlex } = props

  return (
    <section className='section' id={id} aria-labelledby={`${id}-title`}>
      <div className='section__wrapper container'>
        <div className='section__header'>
          <div className='section__step'>{stepTitle}</div>
          <h2 className='section__title' id={`${id}-title`}>
            {title}
          </h2>
        </div>
        <div
          className={clsx(
            'section__body',
            isSectionBodyFlex && 'section__body--flex',
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
