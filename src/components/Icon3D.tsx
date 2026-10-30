import './Icon3D.css'

type Icon3DProps = {
  src: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Icon3D({ src, label, size = 'md' }: Icon3DProps) {
  return (
    <span className={`icon-3d icon-3d-${size}`} aria-hidden={label ? undefined : true}>
      <img src={src} alt={label ?? ''} width={160} height={160} />
    </span>
  )
}
