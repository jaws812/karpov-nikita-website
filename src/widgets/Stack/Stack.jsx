import './Stack.scss'
import Section from "@/shared/ui/Section";
import StackCard from "@/shared/ui/StackCard";
import Grid from "@/shared/ui/Grid";

const Stack = () => {
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
      title: 'Скрипты',
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
      title: 'Бэкэнд и CMS',
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
      title: 'Инструменты',
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
      <Grid>
        {stackItems.map((stackItem) => (
          <StackCard {...stackItem} key={stackItem.title} />
        ))}
      </Grid>
    </Section>
  )
}

export default Stack