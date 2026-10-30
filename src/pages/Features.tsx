import { Icon3D } from '../components/Icon3D'
import './Features.css'

const features = [
  {
    title: 'Import & timeline',
    body: 'Pick clips, then trim, split, reorder and scrub with real media time.',
    icon: '/icons/icon-clips-3d.jpg',
  },
  {
    title: 'Aspect ratios',
    body: '9:16 for short-form, plus 1:1 and 16:9 when the story needs it.',
    icon: '/icons/icon-ratio-3d.jpg',
  },
  {
    title: 'Readable titles',
    body: 'Timed overlays in safe bounds — burned into the export, not just preview.',
    icon: '/icons/icon-titles-3d.jpg',
  },
  {
    title: 'Your soundtrack',
    body: 'Import licensed music, preview the mix, adjust volume or mute clip audio.',
    icon: '/icons/icon-audio-3d.jpg',
  },
  {
    title: 'Honest export',
    body: 'H.264 MP4 with real progress, cancel, and the system share sheet.',
    icon: '/icons/icon-export-3d.jpg',
  },
  {
    title: 'Projects that resume',
    body: 'Local drafts autosave. Duplicate, rename or delete when you are ready.',
    icon: '/icons/icon-projects-3d.jpg',
  },
]

export function Features() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="features-intro">
          <Icon3D src="/icons/icon-edit-3d.jpg" size="lg" />
          <div>
            <p className="eyebrow">Features</p>
            <h1>Finish a short video.</h1>
            <p>Hard cuts, titles, local audio, export — no unfinished effect catalogue.</p>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-item">
              <Icon3D src={feature.icon} size="md" />
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
