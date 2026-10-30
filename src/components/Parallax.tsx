import type { CSSProperties, ReactNode } from 'react'
import { useParallax } from '../hooks/useParallax'
import './Parallax.css'

type ParallaxProps = {
  children: ReactNode
  className?: string
  speed?: number
  clamp?: number
  style?: CSSProperties
}

export function Parallax({
  children,
  className = '',
  speed = 0.22,
  clamp = 100,
  style,
}: ParallaxProps) {
  const ref = useParallax<HTMLDivElement>({ speed, clamp })

  return (
    <div ref={ref} className={`parallax-layer ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
