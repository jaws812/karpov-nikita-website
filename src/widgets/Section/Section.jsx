import './Section.scss'
import Button from "@/shared/ui/Button";

const Section = (props) => {
  const {
    children,
    title,
    stepTitle,
    actionButton,
  } = props

  return (
    <section className="section">
      <div className="section__wrapper container">
        <div className="section__header">
          <div className="section__step">{stepTitle}</div>
          <h2 className="section__title">{title}</h2>
          {actionButton && (
            <Button
              className="section__button"
              href='https://github.com/jaws812'
              target="_blank"
            >
              <div>Все репозитории на GitHub</div>
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
          )}
        </div>
        <div className="section__body">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section