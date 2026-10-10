import type { AnchorHTMLAttributes, ReactNode } from 'react'

type PixelButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
  variant?: 'green' | 'stone' | 'purple'
}

export function PixelButton({
  href,
  children,
  variant = 'green',
  className = '',
  ...props
}: PixelButtonProps) {
  return (
    <a className={`pixel-button pixel-button--${variant} ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  )
}
