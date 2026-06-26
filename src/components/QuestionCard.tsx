interface Option {
  label: string;
  value: number | string;
}

interface QuestionCardProps {
  id: string;
  text: string;
  options: Option[];
  selected: number | string | undefined;
  onChange: (value: number | string) => void;
}

export default function QuestionCard({ id, text, options, selected, onChange }: QuestionCardProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-base font-medium text-ink leading-snug mb-4">{text}</legend>
      <div className="space-y-2" role="radiogroup">
        {options.map((opt, i) => {
          const isSelected = selected === opt.value;
          return (
            <label
              key={i}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-150
                ${isSelected
                  ? 'border-brass bg-brass/10 text-ink'
                  : 'border-line bg-card text-ink hover:border-brass-soft hover:bg-paper-2'
                }`}
            >
              <input
                type="radio"
                name={id}
                value={String(opt.value)}
                checked={isSelected}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-brass' : 'border-line'}`}>
                {isSelected && <span className="w-2 h-2 rounded-full bg-brass" />}
              </span>
              <span className="text-sm">{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
