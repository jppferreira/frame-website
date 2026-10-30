import { useState } from 'react'
import type { FormEvent } from 'react'
import './Contact.css'

type ContactTopic = 'bug' | 'general' | 'feature'

const topics: { value: ContactTopic; label: string; hint: string }[] = [
  {
    value: 'bug',
    label: 'Bug report',
    hint: 'Something broken, crash, or export failure.',
  },
  {
    value: 'general',
    label: 'General',
    hint: 'Support, privacy, billing, or press.',
  },
  {
    value: 'feature',
    label: 'Feature request',
    hint: 'An idea that would make FRAME better.',
  },
]

function isTopic(value: string): value is ContactTopic {
  return value === 'bug' || value === 'general' || value === 'feature'
}

export function Contact() {
  const [topic, setTopic] = useState<ContactTopic>('general')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const formEl = event.currentTarget

    // Read from the DOM so browser autofill is included (React state can miss it).
    const data = new FormData(formEl)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    const company = String(data.get('company') || '').trim()
    const selectedTopic = String(data.get('topic') || topic).trim()

    if (company) {
      setStatus('sent')
      formEl.reset()
      setTopic('general')
      return
    }

    if (!name) {
      setError('Please enter your name.')
      setStatus('error')
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }
    if (!isTopic(selectedTopic)) {
      setError('Please choose Bug report, General, or Feature request.')
      setStatus('error')
      return
    }
    if (!message) {
      setError('Please enter a message.')
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}api/contact`

      const payload = {
        name,
        email,
        topic: selectedTopic,
        message,
        ...(formspreeId
          ? {
              _subject: `[FRAME ${selectedTopic}] ${name}`,
            }
          : {}),
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || 'Could not send your message. Please try again.')
      }

      setStatus('sent')
      formEl.reset()
      setTopic('general')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not send your message.')
    }
  }

  return (
    <section className="section page-hero">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch.</h1>
        <p>
          Send a bug report, general question, or feature request. We do not show a public inbox on
          this site, and we do not automatically collect your footage.
        </p>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <fieldset className="topic-fieldset">
              <legend>What is this about?</legend>
              <div className="topic-grid" role="radiogroup" aria-label="Message type">
                {topics.map((item) => (
                  <label
                    key={item.value}
                    className={`topic-card ${topic === item.value ? 'is-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={item.value}
                      checked={topic === item.value}
                      onChange={() => setTopic(item.value)}
                    />
                    <span className="topic-label">{item.label}</span>
                    <span className="topic-hint">{item.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder={
                  topic === 'bug'
                    ? 'Device, OS version, and steps to reproduce…'
                    : topic === 'feature'
                      ? 'What would you like FRAME to do?'
                      : 'How can we help?'
                }
                required
              />
            </label>

            <label className="hp" aria-hidden="true">
              Company
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </label>

            {status === 'sent' ? (
              <p className="form-success" role="status">
                Thanks — your message is on its way.
              </p>
            ) : null}
            {status === 'error' && error ? (
              <p className="form-error" role="alert">
                {error}
              </p>
            ) : null}

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <aside className="contact-tips">
            <h2>Before you send</h2>
            <ul>
              <li>For bugs, include device model and OS version.</li>
              <li>Describe steps to reproduce — no private video by default.</li>
              <li>For billing, mention Apple or Google and the approximate purchase date.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
