import Section from '@/shared/ui/Section'
import { ProjectCard, projectItems } from '@/entities/project'
import Grid from '@/shared/ui/Grid'
import { contacts } from '@/shared/config/contacts'
import HoverGlowButton from '@/shared/ui/HoverGlowButton'
import Icon from '@/shared/ui/Icon'

const Projects = () => {
  return (
    <Section
      title='Мои работы'
      stepTitle='03 &bull; Проекты'
      id='projects'
      isSectionBodyFlex
    >
      <HoverGlowButton href={contacts.github.link} target='_blank'>
        <div>Все репозитории на GitHub</div>
        <Icon name='arrowTopRight' />
      </HoverGlowButton>
      <Grid gap='md' isFirstWide>
        {projectItems.map((item, index) => (
          <ProjectCard {...item} index={index} key={item.title} />
        ))}
      </Grid>
    </Section>
  )
}

export default Projects
