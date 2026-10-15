import './Button.scss'

const Button = (props) => {
  const {
    children,
    className = '',
    type = 'button',
    href,
    target,
    isWide,
    disabled,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const specificProps = isLink ? { href, target } : { type, disabled }

  return (
    <Component
      className={`${className} button ${isWide ? 'button--wide' : ''}`}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...specificProps}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
