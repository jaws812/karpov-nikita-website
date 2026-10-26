import clsx from 'clsx'
import css from './GlassCard.module.scss'

const ULogo = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.667 31.69' {...props}>
    <path d='M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z' />
    <path
      d='M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z'
      transform='translate(-45.91 0)'
    />
    <path
      d='M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z'
      transform='translate(0 -51.963)'
    />
  </svg>
)

const ChevronDown = ({
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    {...props}
  >
    <path d='m6 9 6 6 6-6' />
  </svg>
)

const SOCIALS = [
  {
    icon: (props) => (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        {...props}
      >
        <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
        <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
      </svg>
    ),
    delay: '400ms',
  },
  {
    icon: (props) => (
      <svg viewBox='0 0 24 24' fill='currentColor' {...props}>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
      </svg>
    ),
    delay: '600ms',
  },
  {
    icon: (props) => (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        {...props}
      >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    ),
    delay: '800ms',
  },
]

const CIRCLES = [
  { size: '170px', pos: '8px', z: '20px', delay: '0s' },
  { size: '140px', pos: '10px', z: '40px', delay: '0.4s' },
  { size: '110px', pos: '17px', z: '60px', delay: '0.8s' },
  { size: '80px', pos: '23px', z: '80px', delay: '1.2s' },
]

const GlassCard = (props) => {
  const { className, ref, ...rest } = props
  return (
    <div ref={ref} className={clsx(css.wrapper, className)} {...rest}>
      <div className={css.glassCard}>
        <div className={css.border} />
        <div className={css.content}>
          <span className={css.title}>Monochrome</span>
          <span className={css.desc}>
            Create, share, and use beautiful custom elements made with CSS.
          </span>
        </div>
        <div className={css.footer}>
          <div className={css.socialList}>
            {SOCIALS.map(({ icon: Icon, delay }, index) => (
              <button
                key={index}
                type='button'
                className={css.socialBtn}
                style={{ transitionDelay: delay }}
              >
                <Icon />
              </button>
            ))}
          </div>
          <div className={css.viewMore}>
            <button type='button' className={css.viewMoreBtn}>
              View more
            </button>
            <ChevronDown strokeWidth={3} />
          </div>
        </div>
        <div className={css.circles}>
          {CIRCLES.map((c, index) => (
            <div
              key={index}
              className={css.circle}
              style={{
                width: c.size,
                top: c.pos,
                right: c.pos,
                transform: `translate3d(0, 0, ${c.z})`,
                transitionDelay: c.delay,
              }}
            />
          ))}
          <div className={css.logoCircle}>
            <ULogo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlassCard
