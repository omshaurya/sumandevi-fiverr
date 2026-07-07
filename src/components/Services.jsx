const services = [
  {
    icon: '🎬',
    title: 'Short-Form Video Editing',
    desc: 'Punchy Reels, TikToks, and YouTube Shorts optimized for maximum watch time. Jump cuts, captions, sound effects, and viral hooks in the first 3 seconds.',
    tags: ['Reels', 'TikTok', 'Shorts', 'CapCut'],
  },
  {
    icon: '🤖',
    title: 'AI Video Creation',
    desc: 'Fully AI-generated video sequences using Runway, Pika, and Sora — combined with professional editing to produce content that looks premium, not robotic.',
    tags: ['Runway', 'Pika', 'Sora', 'AI Edit'],
  },
  {
    icon: '🎙️',
    title: 'Podcast Editing & Production',
    desc: 'Noise removal, level balancing, filler word cuts, and intro/outro music. Includes bonus social clips cut from your episodes — ready to post.',
    tags: ['Descript', 'Audition', 'Clip Cuts'],
  },
  {
    icon: '📸',
    title: 'Photo Retouching & Editing',
    desc: 'Color grading, skin retouching, background removal, and product photo enhancement. Clean, natural results for social media, e-commerce, and branding.',
    tags: ['Photoshop', 'Lightroom', 'AI Tools'],
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg2)' }}>
      <div className="section-eyebrow">What I Offer</div>
      <div className="section-title">Services built for<br />modern creators</div>
      <p className="section-sub">
        Fast, polished, and trend-aware — I specialize in the formats that actually perform in 2026.
      </p>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tags">
              {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
