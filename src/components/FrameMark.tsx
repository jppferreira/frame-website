import './FrameMark.css'

type FrameMarkProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function FrameMark({ className = '', size = 'sm' }: FrameMarkProps) {
  return (
    <span className={`frame-mark frame-mark-${size} ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0B0D11" />
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="3"
          stroke="#A9FF5A"
          strokeWidth="2"
        />
        <rect x="11" y="11" width="10" height="10" rx="1.5" fill="#A9FF5A" />
      </svg>
    </span>
  )
}
