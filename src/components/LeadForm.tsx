import { useState } from 'react';

interface LeadFormProps {
  payload: Record<string, unknown>;
}

export default function LeadForm({ payload }: LeadFormProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const endpoint: string | undefined = (import.meta as any).env?.VITE_LEAD_ENDPOINT;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = { name, company, email, ...payload };
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch { /* fail silently */ }
    }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-2">
        <p className="font-medium text-ink">Your report is ready.</p>
        <p className="text-sm text-mut">Use the Print button to save it as a PDF.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <p className="font-mono text-xs text-brass uppercase tracking-widest">Save your report</p>
        <p className="text-sm text-mut">Get implementation guidance delivered to your inbox.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-mono text-mut block" htmlFor="lead-name">Name</label>
          <input
            id="lead-name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-line rounded px-3 py-2 text-sm bg-card focus:outline-none focus:border-brass transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-mono text-mut block" htmlFor="lead-company">Company</label>
          <input
            id="lead-company"
            type="text"
            required
            value={company}
            onChange={e => setCompany(e.target.value)}
            className="w-full border border-line rounded px-3 py-2 text-sm bg-card focus:outline-none focus:border-brass transition-colors"
          />
        </div>
        <div className="space-y-1 sm:col-span-2">
          <label className="text-xs font-mono text-mut block" htmlFor="lead-email">Email</label>
          <input
            id="lead-email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-line rounded px-3 py-2 text-sm bg-card focus:outline-none focus:border-brass transition-colors"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brass text-paper font-medium py-3 rounded transition-opacity hover:opacity-90 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
      >
        {loading ? 'Sending...' : 'Get my report'}
      </button>
    </form>
  );
}
