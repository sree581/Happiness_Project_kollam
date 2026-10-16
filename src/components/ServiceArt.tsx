import { useId } from 'react';

export type ServiceArtVariant =
  | 'individual'
  | 'couple'
  | 'family'
  | 'child'
  | 'assessment'
  | 'cbt'
  | 'psychodynamic'
  | 'workshops';

const LIGHT = '#f8f5ec';
const MINT = '#a8d5bf';
const GOLD = '#e8c77a';

/* Abstract, symbolic artwork for each service, drawn in the brand greens. */
export default function ServiceArt({ variant, label }: { variant: ServiceArtVariant; label: string }) {
  const uid = useId().replace(/:/g, '');
  const bg = `bg-${uid}`;
  const glow = `glow-${uid}`;
  const orb = `orb-${uid}`;
  const grid = `grid-${uid}`;

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      className="h-full w-full"
    >
      <defs>
        <radialGradient id={bg} cx="50%" cy="45%" r="75%">
          <stop offset="0%" stopColor="#4f8570" />
          <stop offset="55%" stopColor="#2f5546" />
          <stop offset="100%" stopColor="#1a3229" />
        </radialGradient>
        <radialGradient id={orb} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor={MINT} />
          <stop offset="100%" stopColor="#5e9a80" stopOpacity="0.2" />
        </radialGradient>
        <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={grid} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={LIGHT} opacity="0.12" />
        </pattern>
      </defs>

      <rect width="400" height="260" fill={`url(#${bg})`} />
      <rect width="400" height="260" fill={`url(#${grid})`} />

      {variant === 'individual' && (
        <g fill="none">
          <ellipse cx="200" cy="130" rx="150" ry="46" stroke={MINT} strokeOpacity="0.25" />
          <ellipse cx="200" cy="130" rx="110" ry="80" stroke={LIGHT} strokeOpacity="0.18" transform="rotate(-25 200 130)" />
          <ellipse cx="200" cy="130" rx="80" ry="80" stroke={MINT} strokeOpacity="0.35" strokeDasharray="2 6" />
          <circle cx="200" cy="130" r="34" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="305" cy="104" r="5" fill={GOLD} filter={`url(#${glow})`} />
          <circle cx="112" cy="168" r="3" fill={LIGHT} opacity="0.8" />
        </g>
      )}

      {variant === 'couple' && (
        <g fill="none">
          <circle cx="165" cy="130" r="62" stroke={MINT} strokeWidth="2" strokeOpacity="0.8" filter={`url(#${glow})`} />
          <circle cx="235" cy="130" r="62" stroke={LIGHT} strokeWidth="2" strokeOpacity="0.8" filter={`url(#${glow})`} />
          <path d="M200 79 A62 62 0 0 1 200 181 A62 62 0 0 1 200 79 Z" fill={GOLD} fillOpacity="0.35" />
          <circle cx="200" cy="130" r="9" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="165" cy="130" r="88" stroke={MINT} strokeOpacity="0.15" />
          <circle cx="235" cy="130" r="88" stroke={LIGHT} strokeOpacity="0.15" />
        </g>
      )}

      {variant === 'family' && (
        <g>
          <circle cx="200" cy="130" r="100" fill="none" stroke={MINT} strokeOpacity="0.2" strokeDasharray="3 7" />
          <g stroke={LIGHT} strokeOpacity="0.45" strokeWidth="1.5">
            <line x1="160" y1="100" x2="240" y2="100" />
            <line x1="160" y1="100" x2="175" y2="170" />
            <line x1="240" y1="100" x2="225" y2="170" />
            <line x1="175" y1="170" x2="225" y2="170" />
            <line x1="160" y1="100" x2="225" y2="170" />
            <line x1="240" y1="100" x2="175" y2="170" />
          </g>
          <circle cx="160" cy="100" r="18" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="240" cy="100" r="18" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="175" cy="170" r="11" fill={GOLD} filter={`url(#${glow})`} />
          <circle cx="225" cy="170" r="11" fill={GOLD} filter={`url(#${glow})`} />
          <circle cx="200" cy="135" r="5" fill={LIGHT} />
        </g>
      )}

      {variant === 'child' && (
        <g fill="none">
          <path d="M200 230 C200 190 196 160 200 120" stroke={MINT} strokeWidth="3" strokeLinecap="round" filter={`url(#${glow})`} />
          <path d="M199 175 C175 168 160 150 158 132 C180 134 196 150 199 175 Z" fill={MINT} fillOpacity="0.55" />
          <path d="M201 158 C222 150 238 132 242 114 C220 116 203 134 201 158 Z" fill={LIGHT} fillOpacity="0.5" />
          <circle cx="200" cy="96" r="22" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="200" cy="96" r="40" stroke={GOLD} strokeOpacity="0.5" strokeDasharray="1 6" strokeWidth="2" />
          <circle cx="252" cy="70" r="3" fill={GOLD} />
          <circle cx="146" cy="82" r="2.5" fill={LIGHT} />
          <circle cx="268" cy="120" r="2" fill={LIGHT} opacity="0.7" />
        </g>
      )}

      {variant === 'assessment' && (
        <g fill="none">
          {[30, 60, 90, 120].map((r) => (
            <circle key={r} cx="200" cy="130" r={r} stroke={MINT} strokeOpacity={0.5 - r / 400} />
          ))}
          <line x1="60" y1="130" x2="340" y2="130" stroke={LIGHT} strokeOpacity="0.2" />
          <line x1="200" y1="0" x2="200" y2="260" stroke={LIGHT} strokeOpacity="0.2" />
          <path d="M200 130 L200 10 A120 120 0 0 1 304 70 Z" fill={MINT} fillOpacity="0.18" />
          <line x1="200" y1="130" x2="304" y2="70" stroke={LIGHT} strokeWidth="2" filter={`url(#${glow})`} />
          <circle cx="252" cy="92" r="5" fill={GOLD} filter={`url(#${glow})`} />
          <circle cx="150" cy="168" r="4" fill={LIGHT} filter={`url(#${glow})`} />
          <circle cx="232" cy="190" r="3" fill={MINT} />
          <circle cx="200" cy="130" r="6" fill={`url(#${orb})`} />
        </g>
      )}

      {variant === 'cbt' && (
        <g fill="none">
          <circle cx="200" cy="130" r="72" stroke={MINT} strokeOpacity="0.2" />
          <path d="M150 85 A72 72 0 0 1 268 115" stroke={LIGHT} strokeWidth="2.5" strokeLinecap="round" filter={`url(#${glow})`} />
          <path d="M262 160 A72 72 0 0 1 152 178" stroke={MINT} strokeWidth="2.5" strokeLinecap="round" filter={`url(#${glow})`} />
          <path d="M136 160 A72 72 0 0 1 138 98" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" filter={`url(#${glow})`} />
          <path d="M262 107 L269 117 L257 119" stroke={LIGHT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M160 172 L151 179 L162 186" stroke={MINT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M131 104 L138 96 L145 105" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="144" cy="80" r="10" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="274" cy="138" r="10" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="140" cy="176" r="10" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="200" cy="130" r="4" fill={GOLD} />
        </g>
      )}

      {variant === 'psychodynamic' && (
        <g fill="none">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M-10 ${70 + i * 30} C 90 ${45 + i * 30}, 150 ${100 + i * 30}, 210 ${75 + i * 30} S 330 ${55 + i * 30}, 410 ${80 + i * 30}`}
              stroke={i % 2 ? MINT : LIGHT}
              strokeOpacity={0.55 - i * 0.07}
              strokeWidth={2 - i * 0.2}
            />
          ))}
          <circle cx="210" cy="200" r="16" fill={GOLD} fillOpacity="0.85" filter={`url(#${glow})`} />
          <circle cx="210" cy="200" r="34" stroke={GOLD} strokeOpacity="0.3" />
          <line x1="210" y1="40" x2="210" y2="182" stroke={LIGHT} strokeOpacity="0.35" strokeDasharray="2 5" />
          <circle cx="210" cy="40" r="5" fill={LIGHT} filter={`url(#${glow})`} />
        </g>
      )}

      {variant === 'workshops' && (
        <g>
          {(() => {
            const nodes = [
              [90, 70], [150, 50], [250, 55], [315, 85], [70, 150], [330, 165],
              [110, 215], [190, 225], [280, 210], [140, 125], [265, 130],
            ];
            return (
              <>
                <g stroke={MINT} strokeOpacity="0.35" strokeWidth="1.2">
                  {nodes.map(([x, y]) => (
                    <line key={`c${x}-${y}`} x1="200" y1="130" x2={x} y2={y} />
                  ))}
                  {nodes.map(([x, y], i) => {
                    const [nx, ny] = nodes[(i + 1) % nodes.length];
                    return <line key={`e${x}-${y}`} x1={x} y1={y} x2={nx} y2={ny} strokeOpacity="0.15" />;
                  })}
                </g>
                {nodes.map(([x, y], i) => (
                  <circle key={`n${x}-${y}`} cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={i % 3 === 0 ? GOLD : LIGHT} filter={`url(#${glow})`} />
                ))}
              </>
            );
          })()}
          <circle cx="200" cy="130" r="26" fill={`url(#${orb})`} filter={`url(#${glow})`} />
          <circle cx="200" cy="130" r="44" fill="none" stroke={LIGHT} strokeOpacity="0.25" />
        </g>
      )}
    </svg>
  );
}
