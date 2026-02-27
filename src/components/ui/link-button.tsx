import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from 'react-aria-components'
import { buttonVariants } from './button'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export interface LinkProps
  extends VariantProps<typeof buttonVariants>,
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
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </AriaLink>
  )
}
