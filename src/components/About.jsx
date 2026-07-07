import sumanPhoto from '../assets/suman.jpg'

const skills = [
  { label: 'Short-Form Video Editing', pct: 95 },
  { label: 'AI Video Creation',        pct: 88 },
  { label: 'Photo Retouching',         pct: 90 },
  { label: 'Podcast Editing',          pct: 85 },
]

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-img-wrap">
          <img className="about-img" src={sumanPhoto} alt="Suman Devi" />
          <div className="about-corner">
            <span>🏅</span>
            Top-Rated<br />Freelancer
          </div>
        </div>
        <div className="about-text">
          <div className="section-eyebrow">About Me</div>
          <div className="section-title">Hi, I'm Suman Devi</div>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 18 }}>
            I'm a freelance video editor and AI content creator passionate about helping
            creators and businesses stand out in a crowded digital world. I specialize
            in short-form content that gets watched, shared, and remembered.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>
            With expertise in both traditional editing and the latest AI video tools,
            I bridge the gap between raw footage and polished, platform-ready content —
            fast. My clients range from solo content creators to small brands looking
            to scale their social presence.
          </p>
          <div className="skill-bars">
            {skills.map((s) => (
              <div key={s.label} className="skill-row">
                <label>
                  {s.label}
                  <span>{s.pct}%</span>
                </label>
                <div className="bar-bg">
                  <div className="bar-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
