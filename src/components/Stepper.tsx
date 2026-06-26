interface StepperProps {
  current: number;
  total: number;
  label: string;
}

export default function Stepper({ current, total, label }: StepperProps) {
  const pct = Math.min(100, (current / total) * 100);
  return (
    <div className="space-y-2 pb-6">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-mut">{label}</span>
        <span className="font-mono text-xs text-mut">{current} / {total}</span>
      </div>
      <div className="h-0.5 bg-line rounded-full overflow-hidden">
        <div
          className="h-full bg-brass rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
