import './Stack.scss'
import './StackCard.scss'
import Section from "@/widgets/Section";

const Stack = (props) => {
  const {} = props

  const stackItems = [
    {
      title: 'Верстка',
      property: [
        {
          title: 'HTML5',
          description: 'семантика'
        },
        {
          title: 'CSS3',
          description: 'grid, flex'
        },
        {
          title: 'SCSS',
          description: 'БЭМ, миксины'
        },
        {
          title: 'Bootstrap',
          description: 'сетка, компоненты'
        },
      ],
    },
    {
      title: 'СКРИПТЫ',
      property: [
        {
          title: 'JavaScript',
          description: 'ES6+'
        },
        {
          title: 'jQuery',
          description: 'ускорение и упрощение скриптов'
        },
        {
          title: 'Библиотеки',
          description: 'Swiper, Slick'
        },
        {
          title: 'React',
          description: 'в процессе'
        },
      ],
    },
    {
      title: 'БЭКЕНД И CMS',
      property: [
        {
          title: 'PHP',
          description: 'базово'
        },
        {
          title: 'phpMyAdmin',
          description: 'базы данных'
        },
        {
          title: 'CMS',
          description: 'верстка и натягивание сайтов на CMS'
        },
        {
          title: 'Хостинг',
          description: 'домены, управление DNS, VDS'
        },
      ],
    },
    {
      title: 'ИНСТРУМЕНТЫ',
      property: [
        {
          title: 'Git',
          description: 'коммиты, ветки'
        },
        {
          title: 'Vite, Minista',
          description: 'сборка'
        },
        {
          title: 'Figma',
          description: 'работа с макетом'
        },
        {
          title: 'DevTools | React DevTools',
          description: 'отладка'
        },
      ],
    },

  ]

  return (
    <Section
      title="Инструменты, которыми пользуюсь каждый день"
      stepTitle="02 &bull; СТЕК"
    >
      <div className="stack">
        <div className="stack__list">
          {stackItems.map(({title, property}) => (
            <li
              className="stack__item"
              key={title}
            >
              <div className="stack-card">
                <div className="stack-card__title">{title}</div>
                <ul className="stack-card__list">
                  {property.map(({title, description}) => (
                    <li
                      className="stack-card__item"
                      key={title}
                    >
                      <div className="stack-card__item-title">{title}</div>
                      <div className="stack-card__item-description">{description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

        </div>
      </div>
    </Section>
  )
}

export default Stack