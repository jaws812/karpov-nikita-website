import css from './Section.module.scss'
import clsx from 'clsx'

const Section = (props) => {
  const { children, title, stepTitle, id, isSectionBodyFlex } = props

  return (
    <section className='section' id={id} aria-labelledby={`${id}-title`}>
      <div className={`${css.wrapper} container`}>
        <div className={css.header}>
          <div className={css.step}>{stepTitle}</div>
          <h2 className={css.title} id={`${id}-title`}>
            {title}
          </h2>
        </div>
        <div className={clsx(isSectionBodyFlex && css.bodyFlex)}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
