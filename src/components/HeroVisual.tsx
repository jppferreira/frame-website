import { asset } from '../lib/asset'
import { FrameMark } from './FrameMark'
import './HeroVisual.css'

const satellites = [
  { src: asset('icons/icon-edit-3d.jpg'), alt: '', className: 'sat-edit' },
  { src: asset('icons/icon-privacy-3d.jpg'), alt: '', className: 'sat-privacy' },
  { src: asset('icons/icon-export-3d.jpg'), alt: '', className: 'sat-export' },
  { src: asset('icons/icon-clips-3d.jpg'), alt: '', className: 'sat-clips' },
]

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual-glow" />
      <div className="hero-visual-mark">
        <FrameMark size="lg" />
      </div>
      {satellites.map((icon) => (
        <img
          key={icon.className}
          className={`hero-sat ${icon.className}`}
          src={icon.src}
          alt={icon.alt}
          width={160}
          height={160}
        />
      ))}
    </div>
  )
}
