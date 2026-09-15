import './About.scss'
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

  return (
    <Section
      stepTitle="01 &bull; Обо мне"
      title="Разрабатываю сайты на HTML, CSS и JS, работаю на разных CMS"
    >
      <div className="about">
        <div className="about__description">
          <p>Закончил ПГУТИ в Самаре — направление «Информатика и
            вычислительная техника». Год с лишним работаю в веб-студии: разработка
            новых сайтов, правки на живых проектах, хостинг и поддержка клиентов.
          </p>
          <p>Работаю без тяжёлых фреймворков — HTML, CSS/SCSS, JavaScript, БЭМ
            и js-библиотеки вроде jQuery и Slick Slider. Есть опыт с PHP и
            базами данных через phpMyAdmin. Сейчас активно изуючаю разработку
            сайтов на React.
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
    </Section>
  )
}

export default About