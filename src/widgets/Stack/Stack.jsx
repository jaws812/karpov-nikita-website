import Section from '@/shared/ui/Section'
import StackCard from '@/shared/ui/StackCard'
import Grid from '@/shared/ui/Grid'
import { stackItems } from '@/pages/MainPage/model/dataItems'

const Stack = () => {
  return (
    <Section
      title='Инструменты, которыми пользуюсь каждый день'
      stepTitle='02 &bull; СТЕК'
    >
      <Grid>
        {stackItems.map((stackItem) => (
          <StackCard {...stackItem} key={stackItem.title} />
        ))}
      </Grid>
    </Section>
  )
}

export default Stack
