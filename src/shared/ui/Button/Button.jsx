import './Button.scss'

const Button = (props) => {
  const {
    children,
    className = '',
    type = 'button',
    href,
    target,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href, target}
  const buttonProps = {type}
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component
      className={`${className} button`}
      {...specificProps}
    >
      {children}
    </Component>
  )
}

export default Button