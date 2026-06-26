import Gauge from './Gauge';

function oneLineRead(score: number, leg: 'business' | 'financial' | 'personal'): string {
  if (leg === 'business') {
    if (score >= 85) return 'Diligence ready. Protect the score.';
    if (score >= 70) return 'Market ready. 3 to 6 months to close gaps.';
    if (score >= 55) return 'Conditional. 6 to 12 months of work needed.';
    if (score >= 40) return 'High risk. 12 to 18 months to diligence-ready.';
    return 'Pre-diligence required. Foundational work first.';
  }
  if (leg === 'financial') {
    if (score >= 85) return 'Financially prepared for a range of outcomes.';
    if (score >= 65) return 'Mostly aligned. Some gaps to address.';
    return 'Financial readiness needs attention before exit.';
  }
  if (score >= 85) return 'Personally prepared and clear on next chapter.';
  if (score >= 65) return 'Mostly ready. Clarify post-close role.';
  return 'Personal readiness is a risk to a smooth close.';
}

interface ReadinessLegProps {
  label: string;
  score: number;
  leg: 'business' | 'financial' | 'personal';
}

export default function ReadinessLeg({ label, score, leg }: ReadinessLegProps) {
  return (
    <div className="bg-ink-2 rounded-lg p-6 flex flex-col items-center gap-3 text-center">
      <span className="font-mono text-xs text-mut uppercase tracking-widest">{label}</span>
      <Gauge score={score} size="sm" />
      <p className="text-sm text-paper-2">{oneLineRead(score, leg)}</p>
    </div>
  );
}
