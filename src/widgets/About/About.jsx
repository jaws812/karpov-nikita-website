import './About.scss'
import './Metric.scss'
import Section from "@/widgets/Section";

const About = (props) => {
  const {} = props

  const infoItems = [
    {
      title: "Город",
      description: "Россия, Самара",
    },
    {
      title: "Формат",
      description: "офис / удалённо",
    },
    {
      title: "Образование",
      description: "ПГУТИ, 2024",
    },
    {
      title: "Сейчас",
      description: "Фронтенд-разработчик сайтов на CMS",
    },
    {
      title: "Учу",
      description: "React, TypeScript",
    },
  ]

  const metricItems = [
    {
      title: '1+',
      subtitle: 'год',
      description: 'разработки сайтов на CMS и вёрстки',
    },
    {
      title: '50+',
      subtitle: 'проектов',
      description: 'лендинги, сайты услуг, правки на живых проектах',
    },
    {
      title: '2024',
      subtitle: 'ПГУТИ',
      description: 'бакалавр, информатика и вычислительная техника',
    },
  ]

  return (
    <Section
      stepTitle="01 &bull; Обо мне"
      title="Разрабатываю сайты на HTML, CSS и JS, работаю на разных CMS"
    >
      <div className="about">
        <div className="about__info">
          <div className="about__description">
            <p>Закончил ПГУТИ в Самаре — направление «Информатика и
              вычислительная техника». Год с лишним работаю в веб-студии: разработка
              новых сайтов, правки на живых проектах, хостинг и поддержка клиентов.
            </p>
            <p>Работаю без тяжёлых фреймворков — HTML, CSS/SCSS(Bootstrap), JavaScript, БЭМ
              и js-библиотеки вроде jQuery и Slick Slider. Есть опыт с PHP и
              базами данных. Сейчас активно изуючаю разработку сайтов на React.
            </p>
          </div>
          <div className="about__badge">
            <ul className="about__list">
              {infoItems.map(({title, description}) => (
                <li
                  className="about__item"
                  key={title}
                >
                  <div className="about__item-title">{title}</div>
                  <div className="about__item-description">{description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about__metric metric">
          <dl className="metric__list">
            {metricItems.map(({title, subtitle, description}) => (
              <div
                className="metric__item"
                key={title}
              >
                <dt className="metric__term">{description}</dt>
                <dt className="metric__value metric__value--subtitle">{subtitle}</dt>
                <dd className="metric__value">{title}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

export default About