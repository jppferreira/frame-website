import { Link } from 'react-router-dom'
import './Pricing.css'

const freeItems = [
  'Local projects with no account',
  'Import, trim, split, reorder',
  'Titles and local soundtrack',
  '720p export when the device supports it',
]

const proItems = [
  '1080p export',
  'Additional title and visual presets',
  'Export convenience options as they ship',
  'Restore purchases on the same store account',
]

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '£0',
    period: 'forever',
    lead: 'Core editing without signup.',
    items: freeItems,
    accent: false,
  },
  {
    id: 'monthly',
    name: 'Pro Monthly',
    price: '£4.99',
    period: 'per month',
    lead: 'Flexible month-to-month Pro.',
    items: proItems,
    accent: false,
  },
  {
    id: 'annual',
    name: 'Pro Annual',
    price: '£29.99',
    period: 'per year',
    lead: 'Best value — about £2.50/month.',
    items: proItems,
    accent: true,
    badge: 'Best value',
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '£59.99',
    period: 'one-time',
    lead: 'Optional unlock — may ship after review.',
    items: [
      ...proItems,
      'Keep purchased Pro features if subscriptions evolve',
    ],
    accent: false,
  },
] as const

export function Pricing() {
  return (
    <section className="section page-hero">
      <div className="container">
        <p className="eyebrow">Pricing</p>
        <h1>Free to edit. Pro when you need more.</h1>
        <p>
          Working UK prices for App Store and Google Play. The amount shown in the app at purchase
          time is always the store&apos;s live localised price.
        </p>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`plan${plan.accent ? ' plan-pro' : ''}`}
            >
              {'badge' in plan && plan.badge ? (
                <p className="plan-badge">{plan.badge}</p>
              ) : null}
              <h2>{plan.name}</h2>
              <p className="plan-price">
                <span className="plan-amount">{plan.price}</span>
                <span className="plan-period">{plan.period}</span>
              </p>
              <p className="plan-lead">{plan.lead}</p>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {plan.id === 'annual' || plan.id === 'monthly' ? (
                <p className="plan-note">
                  Auto-renews until you cancel in your Apple ID or Google Play subscription
                  settings. Pro stays active through the paid period after cancellation.
                </p>
              ) : null}
              {plan.id === 'lifetime' ? (
                <p className="plan-note">
                  Lifetime is optional and may launch after store behaviour and long-term economics
                  are reviewed. Not required to use monthly or annual Pro.
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="pricing-fineprint prose">
          <p>
            Purchases on iOS and Android do not automatically transfer between stores. Use Restore
            Purchases after reinstalling on the same platform store account. See{' '}
            <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy</Link> for details.
          </p>
        </div>
      </div>
    </section>
  )
}
