import { useEffect, useRef } from 'react'

type ParallaxOptions = {
  /** Multiplier for scroll distance. Positive moves down as you scroll. */
  speed?: number
  /** Optional max translate in px */
  clamp?: number
}

/**
 * Applies a translateY parallax to the element based on window scroll.
 * Disabled when the user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement>({
  speed = 0.25,
  clamp = 120,
}: ParallaxOptions = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const viewH = window.innerHeight || 1
      // 0 when element center is mid-viewport; grows as it moves away
      const offset = (rect.top + rect.height / 2 - viewH / 2) * speed
      const y = Math.max(-clamp, Math.min(clamp, offset))
      node.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      node.style.transform = ''
    }
  }, [speed, clamp])

  return ref
}
