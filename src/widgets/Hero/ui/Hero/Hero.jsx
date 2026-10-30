import css from './Hero.module.scss'
import Button from '@/shared/ui/Button'
import HoverGlowButton from '@/shared/ui/HoverGlowButton'
import { toolsItems } from '../../model/heroItems'
import { contacts } from '@/shared/config/contacts'
import clsx from 'clsx'
import Icon from '@/shared/ui/Icon'
import HeroBackground from '../HeroBackground/HeroBackground'

const Hero = () => {
  return (
    <section
      className={clsx('section', css.section)}
      aria-labelledby='hero-title'
    >
      <HeroBackground />
      <div className='container'>
        <div className={css.hero}>
          <h1 className={css.title} id='hero-title'>
            Карпов Никита{' '}
            <span className={css.titleAccent}>frontend-разработчик</span>
          </h1>
          <div className={css.description}>
            Делаю коммерческие сайты: верстка по макетам, адаптив, интеграция в
            CMS, ускорение загрузки. На React пишу собственные проекты — этот
            сайт один из них.
          </div>
          <div className={css.subtitle}>
            Понимаю, как сайт устроен целиком: от макета в Figma до хостинга,
            домена и сервера.
          </div>
          <div className={css.location}>
            Россия, Самара &bull; офис или удаленно
          </div>
          <div className={css.actions}>
            <Button
              className={clsx(css.actionsButton, css.actionsButtonAccent)}
              isWide
              href='#'
            >
              Резюме
            </Button>
            <HoverGlowButton
              className={css.actionsButton}
              href={contacts.github.link}
              target='_blank'
            >
              <div>GitHub</div>
              <Icon name='arrowTopRight' />
            </HoverGlowButton>
          </div>
          <div className={css.tools}>
            <ul className={css.toolsList}>
              {toolsItems.map((name) => (
                <li className={css.toolsItem} key={name}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
