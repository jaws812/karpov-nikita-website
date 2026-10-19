import './Button.scss'
import clsx from 'clsx'

const Button = (props) => {
  const {
    children,
    className,
    type = 'button',
    href,
    target,
    isWide,
    disabled,
    ...rest
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const specificProps = isLink ? { href, target } : { type, disabled }

  return (
    <Component
      className={clsx('button', className, isWide && 'button--wide')}
      {...specificProps}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
