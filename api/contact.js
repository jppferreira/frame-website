const TOPIC_LABELS = {
  bug: 'Bug report',
  general: 'General',
  feature: 'Feature request',
}

function badRequest(res, error) {
  return res.status(400).json({ error })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const topic = String(body.topic || '').trim()
  const message = String(body.message || '').trim()

  if (!name || name.length > 120) {
    return badRequest(res, 'Please enter your name.')
  }
  if (!email || email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest(res, 'Please enter a valid email address.')
  }
  if (!['bug', 'general', 'feature'].includes(topic)) {
    return badRequest(res, 'Please choose Bug report, General, or Feature request.')
  }
  if (!message || message.length > 5000) {
    return badRequest(res, 'Please enter a message.')
  }

  const topicLabel = TOPIC_LABELS[topic]
  const formspreeId = process.env.FORMSPREE_ID
  const resendKey = process.env.RESEND_API_KEY
  const inbox = process.env.CONTACT_TO_EMAIL

  try {
    if (formspreeId) {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          topic: topicLabel,
          message,
          _subject: `[FRAME ${topicLabel}] ${name}`,
        }),
      })

      if (!response.ok) {
        return res.status(502).json({ error: 'Delivery failed. Please try again shortly.' })
      }

      return res.status(200).json({ ok: true })
    }

    if (resendKey && inbox) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'FRAME Contact <onboarding@resend.dev>',
          to: [inbox],
          reply_to: email,
          subject: `[FRAME ${topicLabel}] ${name}`,
          text: [
            `Topic: ${topicLabel}`,
            `From: ${name} <${email}>`,
            '',
            message,
          ].join('\n'),
        }),
      })

      if (!response.ok) {
        return res.status(502).json({ error: 'Delivery failed. Please try again shortly.' })
      }

      return res.status(200).json({ ok: true })
    }

    // Local / unconfigured fallback: accept the payload so the UI can be tested,
    // but do not claim delivery succeeded in production without a provider.
    if (process.env.NODE_ENV !== 'production' || process.env.CONTACT_DRY_RUN === '1') {
      console.info('[contact]', { topic: topicLabel, name, email, message })
      return res.status(200).json({ ok: true, dryRun: true })
    }

    return res.status(503).json({
      error: 'Contact delivery is not configured yet. Please try again later.',
    })
  } catch {
    return res.status(500).json({ error: 'Unexpected error sending your message.' })
  }
}
