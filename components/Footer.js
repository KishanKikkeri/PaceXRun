export default function Footer({ nav }) {
  const links = nav?.nav_links || []
  const instagram = nav?.instagram_url?.href || '#'
  const whatsapp = nav?.whatsapp_url?.href || '#'

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '48px 24px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 32,
          marginBottom: 48,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 36, letterSpacing: '0.05em',
              marginBottom: 10,
            }}>
              PACE<span style={{ color: 'var(--green)' }}>X</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 260, lineHeight: 1.6 }}>
              Bangalore's running community. Every weekend. All paces. No excuses.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 16, fontWeight: 500 }}>
                Pages
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((l, i) => (
                  <a key={i} href={l.url} style={{
                    fontSize: 14, color: 'var(--muted)', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 16, fontWeight: 500 }}>
                Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href={instagram} target="_blank" rel="noreferrer"
                  style={{ fontSize: 14, color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >Instagram</a>
                <a href={whatsapp} target="_blank" rel="noreferrer"
                  style={{ fontSize: 14, color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >WhatsApp Group</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            © {new Date().getFullYear()} PaceX RunClub, Bangalore
          </span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Runs every weekend — all welcome</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
