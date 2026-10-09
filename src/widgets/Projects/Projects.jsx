import './Projects.scss'
import Section from "@/shared/ui/Section";
import ProjectCard from "@/shared/ui/ProjectCard";


const Projects = () => {
  const projectItems = [
    {
      year: '2026',
      count: '01',
      title: 'Заголовок моковый',
      subtitle: 'Вёрстка, адаптив',
      description: 'Многостраничный сайт для записи на медицинские услуги',
      tools: ['HTML', 'CSS', 'JS', 'PHP'],
    },
    {
      year: '2026',
      count: '02',
      title: 'Заголовок моковый',
      subtitle: 'Вёрстка, адаптив',
      description: 'Многостраничный сайт для записи на медицинские услуги',
      tools: ['HTML', 'CSS', 'JS', 'PHP'],
    },
    {
      year: '2025',
      count: '03',
      title: 'Заголовок моковый',
      subtitle: 'Вёрстка, адаптив',
      description: 'Многостраничный сайт для записи на медицинские услуги',
      tools: ['HTML', 'CSS', 'JS', 'PHP'],
    },
    {
      year: '2025',
      count: '04',
      title: 'Заголовок моковый',
      subtitle: 'Вёрстка, адаптив',
      description: 'Многостраничный сайт для записи на медицинские услуги',
      tools: ['HTML', 'CSS', 'JS', 'PHP'],
    },
  ]

  return (
    <Section
      title="Мои работы"
      stepTitle="03 &bull; ПРОЕКТЫ"
      actionButton
    >
      <div className="projects">
        {projectItems.map((item) => (
          <ProjectCard
            {...item}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects