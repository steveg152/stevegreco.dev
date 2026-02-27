import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components'
import { buttonClassName, type ButtonVariantProps } from './button'

export interface LinkProps
  extends ButtonVariantProps,
    AriaLinkProps {}

export function LinkButton({
  className,
  variant,
  size,
  children,
  ...props
}: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={buttonClassName({ variant, size, className })}
    >
      {children}
    </AriaLink>
  )
}
