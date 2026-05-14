/* Badge Component primitives - A component that displays a badge - from shadcn/ui (exposes Badge, badgeVariants) */
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-primary/20 bg-product-diag-light text-primary hover:bg-primary/10',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        diag: 'border-product-diag/20 bg-product-diag/5 text-product-diag hover:bg-product-diag/10',
        ai: 'border-product-ai/20 bg-product-ai/5 text-product-ai hover:bg-product-ai/10',
        auto: 'border-product-auto/20 bg-product-auto/5 text-product-auto hover:bg-product-auto/10',
        crm: 'border-product-crm/20 bg-product-crm/5 text-product-crm hover:bg-product-crm/10',
        sys: 'border-product-sys/20 bg-product-sys/5 text-product-sys hover:bg-product-sys/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
