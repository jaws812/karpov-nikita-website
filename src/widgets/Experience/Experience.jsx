import './Experience.scss'
import Section from '@/shared/ui/Section'
import Grid from '@/shared/ui/Grid'
import ExperienceCard from '@/shared/ui/ExperienceCard'

const Experience = () => {
  const experienceItems = [
    {
      timeline: '2025 — настоящее время',
      title: 'Frontend-разработчик',
      organization: 'ASM FORWARD MEDIA',
      description:
        'Вёрстка лендингов и многостраничных сайтов по макету по современным ' +
        'стандартам. Поддержка сайтов в рабочем состоянии и доработки на живых проектах.',
    },
    {
      timeline: '2020 — 2024',
      title: 'Информатика и вычислительная техника',
      organization: 'ПГУТИ, Самара — бакалавр',
      description:
        'Программирование и алгоритмы, структуры данных, базы данных и SQL, компьютерные сети\n' +
        'и протоколы, операционные системы, веб-технологии и основы информационной\n' +
        'безопасности.',
    },
  ]

  return (
    <Section title="Путь" stepTitle="04 &bull; Опыт">
      <div className="experience">
        <Grid columns={1} gapClassName="experience-gap">
          {experienceItems.map((experienceItem) => (
            <ExperienceCard {...experienceItem} key={experienceItem.title} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}

export default Experience
