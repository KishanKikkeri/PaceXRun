export default function Gallery({ gallery }) {
  const items = gallery?.length ? gallery : Array(6).fill(null).map((_, i) => ({
    uid: i,
    alt_text: 'PaceX run photo',
    caption: 'PaceX RunClub, Bangalore',
    image: null,
  }))

  return (
    <section className="section" id="gallery" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <p className="section-label">On the ground</p>
            <h2 className="section-title">In the<br />Moment</h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 240, textAlign: 'right', lineHeight: 1.6 }}>
            Real runs. Real people. Real Bangalore mornings.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: 3,
        }}>
          {items.slice(0, 6).map((img, i) => (
            <div key={img?.uid || i} style={{
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              aspectRatio: i === 0 ? '16/9' : '4/3',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.caption-overlay').style.opacity = '1'
                e.currentTarget.querySelector('img, .placeholder')?.style && (e.currentTarget.querySelector('img, .placeholder').style.transform = 'scale(1.04)')
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.caption-overlay').style.opacity = '0'
                e.currentTarget.querySelector('img, .placeholder')?.style && (e.currentTarget.querySelector('img, .placeholder').style.transform = 'scale(1)')
              }}
            >
              {img?.image?.url ? (
                <img src={img.image.url} alt={img.alt_text}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              ) : (
                <div className="placeholder" style={{
                  width: '100%', height: '100%', minHeight: 200,
                  background: `hsl(${100 + i * 20}, 5%, ${12 + i * 2}%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.5s ease',
                }}>
                  <span style={{ color: 'var(--border)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Photo {i + 1}
                  </span>
                </div>
              )}
              <div className="caption-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                display: 'flex', alignItems: 'flex-end', padding: 16,
                opacity: 0, transition: 'opacity 0.3s ease',
              }}>
                <span style={{ fontSize: 13, color: 'var(--white)', fontWeight: 500 }}>
                  {img?.caption || 'PaceX RunClub'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          #gallery .container > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
          #gallery .container > div:last-child > div:first-child {
            grid-column: span 2 !important;
          }
        }
      ` }} />
    </section>
  )
}
