const items = [
  'Short-Form Video Editing', 'AI Video Creation', 'Podcast Production',
  'Photo Retouching', 'Reels · TikTok · Shorts', 'YouTube Automation',
  'Short-Form Video Editing', 'AI Video Creation', 'Podcast Production',
  'Photo Retouching', 'Reels · TikTok · Shorts', 'YouTube Automation',
]

export default function FilmStrip() {
  return (
    <div className="film-strip">
      <div className="film-strip-inner">
        {items.map((item, i) => (
          <span key={i}>
            {item}
            {i < items.length - 1 && <span className="dot"> ◆ </span>}
          </span>
        ))}
      </div>
    </div>
  )
}
