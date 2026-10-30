import { Link } from 'react-router-dom'
import { FrameMark } from '../components/FrameMark'
import { HeroVisual } from '../components/HeroVisual'
import { Icon3D } from '../components/Icon3D'
import { Parallax } from '../components/Parallax'
import './Home.css'

const pillars = [
  {
    title: 'Edit on your phone',
    body: 'Trim, split, rearrange — then export a real MP4.',
    icon: '/icons/icon-edit-3d.jpg',
  },
  {
    title: 'Private by default',
    body: 'No account. No cloud library. No ad SDKs.',
    icon: '/icons/icon-privacy-3d.jpg',
  },
  {
    title: 'Fast path to export',
    body: 'Open, edit, share — without a paywall wall.',
    icon: '/icons/icon-export-3d.jpg',
  },
]

const snapshots = [
  { label: 'Clips', icon: '/icons/icon-clips-3d.jpg' },
  { label: 'Titles', icon: '/icons/icon-titles-3d.jpg' },
  { label: 'Audio', icon: '/icons/icon-audio-3d.jpg' },
  { label: 'Ratios', icon: '/icons/icon-ratio-3d.jpg' },
  { label: 'Projects', icon: '/icons/icon-projects-3d.jpg' },
  { label: 'Export', icon: '/icons/icon-export-3d.jpg' },
]

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Parallax className="hero-parallax-bg" speed={0.35} clamp={160}>
            <div className="hero-wash-orb hero-wash-orb-a" />
            <div className="hero-wash-orb hero-wash-orb-b" />
          </Parallax>
          <Parallax className="hero-parallax-grid" speed={0.12} clamp={60}>
            <div className="hero-grain" />
          </Parallax>
          <div className="hero-wash" />
        </div>

        <div className="container hero-layout">
          <Parallax className="hero-content" speed={-0.08} clamp={40}>
            <div className="hero-brand fade-up">
              <FrameMark size="lg" />
              <span>FRAME</span>
            </div>
            <h1 className="fade-up fade-up-delay-1">Make brilliant short videos in minutes.</h1>
            <p className="hero-lead fade-up fade-up-delay-2">Your footage stays on your phone.</p>
            <div className="hero-actions fade-up fade-up-delay-3">
              <a className="btn btn-primary" href="#download">
                Coming to iOS & Android
              </a>
              <Link className="btn btn-ghost" to="/features">
                See features
              </Link>
            </div>
          </Parallax>

          <Parallax className="hero-preview fade-up fade-up-delay-2" speed={0.18} clamp={80}>
            <HeroVisual />
          </Parallax>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div aria-label="FRAME capabilities">
            <Parallax className="snapshot-row" speed={0.1} clamp={36}>
              {snapshots.map((item) => (
                <div key={item.label} className="snapshot-item">
                  <Icon3D src={item.icon} size="md" />
                  <span>{item.label}</span>
                </div>
              ))}
            </Parallax>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Parallax className="section-head section-head-center" speed={0.06} clamp={28}>
            <p className="eyebrow">Why FRAME</p>
            <h2>A narrower editor, done properly.</h2>
          </Parallax>

          <div className="pillar-list">
            {pillars.map((item, index) => (
              <Parallax key={item.title} speed={0.08 + index * 0.03} clamp={48}>
                <article className="pillar">
                  <Icon3D src={item.icon} size="lg" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight privacy-band">
        <Parallax className="container privacy-band-inner" speed={0.12} clamp={50}>
          <Icon3D src="/icons/icon-privacy-3d.jpg" size="lg" />
          <div>
            <p className="eyebrow">Privacy-first</p>
            <h2>Editing stays on your device.</h2>
            <p>No registration. No FRAME cloud for your footage.</p>
          </div>
          <Link to="/privacy" className="btn btn-ghost">
            Privacy policy
          </Link>
        </Parallax>
      </section>

      <section className="section" id="download">
        <div className="container">
          <Parallax className="download-panel" speed={0.1} clamp={44}>
            <div className="download-visual">
              <Icon3D src="/icons/icon-export-3d.jpg" size="lg" />
            </div>
            <div>
              <p className="eyebrow">Availability</p>
              <h2>App Store & Google Play — soon.</h2>
              <p>Links go live after functional testing.</p>
              <div className="download-actions">
                <Link to="/pricing" className="btn btn-primary">
                  View pricing
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  Contact
                </Link>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </>
  )
}
