import { useState, useEffect } from 'react'

export default function Navbar({ nav }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = nav?.nav_links || [
    { label: 'Events', url: '#events' },
    { label: 'Gallery', url: '#gallery' },
    { label: 'Join Us', url: '#join' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #222' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <a href="/" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28, letterSpacing: '0.05em',
          color: 'var(--white)',
        }}>
          PACE<span style={{ color: 'var(--green)' }}>X</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links">
          {links.map((l, i) => (
            <a key={i} href={l.url} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: '0.05em',
              textTransform: 'uppercase', color: 'var(--muted)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--green)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l.label}</a>
          ))}
          <a href={nav?.instagram_url?.href || '#'} target="_blank" rel="noreferrer"
            style={{
              width: 36, height: 36, border: '1px solid var(--border)',
              borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)', fontSize: 16, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
          >IG</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
