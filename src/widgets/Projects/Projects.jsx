import Section from '@/shared/ui/Section'
import { ProjectCard, projectItems } from '@/entities/project'
import Grid from '@/shared/ui/Grid'
import { contacts } from '@/shared/config/contacts'

const Projects = () => {
  return (
    <Section
      title='Мои работы'
      stepTitle='03 &bull; Проекты'
      actionButton
      href={contacts.github.link}
      id='projects'
    >
      <Grid gapClassName='projects-gap'>
        {projectItems.map((item, index) => (
          <ProjectCard {...item} index={index} key={item.title} />
        ))}
      </Grid>
    </Section>
  )
}

export default Projects
