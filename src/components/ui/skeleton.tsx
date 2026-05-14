/* Skeleton Component - A component that displays a skeleton (a component that displays a loading state) - from shadcn/ui (exposes Skeleton) */
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('animate-shimmer rounded-md bg-primary/10', className)} {...props} />
}

export { Skeleton }
