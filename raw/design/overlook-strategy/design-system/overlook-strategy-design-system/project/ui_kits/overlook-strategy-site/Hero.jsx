// Hero.jsx — editorial ink-inverse hero
const Hero = () => (
  <section style={{
    position: 'relative',
    background: 'var(--ink-900)',
    color: 'var(--paper-50)',
    padding: '128px 48px 96px',
    overflow: 'hidden',
  }}>
    {/* Grain overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
      opacity: 0.04, mixBlendMode: 'overlay', pointerEvents: 'none',
    }} />

    {/* Mountain silhouette, faint */}
    <svg viewBox="0 0 1200 220" preserveAspectRatio="none" style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 220,
      opacity: 0.12, pointerEvents: 'none',
    }}>
      <path d="M0,220 L0,160 C120,130 220,90 340,110 C460,130 520,70 640,80 C760,90 860,130 1000,100 C1100,80 1160,120 1200,110 L1200,220 Z"
            fill="none" stroke="var(--tide-300)" strokeWidth="1.5"/>
    </svg>

    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: 'var(--tide-300)', opacity: 0.8, margin: 0, marginBottom: 32,
      }}>Overlook Strategy // Agency · Est. 2019</p>

      <h1 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 300,
        fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.02,
        letterSpacing: '-0.015em',
        maxWidth: 900, margin: 0,
      }}>
        Brand and digital systems,<br/>
        <em style={{ fontStyle: 'italic', color: 'var(--tide-300)' }}>built at the coast.</em>
      </h1>

      <div style={{
        marginTop: 48, display: 'flex', gap: 48, alignItems: 'flex-end',
        flexWrap: 'wrap',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic',
          fontSize: 22, lineHeight: 1.4, maxWidth: 520, margin: 0,
          color: 'var(--paper-100)', opacity: 0.85,
        }}>
          We work with a small number of clients a year. Every engagement
          starts with a half-day on the bluff — phone off, notebook open —
          and ends with a system your team can actually run.
        </p>

        <a href="#contact" style={{
          fontFamily: 'var(--font-sans)', fontSize: 12,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--ink-900)', background: 'var(--paper-50)',
          padding: '16px 26px', borderRadius: 4,
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}>Start a project →</a>
      </div>

      <div style={{
        marginTop: 96, display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.24em', textTransform: 'uppercase',
        color: 'var(--tide-300)', opacity: 0.55,
      }}>
        <span>34.2746° N // 119.2290° W</span>
        <span>Ventura, California</span>
        <span>Scroll to continue ↓</span>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
