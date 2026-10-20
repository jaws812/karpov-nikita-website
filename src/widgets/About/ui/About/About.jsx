import css from './About.module.scss'
import Section from '@/shared/ui/Section'
import { infoItems } from '../../model/infoItems'
import { metricItems } from '../../model/metricItems'
import MetricCard from '../Metric/MetricCard'

const About = () => {
  return (
    <Section
      stepTitle='01 &bull; Обо мне'
      title='Разрабатываю сайты на HTML, CSS и JS, работаю на разных CMS'
      id='about'
    >
      <div className={css.about}>
        <div className={css.info}>
          <div>
            <p>
              Закончил ПГУТИ в Самаре — направление «Информатика и
              вычислительная техника». Год с лишним работаю в веб-студии:
              разработка новых сайтов, правки на живых проектах, хостинг и
              поддержка клиентов.
            </p>
            <p>
              Работаю без тяжёлых фреймворков — HTML, CSS/SCSS(Bootstrap),
              JavaScript, БЭМ и js-библиотеки вроде jQuery и Slick Slider. Есть
              опыт с PHP и базами данных. Сейчас активно изучаю разработку
              сайтов на React.
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
