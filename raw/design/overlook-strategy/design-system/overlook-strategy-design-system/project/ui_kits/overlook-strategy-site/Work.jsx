// Work.jsx — selected work list with interactive hover
const { useState } = React;

const WORK = [
  { num: '01', name: 'Johnson Aviation', type: 'Identity · Web', year: '2025', tag: 'AGENCY SITE', desc: 'Strategic airport planning firm — land use, facilities, and financial advisory.' },
  { num: '02', name: 'Overlook Audio', type: 'Identity · Web', year: '2024', tag: 'STUDIO SITE', desc: 'Recording studio and live sound production in Ventura.' },
  { num: '03', name: 'Mineral King', type: 'Brand · Packaging', year: '2024', tag: 'RECORD LABEL', desc: 'Independent label identity and vinyl sleeve system.' },
  { num: '04', name: 'Channel Coast Surveyors', type: 'Identity', year: '2023', tag: 'CIVIC', desc: 'Coastal survey cooperative — mark, stationery, and field report template.' },
  { num: '05', name: 'The Long View', type: 'Editorial', year: '2023', tag: 'JOURNAL', desc: 'A small-run printed journal on strategy, slowness, and place.' },
];

const Work = () => {
  const [hover, setHover] = useState(null);
  return (
    <section id="work" style={{
      background: 'var(--paper-50)',
      padding: '128px 48px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          paddingBottom: 24, borderBottom: '1px solid var(--ink-900)',
          marginBottom: 8,
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--fog-700)', margin: 0,
          }}>Selected Work // 2023–2026</p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--fog-700)', margin: 0,
          }}>§ 02 · {WORK.length} projects</p>
        </div>

        {WORK.map((w, i) => {
          const isHover = hover === i;
          return (
            <a key={w.num} href="#"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1.2fr 1fr 100px 80px',
                gap: 32, alignItems: 'center',
                padding: '28px 0',
                borderBottom: '1px solid var(--paper-300)',
                textDecoration: 'none',
                transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
                background: isHover ? 'var(--paper-100)' : 'transparent',
                paddingLeft: isHover ? 16 : 0,
                paddingRight: isHover ? 16 : 0,
              }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.3em', color: 'var(--fog-700)',
              }}>{w.num}</span>
              <span style={{
                fontFamily: 'var(--font-serif)', fontWeight: 400,
                fontSize: 28, lineHeight: 1, color: 'var(--ink-900)',
                fontStyle: isHover ? 'italic' : 'normal',
                transition: 'font-style 240ms',
              }}>{w.name}</span>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 13,
                lineHeight: 1.5, color: 'var(--ink-700)',
              }}>{isHover ? w.desc : w.type}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--fog-700)',
              }}>{w.tag}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                color: 'var(--ink-900)', textAlign: 'right',
                letterSpacing: '0.05em',
              }}>{w.year} {isHover ? '→' : ''}</span>
            </a>
          );
        })}

        <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center' }}>
          <a href="#" style={{
            fontFamily: 'var(--font-sans)', fontSize: 12,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--ink-900)', textDecoration: 'none',
            borderBottom: '1px solid var(--ink-900)',
            paddingBottom: 4,
          }}>View the full archive ↗</a>
        </div>
      </div>
    </section>
  );
};

window.Work = Work;
