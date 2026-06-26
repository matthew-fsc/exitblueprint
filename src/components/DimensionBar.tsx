import { motion, useReducedMotion } from 'framer-motion';

export function scoreColor(score: number): string {
  if (score >= 85) return '#2E8C73';
  if (score >= 70) return '#1F6F5C';
  if (score >= 55) return '#B9954A';
  if (score >= 40) return '#BE8418';
  return '#A6402E';
}

interface DimensionBarProps {
  code: string;
  name: string;
  score: number;
  weight: number;
}

export default function DimensionBar({ code, name, score, weight }: DimensionBarProps) {
  const reduced = useReducedMotion();
  const color = scoreColor(score);

  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs text-mut">{code}</span>
          <span className="text-sm font-medium">{name}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs text-mut">{Math.round(weight * 100)}%</span>
          <span className="font-display font-bold tabular-nums" style={{ color }}>{Math.round(score)}</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-paper-2 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: reduced ? `${score}%` : '0%' }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
