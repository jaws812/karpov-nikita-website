import './Hero.scss'
import Button from "@/shared/ui/Button";

const Hero = (props) => {
  const {} = props

  const toolsItems = ["React", "Git & GitHub", "Figma", "Web Storm"]

  return (
    <section className="section">
      <div className="container">
        <div className="hero">
          <h1 className="hero__title">
            Карпов Никита <span className="hero__title--accent">веб-разработчик</span> и верстальщик
          </h1>
          <div className="hero__description">
            Верстаю корпоративные сайты и лендинги по современным стандартам,
            работаю с разными CMS и понимаю, как сайт устроен целиком: хостинг, домен,
            PHP и база данных.
          </div>
          <div className="hero__subtitle">
            Изучаю React и имею опыт работы с разработкой коммерческих сайтов.
          </div>
          <div className="hero__location">Россия, Самара &bull; офис или удалённо</div>
          <div className="hero__actions">
            <Button
              className="hero__actions-button hero__actions-button--accent"
              isWide
              href='#'
            >
              Резюме
            </Button>
            <Button
              className="hero__actions-button"
              href='https://github.com/jaws812'
              target="_blank"
            >
              <div>GitHub</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <g id="Outlined">
                  <path
                    style={{
                      fill: 'none',
                      'stroke': 'currentColor',
                      strokeWidth: '2',
                      strokeMiterlimit: '10'
                    }}
                    d="M20,12v7c0,0.552-0.448,1-1,1H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h7"
                  />
                  <polyline
                    style={{
                      fill: 'none',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeMiterlimit: '10'
                    }}
                    points="20,10 20,4 14,4 "
                  />
                  <line
                    style={{
                      fill: 'none',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeMiterlimit: '10'
                    }}
                    x1="20"
                    y1="4"
                    x2="9"
                    y2="15"
                  />
                </g>
              </svg>
            </Button>
          </div>
          <div className="hero__tools">
            <ul className="hero__tools-list">
              {toolsItems.map((name) => (
                <li
                  className="hero__tools-item"
                  key={name}
                >{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero