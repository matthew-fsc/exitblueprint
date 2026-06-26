import { categories, financialQuestions, personalQuestions, tiers } from './model';
import type { AssessmentAnswers, TierBand } from './types';

export function computeCategoryScore(code: string, answers: Record<string, number>): number {
  const cat = categories.find(c => c.code === code)!;
  const answered = cat.questions.filter(q => answers[q.id] !== undefined);
  if (answered.length === 0) return 0;
  return answered.reduce((sum, q) => sum + answers[q.id], 0) / answered.length;
}

export function computeDRS(answers: Record<string, number>): { drs: number; categoryScores: Record<string, number> } {
  const categoryScores: Record<string, number> = {};
  let drs = 0;
  for (const cat of categories) {
    const score = computeCategoryScore(cat.code, answers);
    categoryScores[cat.code] = score;
    drs += score * cat.weight;
  }
  return { drs: Math.round(drs), categoryScores };
}

export function computeLeg(answers: Record<string, number>, questions: typeof financialQuestions): number {
  const answered = questions.filter(q => answers[q.id] !== undefined);
  if (answered.length === 0) return 0;
  const sum = answered.reduce((s, q) => s + answers[q.id], 0);
  return Math.round(sum / answered.length);
}

export function tierFor(score: number): TierBand {
  return tiers.find(t => score >= t.min && score <= t.max) ?? tiers[tiers.length - 1];
}

export function confidenceBand(categoryScores: Record<string, number>, drs: number): { conservative: number; base: number; optimistic: number } {
  const scores = Object.values(categoryScores);
  const mean = scores.reduce((s, v) => s + v, 0) / scores.length;
  const sd = Math.sqrt(scores.reduce((s, v) => s + (v - mean) ** 2, 0) / scores.length);
  const width = Math.min(11, Math.max(4, Math.round(sd / 5 + 4)));
  return {
    conservative: Math.max(0, drs - width),
    base: drs,
    optimistic: Math.min(100, drs + Math.ceil(width * 0.65)),
  };
}

const gapCopy: Record<string, { critical: string; tighten: string }> = {
  RQ: {
    critical: 'Convert your top accounts to signed MSAs and shift project work toward retainer or recurring terms. Recurring revenue is the single largest lever on the multiple.',
    tighten: 'Tighten contract coverage on your largest accounts and document renewal terms before a buyer asks for them.',
  },
  FI: {
    critical: 'Commission a CPA review or quality-of-earnings prep and build a documented, classified addback schedule. Undocumented addbacks get disallowed and pull EBITDA down.',
    tighten: 'Move to a monthly close and reconcile your statements to your tax returns so the numbers survive a quality-of-earnings review.',
  },
  OI: {
    critical: 'Document core SOPs and pull the owner out of daily decision paths. Owner dependence is the most common reason a buyer discounts or restructures the deal.',
    tighten: 'Build backup for any single point of failure and delegate decision authority into a second layer of leadership.',
  },
  CR: {
    critical: 'Reduce concentration by growing the long tail and lock key accounts under multi-year contracts. Concentration above 20% invites escrow and earnouts.',
    tighten: 'Put renewal terms and signed contracts around your top accounts to harden retention against scrutiny.',
  },
  MT: {
    critical: 'Build a leadership layer below the owner and add retention incentives that survive a sale. Buyers price the team that stays, not the one that leaves.',
    tighten: 'Formalize incentives and a succession path so the business demonstrably runs without you.',
  },
  GD: {
    critical: 'Document a credible, quantified growth pipeline and name the expansion levers a new owner can pull. Buyers pay for a growth story they can run.',
    tighten: 'Sharpen your differentiation and quantify the pipeline so growth reads as repeatable, not anecdotal.',
  },
};

export function rankGaps(categoryScores: Record<string, number>): Array<{ code: string; name: string; score: number; weight: number; copy: string }> {
  return categories
    .map(cat => {
      const score = categoryScores[cat.code] ?? 0;
      const shortfall = (100 - score) * cat.weight;
      const copy = score < 50 ? gapCopy[cat.code].critical : gapCopy[cat.code].tighten;
      return { code: cat.code, name: cat.name, score, weight: cat.weight, shortfall, copy };
    })
    .sort((a, b) => b.shortfall - a.shortfall)
    .slice(0, 3)
    .map(({ shortfall: _s, ...rest }) => rest);
}

export function alignment(
  drs: number,
  profile: Record<string, string>,
  financial: number,
  personal: number,
): string {
  const tier = tierFor(drs);
  const implied = tier.impliedMonths;
  const timelineMap: Record<string, number | null> = {
    under_1: 12, '1_to_2': 24, '3_to_5': 48, '5_plus': 60, exploring: null,
  };
  const stated = timelineMap[profile['EP4']] ?? null;
  const priority = profile['EP3'];

  const parts: string[] = [];

  if (stated !== null && implied > stated) {
    const gap = implied - stated;
    parts.push(`Your timeline is compressed. At your current score, the business needs roughly ${implied} months of preparation. Your stated window is ${stated} months: a ${gap}-month gap. Focus first on your top two initiatives to close it as fast as possible.`);
  } else if (stated !== null && implied < stated - 12) {
    parts.push(`You have runway. The business is on track for your timeline. Use the time now to move the multiple while you still can: value-creation work done early compounds through the score and the sale price.`);
  } else if (stated !== null) {
    parts.push(`Your timeline and readiness are roughly aligned. Sustained, sequential work on the gaps below will keep you on track.`);
  }

  if (priority === 'speed' && drs < 70) {
    parts.push(`You ranked "Exit quickly" as your top priority, but the business is not yet Market Ready. Speed and price are in tension here. Compressing the timeline increases the probability of a re-trade or a lower multiple.`);
  } else if (priority === 'price' && drs < 70) {
    parts.push(`You ranked "Maximize price" as your top priority. The gap between your current score and Market Ready is the gap between your asking price and what a buyer will defend. Closing it is the work.`);
  } else if (priority === 'employees' || priority === 'legacy') {
    parts.push(`Buyer type and deal structure matter as much as price for your stated priority. A strategic acquirer or an employee buyout will preserve what you have built differently than a financial buyer. Build the score and pick the right buyer.`);
  }

  if (financial < drs - 15) {
    parts.push(`Your Financial Readiness score is materially below your DRS. A sale-ready business does not close if the owner's personal finances are not aligned with the outcome.`);
  }
  if (personal < drs - 15) {
    parts.push(`Your Personal Readiness score is materially below your DRS. Owner ambivalence is one of the most common reasons deals stall after a letter of intent.`);
  }

  return parts.join(' ') || 'Complete the full assessment for a personalized alignment verdict.';
}

export type { AssessmentAnswers };
