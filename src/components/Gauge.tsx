import { useReducedMotion, motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const ZONE_COLORS = {
  clay: '#A6402E',
  amber: '#BE8418',
  brasssoft: '#B9954A',
  emerald: '#1F6F5C',
  emeralddeep: '#2E8C73',
};

function scoreToPoint(score: number) {
  const angle = Math.PI * score / 100;
  return { x: 160 - 130 * Math.cos(angle), y: 160 - 130 * Math.sin(angle) };
}

function zoneArc(a: number, b: number) {
  const start = scoreToPoint(a);
  const end = scoreToPoint(b);
  const large = b - a > 50 ? 1 : 0;
  return `M ${start.x} ${start.y} A 130 130 0 ${large} 1 ${end.x} ${end.y}`;
}

const zones = [
  { a: 0,  b: 40,  color: ZONE_COLORS.clay },
  { a: 40, b: 55,  color: ZONE_COLORS.amber },
  { a: 55, b: 70,  color: ZONE_COLORS.brasssoft },
  { a: 70, b: 85,  color: ZONE_COLORS.emerald },
  { a: 85, b: 100, color: ZONE_COLORS.emeralddeep },
];

interface GaugeProps {
  score: number;
  size?: 'sm' | 'lg';
}

export default function Gauge({ score, size = 'lg' }: GaugeProps) {
  const shouldReduce = useReducedMotion();
  const spring = useSpring(shouldReduce ? score : 0, { stiffness: 60, damping: 20 });
  const rotation = useTransform(spring, v => -180 + (v / 100) * 180);
  const displayScore = useTransform(spring, v => Math.round(v));

  useEffect(() => {
    spring.set(score);
  }, [score, spring]);

  const dim = size === 'lg' ? 'w-full max-w-xs' : 'w-40';

  return (
    <div className={`${dim} mx-auto select-none`}>
      <svg viewBox="0 0 320 200" className="w-full overflow-visible">
        <path d={zoneArc(0, 100)} fill="none" stroke="#2A3632" strokeWidth={18} strokeLinecap="round" />
        {zones.map(z => (
          <path key={z.a} d={zoneArc(z.a, z.b)} fill="none" stroke={z.color} strokeWidth={14} strokeLinecap="round" />
        ))}
        <motion.g style={{ rotate: rotation, originX: '160px', originY: '160px' }}>
          <line x1="160" y1="160" x2="160" y2="44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        <circle cx="160" cy="160" r="9" fill="white" />
        <circle cx="160" cy="160" r="5.5" fill="#1F2C29" />
        <motion.text
          x="160" y="190"
          textAnchor="middle"
          fontSize={size === 'lg' ? '32' : '24'}
          fontFamily="Fraunces, serif"
          fontWeight="700"
          fill="white"
        >
          {displayScore}
        </motion.text>
      </svg>
    </div>
  );
}
