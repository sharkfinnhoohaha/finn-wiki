// Nav.jsx — paper nav with hairline and mono meta
const Nav = () => (
  <nav style={{
    position: 'sticky', top: 0, zIndex: 50,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 48px',
    background: 'rgba(244, 238, 226, 0.92)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--paper-300)',
  }}>
    <a href="#" style={{
      fontFamily: 'var(--font-sans)', fontSize: 14,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'var(--ink-900)', textDecoration: 'none', fontWeight: 400,
    }}>Overlook Strategy</a>

    <div style={{ display: 'flex', gap: 36 }}>
      {['Work', 'Approach', 'Studio', 'Journal', 'Contact'].map((l, i) => (
        <a key={l} href={`#${l.toLowerCase()}`} style={{
          fontFamily: 'var(--font-sans)', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--ink-900)', textDecoration: 'none',
          paddingBottom: 2,
          borderBottom: i === 0 ? '1px solid var(--ink-900)' : '1px solid transparent',
        }}>{l}</a>
      ))}
    </div>

    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 10,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: 'var(--fog-700)',
    }}>Ventura, CA // 34.27° N</span>
  </nav>
);

window.Nav = Nav;
