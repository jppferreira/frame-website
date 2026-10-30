import { Link } from 'react-router-dom'
import './Help.css'

const faqs = [
  {
    q: 'Do I need an account?',
    a: 'No. FRAME is designed to work without registration. Projects are stored locally on your device.',
  },
  {
    q: 'Where are my videos stored?',
    a: 'On your phone. FRAME does not run a cloud project library for your footage in V1. Keep original copies of important media.',
  },
  {
    q: 'What can I export?',
    a: 'V1 targets H.264 MP4 with AAC when audio is present, with 720p on Free and 1080p on Pro when the device supports those presets. 4K is not advertised until proven and released.',
  },
  {
    q: 'How do I restore a purchase?',
    a: 'Install FRAME, sign in to the same Apple or Google store account used for the purchase, then tap Restore Purchases in Settings or on the paywall. Purchases do not transfer automatically between iOS and Android.',
  },
  {
    q: 'Export failed or storage is low',
    a: 'Free space on the device, close other apps if the device is under memory pressure, and try again. If a source clip is missing, use Relink media when that flow is available. Contact support if failures persist — you do not need to attach footage by default.',
  },
  {
    q: 'Can I use any song?',
    a: 'Only music you own or have licensed for your intended use. FRAME does not provide a stock music marketplace in V1.',
  },
]

export function Help() {
  return (
    <section className="section page-hero">
      <div className="container">
        <p className="eyebrow">Help</p>
        <h1>Answers for common questions.</h1>
        <p>
          Prefer a form? <Link to="/contact">Contact support</Link> with a bug, general question,
          or feature request. Please do not attach private footage unless we ask.
        </p>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
