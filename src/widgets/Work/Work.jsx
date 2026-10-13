import './Work.scss'
import Section from '@/shared/ui/Section'
import Grid from '@/shared/ui/Grid'
import WorkCard from '@/shared/ui/WorkCard/WorkCard'

const Work = () => {
  const workSteps = [
    {
      counter: '01',
      title: 'В команде',
      description:
        'Работаю в команде с программистами и дизайнером, помогаю ' +
        'дизайнеру подготовить макет к верстке, с программистами обсуждаем объемные ' +
        'задачи на сайте.',
    },
    {
      counter: '02',
      title: 'С менеджером проектов',
      description:
        'Обсуждаем что возможно реализовать с технической точки зрения и ' +
        'как это лучше сделать с учетом технического задания от заказчика.',
    },
    {
      counter: '03',
      title: 'Код проектов',
      description:
        'Вношу правки на сайтах на разных CMS, улучшаю общую структуру' +
        'кода.',
    },
    {
      counter: '04',
      title: 'До результата',
      description:
        'Создаю рабочие сайты и выполняю задачи так, чтобы разработчику ' +
        'был понятен и удобен для восприятия код.',
    },
  ]

  return (
    <Section title="Не только код" stepTitle="05 &bull; Как я работаю">
      <div className="work">
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
