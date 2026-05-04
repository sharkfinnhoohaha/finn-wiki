// Approach.jsx — three-column editorial block
const APPROACH_STEPS = [
  { num: '01', title: 'Listen.', body: 'A half-day on the bluff. You talk, we take notes. We leave with a shared picture of what the business actually is — not what the pitch deck says.' },
  { num: '02', title: 'Draw.', body: 'Two weeks, on paper first. Identity, voice, and the three screens that matter. We present in person, in one sitting, and cut what does not hold up.' },
  { num: '03', title: 'Build.', body: 'Six to ten weeks to ship. Real code, real copy, real photography. When we hand over, your team owns the system — files, fonts, deploy keys, the lot.' },
];

const Approach = () => (
  <section id="approach" style={{
    background: 'var(--paper-100)',
    padding: '128px 48px',
    borderTop: '1px solid var(--paper-300)',
  }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        paddingBottom: 24, borderBottom: '1px solid var(--ink-900)',
        marginBottom: 64,
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'var(--fog-700)', margin: 0,
        }}>The Approach // How we work</p>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'var(--fog-700)', margin: 0,
        }}>§ 01</p>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-serif)', fontWeight: 300,
        fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.1,
        color: 'var(--ink-900)', margin: 0, marginBottom: 96,
        maxWidth: 820,
      }}>
        Three stages, in order.<br/>
        <em style={{ fontStyle: 'italic', color: 'var(--pacific-600)' }}>
          No decks, no retainer creep, no surprises.
        </em>
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 48,
      }}>
        {APPROACH_STEPS.map(({ num, title, body }) => (
          <div key={num} style={{
            paddingTop: 20, borderTop: '1px solid var(--ink-900)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.3em', color: 'var(--fog-700)',
              margin: 0, marginBottom: 24,
            }}>{num}</p>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 32, lineHeight: 1, color: 'var(--ink-900)',
              margin: 0, marginBottom: 20,
            }}>{title}</h3>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 15,
              lineHeight: 1.6, color: 'var(--ink-700)', margin: 0,
              textWrap: 'pretty',
            }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

window.Approach = Approach;
