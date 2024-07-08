import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function H2({ children, className }: H2Props) {
  const classes = twMerge('scroll-m-20 text-3xl font-semibold', className)

  return <h2 className={classes}>{children}</h2>
}
