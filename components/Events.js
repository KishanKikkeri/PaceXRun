export default function Events({ events }) {
  const fallback = [
    {
      title: 'Ecoworld Saturday Morning Run',
      location: 'Ecoworld, Bellandur',
      distance: '3K / 5K',
      day_and_time: 'Every Saturday, 6:00 AM',
      description: { json: null },
      registration_link: { href: '#', title: 'Register Now' },
    },
    {
      title: 'Cubbon Park Sunday Morning Run',
      location: 'Cubbon Park, Kasturba Rd',
      distance: '3K / 5K',
      day_and_time: 'Every Sunday, 6:30 AM',
      description: { json: null },
      registration_link: { href: '#', title: 'Join This Run' },
    },
  ]

  const items = events?.length ? events : fallback

  return (
    <section className="section" id="events" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p className="section-label">Where we run</p>
            <h2 className="section-title">Weekly<br />Runs</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 360, lineHeight: 1.7 }}>
              Two locations. Every weekend. Show up, lace up, and let the city be your track.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((ev, i) => (
              <div key={i} style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '32px',
                borderRadius: 2,
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 28, letterSpacing: '0.03em',
                      marginBottom: 6,
                    }}>{ev.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--green)', letterSpacing: '0.05em' }}>
                      {ev.day_and_time || ev.day_and_time}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20, color: 'var(--muted)',
                    border: '1px solid var(--border)', padding: '4px 12px', borderRadius: 2,
                  }}>{ev.distance}</div>
                </div>

                <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Location</div>
                    <div style={{ fontSize: 14 }}>{ev.location}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Distance</div>
                    <div style={{ fontSize: 14 }}>{ev.distance}</div>
                  </div>
                </div>

                <a href={ev.registration_link?.href || '#'}
                  className="btn btn-primary"
                  style={{ fontSize: 13 }}>
                  {ev.registration_link?.title || 'Register Now'} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          #events .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      ` }} />
    </section>
  )
}
