import { useState } from 'react'

const serviceOptions = [
  'Short-Form Video Editing (Reels/TikTok/Shorts)',
  'AI Video Creation',
  'Podcast Editing & Production',
  'Photo Retouching & Editing',
  'YouTube / Long-Form Video Editing',
  'Multiple Services / Not Sure',
]

const budgetOptions = ['Under $20', '$20 – $50', '$50 – $100', '$100+', "Let's discuss"]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | loading | success | error
  const [showVal, setShowVal] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.service || !form.message) {
      setShowVal(true)
      return
    }
    setShowVal(false)
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        throw new Error('failed')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="contact-wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-eyebrow">Get In Touch</div>
          <div className="section-title">Let's work together</div>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* SUCCESS */}
        {status === 'success' && (
          <div style={{
            background: 'rgba(139,92,246,0.12)', border: '1px solid var(--violet)',
            borderRadius: 14, padding: 32, textAlign: 'center', marginBottom: 24,
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
              Message Sent!
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>
              Thanks for reaching out. Suman will reply to{' '}
              <span style={{ color: 'var(--violet2)', fontWeight: 600 }}>{form.email}</span>{' '}
              within 24 hours.
            </p>
          </div>
        )}

        {/* ERROR */}
        {status === 'error' && (
          <div style={{
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 14, padding: 20, textAlign: 'center', marginBottom: 24,
            color: '#FCA5A5', fontSize: 14,
          }}>
            ⚠️ Something went wrong. Please email directly at{' '}
            <a href="mailto:purwar.mohak@gmail.com" style={{ color: 'var(--violet2)' }}>
              purwar.mohak@gmail.com
            </a>
          </div>
        )}

        {/* FORM */}
        {status !== 'success' && (
          <div className="contact-card">
            <div className="contact-row">
              <div>
                <label className="field-label">YOUR NAME *</label>
                <input
                  className="field-input"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={update}
                />
              </div>
              <div>
                <label className="field-label">YOUR EMAIL *</label>
                <input
                  className="field-input"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={update}
                />
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label className="field-label">SERVICE NEEDED *</label>
              <select className="field-select" name="service" value={form.service} onChange={update}>
                <option value="">Select a service...</option>
                {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label className="field-label">BUDGET RANGE</label>
              <select className="field-select" name="budget" value={form.budget} onChange={update}>
                <option value="">Select budget...</option>
                {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label className="field-label">YOUR MESSAGE *</label>
              <textarea
                className="field-textarea"
                name="message"
                placeholder="Tell me about your project — what you need, your timeline, and any references..."
                rows={5}
                value={form.message}
                onChange={update}
              />
            </div>

            {showVal && (
              <p style={{ color: '#FCA5A5', fontSize: 13, marginBottom: 16 }}>
                ⚠️ Please fill in all required fields (Name, Email, Service, Message).
              </p>
            )}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', marginTop: 16 }}>
              🔒 Your info is private and never shared. Expect a reply within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
