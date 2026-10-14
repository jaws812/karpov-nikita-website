import Section from '@/shared/ui/Section'
import ProjectCard from '@/entities/projects'
import Grid from '@/shared/ui/Grid'
import { projectItems } from '@/entities/projects/model/projects'

const Projects = () => {
  return (
    <Section title='Мои работы' stepTitle='03 &bull; Проекты' actionButton>
      <Grid gapClassName='projects-gap'>
        {projectItems.map((item, index) => (
          <ProjectCard {...item} index={index} key={item.count} />
        ))}
      </Grid>
    </Section>
  )
}

export default Projects
