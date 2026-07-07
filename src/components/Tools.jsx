const tools = [
  { icon: '✂️',  name: 'CapCut' },
  { icon: '🎞️', name: 'Premiere Pro' },
  { icon: '🎚️', name: 'DaVinci Resolve' },
  { icon: '🎧', name: 'Adobe Audition' },
  { icon: '📝', name: 'Descript' },
  { icon: '🤖', name: 'Runway ML' },
  { icon: '🦋', name: 'Pika Labs' },
  { icon: '🌌', name: 'Sora' },
  { icon: '🖼️', name: 'Photoshop' },
  { icon: '🌅', name: 'Lightroom' },
  { icon: '🗣️', name: 'ElevenLabs' },
  { icon: '🎨', name: 'Canva Pro' },
]

export default function Tools() {
  return (
    <section style={{ background: 'var(--bg2)' }}>
      <div className="section-eyebrow">Tools & Software</div>
      <div className="section-title">My toolkit</div>
      <p className="section-sub">
        Industry-standard tools combined with the latest AI platforms to produce premium output, faster.
      </p>
      <div className="tools-grid">
        {tools.map((t) => (
          <div key={t.name} className="tool-pill">
            <span>{t.icon}</span>
            {t.name}
          </div>
        ))}
      </div>
    </section>
  )
}
