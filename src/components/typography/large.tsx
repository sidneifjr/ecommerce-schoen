import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface LargeProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function Large({ children, className }: LargeProps) {
  const classes = twMerge(
    'scroll-m-20 text-4xl font-bold text-black-200',
    className,
  )

  return <p className={classes}>{children}</p>
}
