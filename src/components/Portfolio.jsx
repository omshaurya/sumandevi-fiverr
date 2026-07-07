const items = [
  { thumb: 'vid1', icon: '🎬', hasPlay: true,  cat: 'Short-Form Video',    title: 'Fitness Creator Reels Pack',        desc: '5 Reels with animated captions, fast cuts, and trending audio for a fitness coach.' },
  { thumb: 'ai1',  icon: '🤖', hasPlay: true,  cat: 'AI Video',            title: 'AI-Generated Brand Promo',          desc: 'Runway + real footage hybrid: 60-second product video blending AI visuals with voiceover.' },
  { thumb: 'ph1',  icon: '📸', hasPlay: false, cat: 'Photo Editing',       title: 'E-Commerce Product Shoot',          desc: 'Background removal, shadow addition, and color correction for 12 product images.' },
  { thumb: 'vid2', icon: '🎙️', hasPlay: true,  cat: 'Podcast Editing',     title: 'Weekly Tech Podcast — 45 min',      desc: 'Noise removal, filler-word cleanup, music, and 3 short social clips cut from the episode.' },
  { thumb: 'vid3', icon: '▶️', hasPlay: true,  cat: 'YouTube Automation',  title: 'Faceless YouTube Channel Edit',     desc: 'Stock footage + AI voiceover + captions assembled into an 8-minute documentary-style video.' },
  { thumb: 'ph2',  icon: '✨', hasPlay: false, cat: 'AI Photo + Edit',     title: 'Portrait Retouch & Enhancement',    desc: 'Professional headshot retouching with AI-assisted skin smoothing and color grading.' },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-eyebrow">Portfolio</div>
      <div className="section-title">Recent work</div>
      <p className="section-sub">
        A selection of video edits, AI-generated content, and photo projects across different styles and industries.
      </p>
      <div className="portfolio-grid">
        {items.map((item) => (
          <div key={item.title} className="portfolio-item">
            <div className={`portfolio-thumb ${item.thumb}`}>
              {item.icon}
              {item.hasPlay && <div className="play-btn">▶</div>}
            </div>
            <div className="portfolio-info">
              <div className="portfolio-cat">{item.cat}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
