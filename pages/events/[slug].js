import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getNavigation } from '../../lib/contentstack'
import Stack from '../../lib/contentstack'

export default function EventPage({ event, nav }) {
  if (!event) return (
    <div style={{ color: 'white', padding: 80, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 40 }}>
      Event not found.
    </div>
  )

  return (
    <>
      <Head>
        <title>{event.title} | PaceX RunClub</title>
        <meta name="description" content={`${event.location} — ${event.day_and_time}`} />
      </Head>

      <Navbar nav={nav} />

      <main style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--black)' }}>

        {/* Hero Banner */}
        <section style={{
          position: 'relative', minHeight: 420,
          display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
        }}>
          {event.event_image?.url
            ? <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${event.event_image.url})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                filter: 'brightness(0.3)',
              }} />
            : <div style={{ position: 'absolute', inset: 0, background: 'var(--card)' }} />
          }
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 60%)',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(170,255,0,0.3)',
              padding: '5px 12px', borderRadius: 2, marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: 500 }}>
                Weekly Run
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 8vw, 80px)',
              lineHeight: 0.95, letterSpacing: '0.02em', marginBottom: 16,
            }}>{event.title}</h1>
            <p style={{ fontSize: 16, color: 'var(--muted)' }}>{event.day_and_time}</p>
          </div>
        </section>

        {/* Content */}
        <section className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 340px',
            gap: 60, alignItems: 'start',
          }}>

            {/* Left */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 36,
                letterSpacing: '0.03em', marginBottom: 20, color: 'var(--green)',
              }}>About This Run</h2>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
                {event.description || 'Join us for an amazing run with the PaceX community!'}
              </p>
            </div>

            {/* Right — info card */}
            <div style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 2, padding: 32, position: 'sticky', top: 90,
            }}>
              {[
                { label: 'Location', value: event.location, icon: '📍' },
                { label: 'Day & Time', value: event.day_and_time, icon: '🕕' },
                { label: 'Distance',  value: event.distance,    icon: '🏃' },
              ].map((item, i) => (
                <div key={i} style={{
                  paddingBottom: 20, marginBottom: 20,
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 6 }}>
                    {item.icon} {item.label}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>{item.value}</div>
                </div>
              ))}

              <a href={event.registration_link?.href || '#'}
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                {event.registration_link?.title || 'Register Now'} →
              </a>

              <a href="/#events" className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                ← Back to Events
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer nav={nav} />

      <style>{`
        @media (max-width: 768px) {
          .container > div[style] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  try {
    const result = await Stack.contentType('run_event').query().find()
    const paths = (result?.entries || []).map(ev => ({
      params: { slug: ev.url?.replace('/', '') || ev.uid },
    }))
    return { paths, fallback: 'blocking' }
  } catch {
    return { paths: [], fallback: 'blocking' }
  }
}

export async function getStaticProps({ params }) {
  try {
    const result = await Stack.contentType('run_event')
      .query()
      .where('url', `/${params.slug}`)
      .find()

    const event = result?.entries?.[0] || null
    const nav = await getNavigation()

    return {
      props: { event, nav: nav || null },
      revalidate: 60,
    }
  } catch {
    return { props: { event: null, nav: null } }
  }
}