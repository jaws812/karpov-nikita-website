import css from './About.module.scss'
import Section from '@/shared/ui/Section'
import { infoItems } from '../../model/infoItems'
import { metricItems } from '../../model/metricItems'
import MetricCard from '../Metric/MetricCard'

const About = () => {
  return (
    <Section
      stepTitle='01 &bull; Обо мне'
      title='Frontend-разработчик с коммерческим опытом в верстке и CMS'
      id='about'
    >
      <div className={css.about}>
        <div className={css.info}>
          <div>
            <p>
              Окончил ПГУТИ по направлению «Информатика и вычислительная
              техника». С 2025 года работаю frontend-разработчиком в веб-студии:
              верстаю сайты по макетам, интегрирую их в CMS, дорабатываю живые
              проекты.
            </p>
            <p>
              На React пишу собственные проекты: приложение заметок с роутером
              без библиотек и этот сайт с архитектурой по Feature-Sliced Design.
              Код открыт на GitHub.
            </p>
          </div>
          <div className={css.badge}>
            <ul className={css.list}>
              {infoItems.map(({ title, description }) => (
                <li className={css.item} key={title}>
                  <div>{title}</div>
                  <div className={css.itemDescription}>{description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={css.metric}>
          <dl className={css.metricList}>
            {metricItems.map((metricItem) => (
              <MetricCard {...metricItem} key={metricItem.title} />
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

export default About
