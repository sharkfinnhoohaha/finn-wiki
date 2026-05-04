// Contact.jsx — ink-inverse footer with beacon links
const BEACONS = [
  { label: 'hello@overlookstrategy.com', sub: 'Email' },
  { label: '818-292-6974', sub: 'Telephone' },
  { label: '@overlook.strategy', sub: 'Instagram' },
];

const Contact = () => (
  <section id="contact" style={{
    background: 'var(--ink-900)',
    color: 'var(--paper-50)',
    padding: '128px 48px 48px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{
        paddingBottom: 24, borderBottom: '1px solid rgba(250,246,238,0.2)',
        marginBottom: 64, display: 'flex', justifyContent: 'space-between',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'var(--tide-300)', margin: 0, opacity: 0.7,
        }}>The Studio // Get in touch</p>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'var(--tide-300)', margin: 0, opacity: 0.5,
        }}>§ 03</p>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 300,
        fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05,
        color: 'var(--paper-50)', margin: 0, marginBottom: 64,
        maxWidth: 900,
      }}>
        <em style={{ fontStyle: 'italic' }}>The fewer meetings, the better.</em><br/>
        Write, call, or come up to the bluff.
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        marginBottom: 96,
      }}>
        {BEACONS.map(b => (
          <a key={b.label} href="#" style={{
            padding: '28px 28px',
            border: '1px solid rgba(143,196,193,0.3)',
            background: 'rgba(19,72,82,0.2)',
            textDecoration: 'none', color: 'var(--paper-50)',
            display: 'flex', flexDirection: 'column', gap: 10,
            transition: 'all 240ms cubic-bezier(0.22,1,0.36,1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--tide-300)';
            e.currentTarget.style.background = 'rgba(74,157,151,0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(143,196,193,0.3)';
            e.currentTarget.style.background = 'rgba(19,72,82,0.2)';
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--tide-300)', opacity: 0.7,
            }}>{b.sub}</span>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 18,
              color: 'var(--paper-50)', letterSpacing: '0.02em',
            }}>{b.label} →</span>
          </a>
        ))}
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        paddingTop: 32, borderTop: '1px solid rgba(250,246,238,0.2)',
        fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.24em', textTransform: 'uppercase',
        color: 'var(--tide-300)', opacity: 0.55,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, letterSpacing: '0.22em', color: 'var(--paper-50)', opacity: 1 }}>
            OVERLOOK STRATEGY
          </span>
          <span>Ventura, California</span>
        </div>
        <span>34.2746° N // 119.2290° W</span>
        <span>© 2026 Overlook Strategy, LLC</span>
      </div>
    </div>
  </section>
);

window.Contact = Contact;
