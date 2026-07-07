const plans = [
  {
    tier: 'Basic',
    price: '10',
    desc: 'Perfect for a single short video or basic photo edit',
    features: ['1 Short-form video (up to 60 sec)', 'Captions + basic cuts', 'Background music', '1 revision round', 'Delivery in 24 hours'],
    btn: 'outline',
    label: 'Order Basic',
  },
  {
    tier: 'Standard',
    price: '30',
    desc: 'Best for creators who need consistent, high-quality content',
    features: ['3 Short-form videos or 1 long-form', 'Animated captions + sound design', 'Color grading + transitions', 'AI enhancement if needed', '3 revision rounds', 'Delivery in 48 hours'],
    btn: 'filled',
    label: 'Order Standard',
    featured: true,
  },
  {
    tier: 'Premium',
    price: '75',
    desc: 'Full-service editing for brands and serious creators',
    features: ['5 videos or full podcast episode', 'AI video creation included', 'Custom intro/outro', 'Motion graphics & text animation', 'Unlimited revisions', 'Priority 24-hour delivery'],
    btn: 'outline',
    label: 'Order Premium',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--bg2)' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="section-eyebrow">Pricing</div>
        <div className="section-title">Simple, transparent packages</div>
        <p className="section-sub" style={{ margin: '0 auto 56px' }}>
          All packages include revisions and fast delivery. No hidden fees.
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.tier} className={`price-card${plan.featured ? ' featured' : ''}`}>
            {plan.featured && <div className="featured-badge">Most Popular</div>}
            <div className="price-tier">{plan.tier}</div>
            <div className="price-amount"><sup>$</sup>{plan.price}</div>
            <p className="price-desc">{plan.desc}</p>
            <ul className="price-features">
              {plan.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a
              href="https://www.fiverr.com/s/99Kk9md"
              target="_blank"
              rel="noreferrer"
              className={`price-btn ${plan.btn}`}
            >
              {plan.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
