import Section from '@/shared/ui/Section'
import { ProjectCard, projectItems } from '@/entities/project'
import Grid from '@/shared/ui/Grid'
import { contacts } from '@/shared/config/contacts'
import HoverGlowButton from '@/shared/ui/HoverGlowButton'

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 24 24'
          width='24px'
          height='24px'
        >
          <g>
            <path
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeMiterlimit: '10',
              }}
              d='M20,12v7c0,0.552-0.448,1-1,1H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h7'
            />
            <polyline
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeMiterlimit: '10',
              }}
              points='20,10 20,4 14,4 '
            />
            <line
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeMiterlimit: '10',
              }}
              x1='20'
              y1='4'
              x2='9'
              y2='15'
            />
          </g>
        </svg>
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
