export default function JoinCTA({ nav }) {
  const whatsappUrl = nav?.whatsapp_url?.href || '#'
  const instagramUrl = nav?.instagram_url?.href || '#'

  return (
    <section className="section" id="join" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 2,
          padding: 'clamp(40px, 8vw, 80px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          <div>
            <p className="section-label">Ready to run?</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 7vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              marginBottom: 20,
            }}>
              Join the<br />
              <span style={{ color: 'var(--green)' }}>Movement</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, maxWidth: 360 }}>
              No race times. No judgement. Just show up, run at your pace, and find your crew. First run is always free.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="btn btn-primary"
              style={{ justifyContent: 'center', padding: '18px 32px', fontSize: 15 }}>
              Join WhatsApp Group →
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"
              className="btn btn-outline"
              style={{ justifyContent: 'center', padding: '18px 32px', fontSize: 15 }}>
              Follow on Instagram
            </a>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8,
            }}>
              {[
                { icon: '📍', label: 'Ecoworld', sub: 'Saturdays 6 AM' },
                { icon: '🌳', label: 'Cubbon Park', sub: 'Sundays 6:30 AM' },
              ].map((item, i) => (
                <div key={i} style={{
                  border: '1px solid var(--border)', borderRadius: 2, padding: '14px 16px',
                }}>
                  <div style={{ fontSize: 18, marginBottom: 6 }}>{item.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #join .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
