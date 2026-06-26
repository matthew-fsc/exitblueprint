import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Gauge from '../components/Gauge';
import { categories, tiers } from '../lib/model';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-ink text-paper py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.2em] text-brass uppercase">Diligence Readiness Score</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Know what the buyer will find.{' '}
              <em className="text-brass not-italic">Before</em>{' '}
              they find it.
            </h1>
            <p className="text-lg text-paper-2 leading-relaxed">
              Most value is lost in the deal, not at the offer. Exit Blueprint scores how prepared your business is to survive buyer diligence with its valuation intact.
            </p>
            <p className="font-mono text-xs text-mut">~10 minutes. Three readiness legs. No financials required.</p>
            <button
              onClick={() => navigate('/assessment')}
              className="inline-flex items-center gap-2 bg-brass text-paper font-medium px-6 py-3 rounded hover:bg-brass-soft transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Start the assessment
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-72 bg-ink-2 rounded-xl p-8 border border-white/10">
              <Gauge score={72} />
              <p className="font-mono text-xs text-center text-mut mt-1">Market Ready. Sample DRS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 sm:px-6 bg-paper-2">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            A clean offer means little. Diligence is where the price gets re-cut.
          </h2>
          <p className="text-mut leading-relaxed text-lg">
            Buyers enter diligence with a price. They leave with a lower one. Undocumented addbacks get disallowed. Owner dependence triggers earnouts. Concentration above 20% invites escrow. The offer is a ceiling, not a floor. What you score here is what you protect.
          </p>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-brass uppercase tracking-widest">The Method</p>
            <h2 className="font-display text-3xl font-bold">The six dimensions buyers interrogate first</h2>
            <p className="text-mut leading-relaxed">
              The Diligence Readiness Score is a single 0 to 100 measure built from the six categories a private equity buyer interrogates first. Each is weighted by how heavily it moves a valuation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(cat => (
              <div key={cat.code} className="border border-line rounded-lg p-5 bg-card space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs font-medium text-brass">{cat.code}</span>
                  <span className="font-mono text-xs text-mut">{Math.round(cat.weight * 100)}%</span>
                </div>
                <p className="font-medium">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trifecta */}
      <section className="py-20 px-4 sm:px-6 bg-paper-2">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-brass uppercase tracking-widest">Three Readiness Legs</p>
            <h2 className="font-display text-3xl font-bold">A high DRS with low personal readiness still stalls a deal</h2>
            <p className="text-mut leading-relaxed">
              Business readiness determines what a buyer will pay. Financial and personal readiness determine whether the owner can close. All three have to align. The DRS is the headline, but the exit alignment synthesis is what makes the tool useful.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { code: 'DRS', label: 'Business Readiness', desc: 'The six weighted categories that determine what a buyer pays and how clean the process runs.' },
              { code: 'Secondary', label: 'Financial Readiness', desc: "Whether your personal finances support the exit you want at the price you need." },
              { code: 'Secondary', label: 'Personal Readiness', desc: 'Whether you are mentally and practically ready to close and move on.' },
            ].map((leg, i) => (
              <div key={i} className="bg-card border border-line rounded-lg p-6 space-y-3">
                <p className="font-mono text-xs text-brass uppercase tracking-widest">{leg.code}</p>
                <p className="font-medium">{leg.label}</p>
                <p className="text-sm text-mut leading-relaxed">{leg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-brass uppercase tracking-widest">Reading the Score</p>
            <h2 className="font-display text-3xl font-bold">Five tiers. One clear read.</h2>
          </div>
          <div className="overflow-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left py-3 pr-6 font-mono text-xs text-mut font-normal">Range</th>
                  <th className="text-left py-3 pr-6 font-medium">Tier</th>
                  <th className="text-left py-3 font-mono text-xs text-mut font-normal">Implied time to ready</th>
                </tr>
              </thead>
              <tbody>
                {[...tiers].reverse().map(tier => (
                  <tr key={tier.label} className="border-b border-line/50">
                    <td className="py-3 pr-6 font-mono text-xs text-mut">
                      {tier.min === 85 ? '85-100' : tier.min === 0 ? '0-39' : `${tier.min}-${tier.max}`}
                    </td>
                    <td className="py-3 pr-6 font-medium">{tier.label}</td>
                    <td className="py-3 font-mono text-xs text-mut">
                      {tier.impliedMonths === 0 ? 'Ready now' : `${tier.impliedMonths}+ months`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-4 sm:px-6 bg-paper-2">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-brass uppercase tracking-widest">The Process</p>
            <h2 className="font-display text-3xl font-bold">Four steps. A complete picture.</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Profile', desc: 'Set your exit intent, preferred path, and target timeline.' },
              { step: '02', label: 'Assess', desc: 'Answer the six DRS categories plus financial and personal readiness.' },
              { step: '03', label: 'Score', desc: 'Receive your DRS, confidence band, and three readiness legs.' },
              { step: '04', label: 'Roadmap', desc: 'See your top gaps ranked by impact with specific initiative copy.' },
            ].map(s => (
              <div key={s.step} className="space-y-3">
                <span className="font-mono text-xs text-brass">{s.step}</span>
                <p className="font-display font-bold text-xl">{s.label}</p>
                <p className="text-sm text-mut leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who" className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-brass uppercase tracking-widest">Who it's for</p>
            <h2 className="font-display text-3xl font-bold">Built for the deal team and the owner</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Business owners preparing to sell',
              'M&A advisors and investment bankers',
              'Exit planners (CEPA)',
              'PE acquirers running pre-LOI diligence',
              'Wealth managers with business-owner clients',
              'Independent sponsors evaluating targets',
            ].map(who => (
              <div key={who} className="bg-card border border-line rounded-lg px-5 py-4 text-sm font-medium">{who}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the score */}
      <section className="py-20 px-4 sm:px-6 bg-paper-2">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-xs text-brass uppercase tracking-widest">Beyond the Score</p>
            <h2 className="font-display text-3xl font-bold">From score to roadmap</h2>
            <p className="text-mut leading-relaxed">
              The DRS is the headline. The report gives you the full picture: DRS with a confidence band, EBITDA recast context, EV gap framing, and a prioritized initiative roadmap with the specific work to close each gap.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {['DRS + Confidence Band', 'EBITDA Recast Context', 'Initiative Roadmap'].map(item => (
              <div key={item} className="bg-card border border-line rounded-lg px-5 py-4 text-sm font-medium">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-24 px-4 sm:px-6 bg-ink text-paper text-center space-y-6">
        <p className="font-mono text-xs text-brass uppercase tracking-widest">Get Started</p>
        <h2 className="font-display text-4xl font-bold max-w-2xl mx-auto">Find your Diligence Readiness Score.</h2>
        <p className="text-paper-2 max-w-lg mx-auto">Ten minutes today is cheaper than a re-trade at the closing table.</p>
        <button
          onClick={() => navigate('/assessment')}
          className="inline-flex items-center gap-2 bg-brass text-paper font-medium px-8 py-4 rounded hover:bg-brass-soft transition-colors text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          Start the assessment
        </button>
      </section>

      <Footer />
    </div>
  );
}
