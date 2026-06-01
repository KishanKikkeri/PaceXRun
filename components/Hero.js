export default function Hero({ homepage }) {
  const headline = homepage?.hero_headline || "Bangalore's #1 Running Community"
  const subtext = homepage?.hero_subtext || "Join 1000+ runners every morning at Ecoworld & Cubbon Park. All levels welcome."
  const ctaPrimary = homepage?.hero_cta_primary || 'Join the Club'
  const ctaPrimaryUrl = homepage?.hero_cta_primary_url?.href || '#join'
  const ctaSecondary = homepage?.hero_cta_secondary || 'View Events'
  const bgImage = homepage?.hero_background_image?.url || null
  const stats = homepage?.stats || [
    { number: '1000+', label: 'Members' },
    { number: '2', label: 'Locations' },
    { number: '3K & 5K', label: 'Distances' },
  ]

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 64,
    }}>
      {bgImage && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.25)',
          zIndex: 0,
        }} />
      )}

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(170,255,0,0.06) 0%, transparent 60%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1px solid rgba(170,255,0,0.3)',
          padding: '6px 14px', borderRadius: 2, marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: 500 }}>
            Bangalore Run Club
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 12vw, 160px)',
          lineHeight: 0.9,
          letterSpacing: '0.02em',
          marginBottom: 32,
          maxWidth: 900,
        }}>
          {headline.split(' ').map((word, i) => (
            <span key={i} style={{
              display: 'inline-block',
              color: i === 0 ? 'var(--green)' : 'var(--white)',
              marginRight: '0.2em',
              animation: `fadeUp 0.6s ease ${i * 0.1}s both`,
            }}>{word}</span>
          ))}
        </h1>

        <p style={{
          fontSize: 18, color: 'var(--muted)', maxWidth: 500,
          lineHeight: 1.6, marginBottom: 40,
          animation: 'fadeUp 0.6s ease 0.4s both',
        }}>{subtext}</p>

        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap',
          animation: 'fadeUp 0.6s ease 0.5s both',
        }}>
          <a href={ctaPrimaryUrl} className="btn btn-primary">{ctaPrimary} →</a>
          <a href="#events" className="btn btn-outline">{ctaSecondary}</a>
        </div>

        <div style={{
          display: 'flex', gap: 0, marginTop: 80,
          borderTop: '1px solid var(--border)', paddingTop: 40,
          animation: 'fadeUp 0.6s ease 0.6s both',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              flex: 1,
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              paddingRight: 32, paddingLeft: i > 0 ? 32 : 0,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--green)',
                lineHeight: 1,
                marginBottom: 4,
              }}>{s.number}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
