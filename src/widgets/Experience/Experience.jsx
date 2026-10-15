import './Experience.scss'
import Section from '@/shared/ui/Section'
import Grid from '@/shared/ui/Grid'
import { ExperienceCard, experienceItems } from '@/entities/experience'

const Experience = () => {
  return (
    <Section title='Путь' stepTitle='04 &bull; Опыт' id='experience'>
      <div className='experience'>
        <Grid columns={1} gapClassName='experience-gap'>
          {experienceItems.map((experienceItem) => (
            <ExperienceCard {...experienceItem} key={experienceItem.title} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}

export default Experience
