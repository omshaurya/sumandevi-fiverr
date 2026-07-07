import sumanPhoto from '../assets/suman.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">Available for Freelance Work</div>
        <h1>
          I turn raw footage<br />
          into <span className="line-gold">viral</span><br />
          <span className="line-violet">content.</span>
        </h1>
        <p className="hero-desc">
          Video editor, photo retoucher &amp; AI video creator. I help creators,
          brands, and businesses produce scroll-stopping content for Reels,
          TikTok, YouTube, and beyond.
        </p>
        <div className="hero-actions">
          <a
            href="https://www.fiverr.com/s/99Kk9md"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View My Fiverr Gigs →
          </a>
          <a href="#portfolio" className="btn-secondary">See My Work</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">50<span>+</span></div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="stat-num">4<span>★</span></div>
            <div className="stat-label">Fiverr Rating</div>
          </div>
          <div>
            <div className="stat-num">24<span>h</span></div>
            <div className="stat-label">Avg. Turnaround</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame">
          <div className="photo-glow" />
          <img src={sumanPhoto} alt="Suman Devi — Video & Photo Editor" />
          <div className="photo-badge">
            <div className="photo-badge-icon">🎬</div>
            <div className="photo-badge-text">
              <strong>Suman Devi</strong>
              Video &amp; Photo Editor
            </div>
          </div>
          <div className="photo-badge2">AI-Powered<br />Editing ✦</div>
        </div>
      </div>
    </section>
  )
}
