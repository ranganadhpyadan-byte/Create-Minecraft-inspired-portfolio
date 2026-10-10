import type { HTMLAttributes, ReactNode } from 'react'

type PixelCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  as?: 'article' | 'div' | 'section'
}

export function PixelCard({ children, as: Element = 'article', className = '', ...props }: PixelCardProps) {
  return (
    <Element className={`pixel-card ${className}`.trim()} {...props}>
      {children}
    </Element>
  )
}
