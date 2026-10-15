import Section from '@/shared/ui/Section'
import { StackCard, stackItems } from '@/entities/stack'
import Grid from '@/shared/ui/Grid'

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
