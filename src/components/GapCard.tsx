import { scoreColor } from './DimensionBar';

interface GapCardProps {
  rank: number;
  code: string;
  name: string;
  score: number;
  copy: string;
}

export default function GapCard({ rank, code, name, score, copy }: GapCardProps) {
  const color = scoreColor(score);
  return (
    <div className="border border-line rounded-lg p-5 space-y-3 bg-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-mut">0{rank}</span>
          <span className="font-mono text-xs font-medium" style={{ color }}>{code}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="font-display font-bold text-lg shrink-0" style={{ color }}>{Math.round(score)}</span>
      </div>
      <p className="text-sm text-mut leading-relaxed">{copy}</p>
    </div>
  );
}
