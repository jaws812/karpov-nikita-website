import css from './Button.module.scss'
import clsx from 'clsx'

const Button = (props) => {
  const {
    children,
    className,
    type = 'button',
    href,
    target,
    isWide,
    isSmall,
    disabled,
    ...rest
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const specificProps = isLink ? { href, target } : { type, disabled }

  return (
    <Component
      className={clsx(
        css.button,
        className,
        isWide && css.buttonWide,
        isSmall && css.buttonSmall,
      )}
      {...specificProps}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
