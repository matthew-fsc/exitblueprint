import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display font-bold text-lg text-ink">Exit Blueprint</span>
          <span className="font-mono text-xs text-mut">DRS</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-mut">
          <a href="/#method" className="hover:text-ink transition-colors">Method</a>
          <a href="/#process" className="hover:text-ink transition-colors">Process</a>
          <a href="/#who" className="hover:text-ink transition-colors">Who it's for</a>
        </div>
        <button
          onClick={() => navigate('/assessment')}
          className="bg-ink text-paper text-sm font-medium px-4 py-2 rounded hover:bg-ink-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
        >
          Start the assessment
        </button>
      </div>
    </nav>
  );
}
