export default function Testimonials({ testimonials }) {
  const items = testimonials?.length ? testimonials : [
    { uid: 1, runner_name: 'Priya Sharma', quote: 'PaceX completely changed my mornings. I went from barely running 1K to finishing my first 5K in just 3 months. The community keeps you going!', running_since: 'Running with PaceX since January 2024' },
    { uid: 2, runner_name: 'Rahul Nair', quote: 'I was nervous joining my first run but everyone was so welcoming. Now I never miss a Saturday at Ecoworld. Best decision I made this year.', running_since: 'Running with PaceX since March 2024' },
    { uid: 3, runner_name: 'Ananya Reddy', quote: 'Cubbon Park on Sundays is my happy place now. PaceX made running fun — the people, the energy, the post-run coffee. Nothing like it in Bangalore!', running_since: 'Running with PaceX since June 2023' },
  ]

  return (
    <section className="section" id="testimonials" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <p className="section-label">What runners say</p>
        <h2 className="section-title" style={{ marginBottom: 56 }}>Real<br />Stories</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
        }}>
          {items.map((t, i) => (
            <div key={t.uid || i} style={{
              background: i === 1 ? 'var(--green)' : 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 2,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 280,
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 64,
                  lineHeight: 0.8,
                  color: i === 1 ? 'rgba(0,0,0,0.15)' : 'rgba(170,255,0,0.15)',
                  marginBottom: 16,
                }}>"</div>
                <p style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: i === 1 ? 'var(--black)' : 'var(--white)',
                  fontWeight: 300,
                }}>{t.quote}</p>
              </div>

              <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
                {t.runner_photo?.url ? (
                  <img src={t.runner_photo.url} alt={t.runner_name}
                    style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                ) : (
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                    background: i === 1 ? 'rgba(0,0,0,0.2)' : 'var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: 18,
                    color: i === 1 ? 'var(--black)' : 'var(--muted)',
                  }}>
                    {t.runner_name?.charAt(0)}
                  </div>
                )}
                <div>
                  <div style={{
                    fontWeight: 500, fontSize: 15,
                    color: i === 1 ? 'var(--black)' : 'var(--white)',
                  }}>{t.runner_name}</div>
                  <div style={{
                    fontSize: 12, color: i === 1 ? 'rgba(0,0,0,0.5)' : 'var(--muted)',
                    marginTop: 2,
                  }}>{t.running_since}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
