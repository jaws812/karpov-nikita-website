import './Hero.scss'
import Button from '@/shared/ui/Button'
import HoverGlowButton from '@/shared/ui/HoverGlowButton'
import { toolsItems } from '@/widgets/Hero'
import { contacts } from '@/shared/config/contacts'

const Hero = () => {
  return (
    <section className='section' aria-labelledby='hero-title'>
      <div className='container'>
        <div className='hero'>
          <h1 className='hero__title' id='hero-title'>
            Карпов Никита{' '}
            <span className='hero__title--accent'>frontend-разработчик</span>{' '}
            и&nbsp;верстальщик
          </h1>
          <div className='hero__description'>
            Верстаю корпоративные сайты и лендинги по современным стандартам,
            работаю с разными CMS и понимаю, как сайт устроен целиком: хостинг,
            домен, PHP и база данных.
          </div>
          <div className='hero__subtitle'>
            Изучаю React и имею опыт работы с разработкой коммерческих сайтов.
          </div>
          <div className='hero__location'>
            Россия, Самара &bull; офис или удалённо
          </div>
          <div className='hero__actions'>
            <Button
              className='hero__actions-button hero__actions-button--accent'
              isWide
              href='#'
            >
              Резюме
            </Button>
            <HoverGlowButton
              className='hero__actions-button'
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
          <div className='hero__tools'>
            <ul className='hero__tools-list'>
              {toolsItems.map((name) => (
                <li className='hero__tools-item' key={name}>
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
