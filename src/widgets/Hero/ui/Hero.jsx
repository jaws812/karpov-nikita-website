import css from './Hero.module.scss'
import Button from '@/shared/ui/Button'
import HoverGlowButton from '@/shared/ui/HoverGlowButton'
import { toolsItems } from '../model/heroItems'
import { contacts } from '@/shared/config/contacts'
import clsx from 'clsx'

const Hero = () => {
  return (
    <section className='section' aria-labelledby='hero-title'>
      <div className='container'>
        <div className={css.hero}>
          <h1 className={css.title} id='hero-title'>
            Карпов Никита{' '}
            <span className={css.titleAccent}>frontend-разработчик</span>{' '}
            и&nbsp;верстальщик
          </h1>
          <div className={css.description}>
            Верстаю корпоративные сайты и лендинги по современным стандартам,
            работаю с разными CMS и понимаю, как сайт устроен целиком: хостинг,
            домен, PHP и база данных.
          </div>
          <div className={css.subtitle}>
            Изучаю React и имею опыт работы с разработкой коммерческих сайтов.
          </div>
          <div className={css.location}>
            Россия, Самара &bull; офис или удалённо
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 24 24'
                width='24px'
                height='24px'
              >
                <g id='Outlined'>
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
