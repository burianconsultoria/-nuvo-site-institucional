import { cn } from '@/lib/utils'

export function ChaosToOrderPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none opacity-[0.15] flex items-center justify-center overflow-hidden mix-blend-screen text-white',
        className,
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <path
          d="M-200,400 C100,100 400,700 1600,400"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M-200,500 C200,800 600,200 1600,500"
          fill="none"
          stroke="hsl(var(--support))"
          strokeWidth="1.5"
        />
        <path
          d="M0,450 L1440,450"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  )
}
