import Section from '@/shared/ui/Section'
import Grid from '@/shared/ui/Grid'
import WorkCard from '@/shared/ui/WorkCard'
import { workSteps } from '@/widgets/Work/model/workSteps'

const Work = () => {
  return (
    <Section title='Не только код' stepTitle='05 &bull; Как я работаю'>
      <div className='work'>
        <Grid columns={4}>
          {workSteps.map((workStep, index) => (
            <WorkCard {...workStep} index={index} key={workStep.title} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}

export default Work
