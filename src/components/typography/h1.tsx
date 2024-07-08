import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export function H1({ children, className }: H1Props) {
  const classes = twMerge('scroll-m-20 text-6xl font-bold', className)

  return <h1 className={classes}>{children}</h1>
}
