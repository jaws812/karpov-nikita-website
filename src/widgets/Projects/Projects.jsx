import Section from '@/shared/ui/Section'
import ProjectCard from '@/shared/ui/ProjectCard'
import Grid from '@/shared/ui/Grid'
import { projectItems } from '@/pages/MainPage/model/dataItems'

const Projects = () => {
  return (
    <Section title='Мои работы' stepTitle='03 &bull; Проекты' actionButton>
      <Grid gapClassName='projects-gap'>
        {projectItems.map((item) => (
          <ProjectCard {...item} key={item.count} />
        ))}
      </Grid>
    </Section>
  )
}

export default Projects
