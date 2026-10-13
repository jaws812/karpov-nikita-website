import Section from '@/shared/ui/Section'
import Grid from '@/shared/ui/Grid'
import WorkCard from '@/shared/ui/WorkCard/WorkCard'
import { workSteps } from '@/pages/MainPage/model/dataItems'

const Work = () => {
  return (
    <Section title='Не только код' stepTitle='05 &bull; Как я работаю'>
      <div className='work'>
        <Grid columns={4}>
          {workSteps.map((workStep) => (
            <WorkCard {...workStep} key={workStep.counter} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}

export default Work
