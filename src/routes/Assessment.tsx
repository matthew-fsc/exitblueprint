import { useState, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Gauge from '../components/Gauge';
import DimensionBar from '../components/DimensionBar';
import ReadinessLeg from '../components/ReadinessLeg';
import GapCard from '../components/GapCard';
import LeadForm from '../components/LeadForm';
import QuestionCard from '../components/QuestionCard';
import Stepper from '../components/Stepper';
import { categories, financialQuestions, personalQuestions, exitProfileQuestions } from '../lib/model';
import { computeDRS, computeLeg, tierFor, confidenceBand, rankGaps, alignment } from '../lib/score';
import type { AssessmentAnswers } from '../lib/types';

type Mode = 'quick' | 'full';

const STEPS = [
  'intro',
  'profile',
  'RQ', 'FI', 'OI', 'CR', 'MT', 'GD',
  'financial',
  'personal',
  'results',
] as const;
type Step = typeof STEPS[number];

function getQuestionsForCategory(code: string, mode: Mode) {
  const cat = categories.find(c => c.code === code)!;
  return mode === 'quick' ? cat.questions.filter(q => q.isSignature) : cat.questions;
}

const DRS_CATS: Step[] = ['RQ', 'FI', 'OI', 'CR', 'MT', 'GD'];

const STEP_LABELS: Record<string, string> = {
  profile: 'Exit Profile',
  RQ: 'Revenue Quality',
  FI: 'Financial Integrity',
  OI: 'Operational Independence',
  CR: 'Customer Risk',
  MT: 'Management & Team',
  GD: 'Growth Drivers',
  financial: 'Financial Readiness',
  personal: 'Personal Readiness',
};

export default function Assessment() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const [stepIdx, setStepIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mode, setMode] = useState<Mode>('full');
  const [answers, setAnswers] = useState<AssessmentAnswers>({
    profile: {},
    drs: {},
    financial: {},
    personal: {},
  });

  const step = STEPS[stepIdx];
  const totalSteps = STEPS.length - 2;
  const currentProgress = Math.max(0, stepIdx - 1);

  function canAdvance(): boolean {
    if (step === 'intro') return true;
    if (step === 'results') return true;
    if (step === 'profile') {
      return exitProfileQuestions.every(q => answers.profile[q.id] !== undefined);
    }
    if (DRS_CATS.includes(step as Step)) {
      const qs = getQuestionsForCategory(step, mode);
      return qs.every(q => answers.drs[q.id] !== undefined);
    }
    if (step === 'financial') {
      return financialQuestions.every(q => answers.financial[q.id] !== undefined);
    }
    if (step === 'personal') {
      return personalQuestions.every(q => answers.personal[q.id] !== undefined);
    }
    return false;
  }

  function advance() {
    if (!canAdvance()) return;
    setDirection(1);
    setStepIdx(i => Math.min(i + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function back() {
    setDirection(-1);
    setStepIdx(i => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const setDrsAnswer = useCallback((id: string, value: number) => {
    setAnswers(a => ({ ...a, drs: { ...a.drs, [id]: value } }));
  }, []);

  const setProfileAnswer = useCallback((id: string, value: string) => {
    setAnswers(a => ({ ...a, profile: { ...a.profile, [id]: value } }));
  }, []);

  const setFinancialAnswer = useCallback((id: string, value: number) => {
    setAnswers(a => ({ ...a, financial: { ...a.financial, [id]: value } }));
  }, []);

  const setPersonalAnswer = useCallback((id: string, value: number) => {
    setAnswers(a => ({ ...a, personal: { ...a.personal, [id]: value } }));
  }, []);

  const { drs, categoryScores } = computeDRS(answers.drs);
  const financialScore = computeLeg(answers.financial, financialQuestions);
  const personalScore = computeLeg(answers.personal, personalQuestions);
  const tier = tierFor(drs);
  const band = confidenceBand(categoryScores, drs);
  const gaps = rankGaps(categoryScores);
  const alignmentText = alignment(drs, answers.profile, financialScore, personalScore);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 16 : -16 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -16 : 16 }),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 bg-paper">
        {step !== 'intro' && step !== 'results' && (
          <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8">
            <Stepper
              current={currentProgress}
              total={totalSteps}
              label={STEP_LABELS[step] ?? step}
            />
          </div>
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={reduced ? {} : variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >

            {step === 'intro' && (
              <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-10">
                <div className="space-y-4">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Diligence Readiness Score</p>
                  <h1 className="font-display text-3xl font-bold">Before we begin</h1>
                  <p className="text-mut leading-relaxed">Choose your mode. Both use the same scoring engine.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(['quick', 'full'] as const).map(m => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`text-left p-6 rounded-lg border-2 transition-all space-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass ${mode === m ? 'border-brass bg-brass/5' : 'border-line bg-card hover:border-brass-soft'}`}
                    >
                      <p className="font-medium">{m === 'quick' ? 'Quick' : 'Full'}</p>
                      <p className="text-sm text-mut">
                        {m === 'quick'
                          ? 'One signature question per DRS category. About 4 minutes.'
                          : 'Complete question bank. About 10 minutes. Highest accuracy.'}
                      </p>
                    </button>
                  ))}
                </div>
                <button
                  onClick={advance}
                  className="bg-ink text-paper font-medium px-6 py-3 rounded hover:bg-ink-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                >
                  Begin
                </button>
              </div>
            )}

            {step === 'profile' && (
              <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8">
                <div className="space-y-2">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Exit Profile</p>
                  <h2 className="font-display text-2xl font-bold">Your exit intent and priorities</h2>
                  <p className="text-sm text-mut">Unscored. Shapes your alignment verdict.</p>
                </div>
                <div className="space-y-8">
                  {exitProfileQuestions.map(q => (
                    <QuestionCard
                      key={q.id}
                      id={q.id}
                      text={q.text}
                      options={q.options}
                      selected={answers.profile[q.id]}
                      onChange={v => setProfileAnswer(q.id, v as string)}
                    />
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={back} className="px-5 py-2 border border-line rounded text-sm hover:bg-paper-2 transition-colors">Back</button>
                  <button
                    onClick={advance}
                    disabled={!canAdvance()}
                    className="flex-1 bg-ink text-paper font-medium py-2 rounded disabled:opacity-40 hover:bg-ink-2 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {DRS_CATS.includes(step as Step) && (() => {
              const cat = categories.find(c => c.code === step)!;
              const qs = getQuestionsForCategory(step, mode);
              return (
                <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8">
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-brass uppercase tracking-widest">{cat.code}: {cat.name}</p>
                    <p className="font-mono text-xs text-mut">Weight: {Math.round(cat.weight * 100)}%</p>
                  </div>
                  <div className="space-y-8">
                    {qs.map(q => (
                      <QuestionCard
                        key={q.id}
                        id={q.id}
                        text={q.text}
                        options={q.options}
                        selected={answers.drs[q.id]}
                        onChange={v => setDrsAnswer(q.id, Number(v))}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button onClick={back} className="px-5 py-2 border border-line rounded text-sm hover:bg-paper-2 transition-colors">Back</button>
                    <button
                      onClick={advance}
                      disabled={!canAdvance()}
                      className="flex-1 bg-ink text-paper font-medium py-2 rounded disabled:opacity-40 hover:bg-ink-2 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              );
            })()}

            {step === 'financial' && (
              <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8">
                <div className="space-y-2">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Financial Readiness</p>
                  <h2 className="font-display text-2xl font-bold">Your personal financial picture</h2>
                </div>
                <div className="space-y-8">
                  {financialQuestions.map(q => (
                    <QuestionCard
                      key={q.id}
                      id={q.id}
                      text={q.text}
                      options={q.options}
                      selected={answers.financial[q.id]}
                      onChange={v => setFinancialAnswer(q.id, Number(v))}
                    />
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={back} className="px-5 py-2 border border-line rounded text-sm hover:bg-paper-2 transition-colors">Back</button>
                  <button
                    onClick={advance}
                    disabled={!canAdvance()}
                    className="flex-1 bg-ink text-paper font-medium py-2 rounded disabled:opacity-40 hover:bg-ink-2 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 'personal' && (
              <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8">
                <div className="space-y-2">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Personal Readiness</p>
                  <h2 className="font-display text-2xl font-bold">Your readiness to close and move on</h2>
                </div>
                <div className="space-y-8">
                  {personalQuestions.map(q => (
                    <QuestionCard
                      key={q.id}
                      id={q.id}
                      text={q.text}
                      options={q.options}
                      selected={answers.personal[q.id]}
                      onChange={v => setPersonalAnswer(q.id, Number(v))}
                    />
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={back} className="px-5 py-2 border border-line rounded text-sm hover:bg-paper-2 transition-colors">Back</button>
                  <button
                    onClick={advance}
                    disabled={!canAdvance()}
                    className="flex-1 bg-ink text-paper font-medium py-2 rounded disabled:opacity-40 hover:bg-ink-2 transition-colors"
                  >
                    See my results
                  </button>
                </div>
              </div>
            )}

            {step === 'results' && (
              <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">
                {/* DRS Headline */}
                <div className="dark-card bg-ink text-paper rounded-xl p-8 space-y-6">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Diligence Readiness Score</p>
                  <div className="max-w-xs mx-auto">
                    <Gauge score={drs} size="lg" />
                  </div>
                  <div className="text-center space-y-3">
                    <p className="font-display text-2xl font-bold">{tier.label}</p>
                    <div className="font-mono text-xs text-mut space-x-4">
                      <span>Conservative {band.conservative}</span>
                      <span>Base {band.base}</span>
                      <span>Optimistic {band.optimistic}</span>
                    </div>
                  </div>
                </div>

                {/* Alignment verdict */}
                <div className="space-y-3">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Exit Alignment</p>
                  <p className="leading-relaxed text-ink">{alignmentText}</p>
                </div>

                {/* Three legs */}
                <div className="space-y-3">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Readiness Legs</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <ReadinessLeg label="Business DRS" score={drs} leg="business" />
                    <ReadinessLeg label="Financial" score={financialScore} leg="financial" />
                    <ReadinessLeg label="Personal" score={personalScore} leg="personal" />
                  </div>
                </div>

                {/* Dimension bars */}
                <div className="space-y-3">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Dimension Breakdown</p>
                  <div className="bg-card border border-line rounded-lg p-6 space-y-5">
                    {categories.map(cat => (
                      <DimensionBar
                        key={cat.code}
                        code={cat.code}
                        name={cat.name}
                        score={categoryScores[cat.code] ?? 0}
                        weight={cat.weight}
                      />
                    ))}
                  </div>
                </div>

                {/* Gaps */}
                <div className="space-y-3">
                  <p className="font-mono text-xs text-brass uppercase tracking-widest">Where to Start</p>
                  <div className="space-y-3">
                    {gaps.map((gap, i) => (
                      <GapCard
                        key={gap.code}
                        rank={i + 1}
                        code={gap.code}
                        name={gap.name}
                        score={gap.score}
                        copy={gap.copy}
                      />
                    ))}
                  </div>
                </div>

                {/* Lead form */}
                <div className="bg-card border border-line rounded-lg p-6 lead-form">
                  <LeadForm
                    payload={{
                      drs,
                      tier: tier.label,
                      financial: financialScore,
                      personal: personalScore,
                      profile: answers.profile,
                      categoryScores,
                    }}
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 no-print">
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2 border border-line rounded text-sm hover:bg-paper-2 transition-colors"
                  >
                    Save as PDF
                  </button>
                  <button
                    onClick={() => navigate('/assessment')}
                    className="px-5 py-2 border border-line rounded text-sm hover:bg-paper-2 transition-colors"
                  >
                    Retake
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-mut border-t border-line pt-6 leading-relaxed">
                  The DRS methodology is proprietary IP of Fracture Systems, licensed to Exit Blueprint.
                  The score is indicative, not a valuation, offer, or financial advice.
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
