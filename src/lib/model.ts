import type { Category, Question, ExitProfileQuestion, TierBand } from './types';

export const categories: Category[] = [
  {
    code: 'RQ',
    name: 'Revenue Quality',
    weight: 0.25,
    questions: [
      {
        id: 'RQ1', isSignature: true,
        text: 'What share of active customers have a signed contract, MSA, or retainer in place?',
        options: [
          { label: '>75%', value: 100 },
          { label: '50-75%', value: 70 },
          { label: '25-50%', value: 40 },
          { label: '<25%', value: 10 },
        ],
      },
      {
        id: 'RQ2',
        text: 'What share of revenue is contractually recurring?',
        options: [
          { label: '>60%', value: 100 },
          { label: '30-60%', value: 70 },
          { label: '10-30%', value: 40 },
          { label: '<10%', value: 15 },
        ],
      },
      {
        id: 'RQ3',
        text: "What share of revenue depends on the owner's personal relationships?",
        options: [
          { label: '<10%', value: 100 },
          { label: '10-25%', value: 65 },
          { label: '25-50%', value: 35 },
          { label: '>50%', value: 10 },
        ],
      },
      {
        id: 'RQ4',
        text: 'If you raised prices 10 to 15%, what would happen?',
        options: [
          { label: 'Minimal churn, already tested', value: 100 },
          { label: 'Some churn, manageable', value: 65 },
          { label: 'Significant risk, untested', value: 30 },
          { label: 'Would likely lose major accounts', value: 10 },
        ],
      },
      {
        id: 'RQ5',
        text: 'Net revenue retention over the last three years?',
        options: [
          { label: 'Above 100%, net expansion', value: 100 },
          { label: '95-100%', value: 75 },
          { label: '85-95%', value: 45 },
          { label: 'Below 85%', value: 15 },
        ],
      },
    ],
  },
  {
    code: 'FI',
    name: 'Financial Integrity',
    weight: 0.20,
    questions: [
      {
        id: 'FI1', isSignature: true,
        text: 'Highest level of outside review on your financials?',
        options: [
          { label: 'Audited', value: 100 },
          { label: 'Reviewed by a CPA', value: 75 },
          { label: 'Compiled', value: 45 },
          { label: 'Internal or owner-kept only', value: 15 },
        ],
      },
      {
        id: 'FI2',
        text: 'How much clean financial history can you provide?',
        options: [
          { label: '36+ months, clean', value: 100 },
          { label: '36 months with gaps', value: 60 },
          { label: '24 months', value: 35 },
          { label: 'Under 24 or disorganized', value: 10 },
        ],
      },
      {
        id: 'FI3',
        text: "Are owner addbacks and one-time items documented and defensible?",
        options: [
          { label: 'Fully documented with support', value: 100 },
          { label: 'Mostly, some gaps', value: 65 },
          { label: "Informal, in the owner's head", value: 30 },
          { label: 'Not tracked', value: 10 },
        ],
      },
      {
        id: 'FI4',
        text: 'Related-party transactions with owner-affiliated entities?',
        options: [
          { label: "None, or fully disclosed and arm's length", value: 100 },
          { label: 'Some, documented', value: 60 },
          { label: 'Some, undocumented', value: 25 },
          { label: 'Significant or unclear', value: 10 },
        ],
      },
      {
        id: 'FI5',
        text: 'Books cadence and basis?',
        options: [
          { label: 'Monthly close, accrual, reconciled', value: 100 },
          { label: 'Quarterly', value: 65 },
          { label: 'Annually at tax time', value: 30 },
          { label: 'Behind or unreconciled', value: 10 },
        ],
      },
    ],
  },
  {
    code: 'OI',
    name: 'Operational Independence',
    weight: 0.20,
    questions: [
      {
        id: 'OI1', isSignature: true,
        text: 'If the owner were unavailable for 90 days, the business would...',
        options: [
          { label: 'Run normally', value: 100 },
          { label: 'Run with minor friction', value: 70 },
          { label: 'Struggle in key areas', value: 35 },
          { label: 'Not function', value: 10 },
        ],
      },
      {
        id: 'OI2',
        text: 'Owner hours per week in day-to-day operations?',
        options: [
          { label: 'Under 10', value: 100 },
          { label: '10-25', value: 70 },
          { label: '25-40', value: 40 },
          { label: '40+', value: 10 },
        ],
      },
      {
        id: 'OI3',
        text: 'Share of core processes with written SOPs (onboarding, delivery, account management, billing)?',
        options: [
          { label: 'Over 75%', value: 100 },
          { label: '50-75%', value: 65 },
          { label: '25-50%', value: 35 },
          { label: 'Under 25%', value: 10 },
        ],
      },
      {
        id: 'OI4',
        text: 'How many core functions (sales, delivery, finance, operations) have a manager who could run them without the owner?',
        options: [
          { label: 'All four', value: 100 },
          { label: 'Two to three', value: 65 },
          { label: 'One', value: 35 },
          { label: 'None', value: 10 },
        ],
      },
      {
        id: 'OI5',
        text: 'Are customer relationships institutionally managed or founder-owned?',
        options: [
          { label: 'Institutionally managed', value: 100 },
          { label: 'Mostly institutional', value: 65 },
          { label: 'Mixed', value: 35 },
          { label: 'Founder-owned', value: 10 },
        ],
      },
    ],
  },
  {
    code: 'CR',
    name: 'Customer Risk',
    weight: 0.15,
    questions: [
      {
        id: 'CR1', isSignature: true,
        text: 'Largest single customer as a share of revenue?',
        options: [
          { label: '<10%', value: 100 },
          { label: '10-20%', value: 70 },
          { label: '20-35%', value: 35 },
          { label: '>35%', value: 10 },
        ],
      },
      {
        id: 'CR2',
        text: 'Top five customers as a share of revenue?',
        options: [
          { label: '<40%', value: 100 },
          { label: '40-60%', value: 65 },
          { label: '60-80%', value: 35 },
          { label: '>80%', value: 10 },
        ],
      },
      {
        id: 'CR3',
        text: 'Change-of-control or termination-for-convenience clauses in key contracts?',
        options: [
          { label: 'None', value: 100 },
          { label: 'A few, low risk', value: 65 },
          { label: 'Some, material', value: 30 },
          { label: 'Widespread', value: 10 },
        ],
      },
      {
        id: 'CR4',
        text: 'What governs your customer relationships?',
        options: [
          { label: 'Mostly MSAs or multi-year', value: 100 },
          { label: 'Annual agreements', value: 65 },
          { label: 'POs or month-to-month', value: 35 },
          { label: 'Verbal', value: 10 },
        ],
      },
      {
        id: 'CR5',
        text: 'Customer churn over the last three years?',
        options: [
          { label: 'Low and improving', value: 100 },
          { label: 'Low and stable', value: 70 },
          { label: 'Moderate', value: 35 },
          { label: 'High', value: 10 },
        ],
      },
    ],
  },
  {
    code: 'MT',
    name: 'Management and Team',
    weight: 0.10,
    questions: [
      {
        id: 'MT1', isSignature: true,
        text: 'Is there a leadership layer below the owner?',
        options: [
          { label: 'Capable and tested', value: 100 },
          { label: 'Forming', value: 60 },
          { label: 'Thin', value: 30 },
          { label: 'None', value: 10 },
        ],
      },
      {
        id: 'MT2',
        text: 'Share of key employees under non-compete or non-solicit agreements?',
        options: [
          { label: 'All key people', value: 100 },
          { label: 'Most', value: 60 },
          { label: 'Some', value: 30 },
          { label: 'None', value: 10 },
        ],
      },
      {
        id: 'MT3',
        text: 'Voluntary turnover of non-owner employees over the last 12 months?',
        options: [
          { label: 'Very low', value: 100 },
          { label: 'Low', value: 70 },
          { label: 'Moderate', value: 35 },
          { label: 'High', value: 10 },
        ],
      },
      {
        id: 'MT4',
        text: 'Financial leadership in place?',
        options: [
          { label: 'Dedicated CFO or controller', value: 100 },
          { label: 'Fractional or outsourced', value: 65 },
          { label: 'Bookkeeper only', value: 35 },
          { label: 'Owner keeps the numbers', value: 15 },
        ],
      },
      {
        id: 'MT5',
        text: 'Are key people retained with incentives that survive a sale?',
        options: [
          { label: 'Yes, in place', value: 100 },
          { label: 'Partially', value: 55 },
          { label: 'Informal only', value: 30 },
          { label: 'None', value: 10 },
        ],
      },
    ],
  },
  {
    code: 'GD',
    name: 'Growth Drivers',
    weight: 0.10,
    questions: [
      {
        id: 'GD1', isSignature: true,
        text: 'Do you have a documented, credible growth pipeline (need, budget, timeline)?',
        options: [
          { label: 'Yes, quantified', value: 100 },
          { label: 'Directional', value: 60 },
          { label: 'Anecdotal', value: 30 },
          { label: 'None', value: 10 },
        ],
      },
      {
        id: 'GD2',
        text: 'Revenue trend over the last three years?',
        options: [
          { label: 'Consistent growth', value: 100 },
          { label: 'Flat to modest growth', value: 65 },
          { label: 'Choppy', value: 35 },
          { label: 'Declining', value: 10 },
        ],
      },
      {
        id: 'GD3',
        text: 'Standardized and repeatable vs fully custom work?',
        options: [
          { label: 'Mostly standardized', value: 100 },
          { label: 'Balanced', value: 65 },
          { label: 'Mostly custom', value: 35 },
          { label: 'Fully bespoke', value: 20 },
        ],
      },
      {
        id: 'GD4',
        text: 'Clear expansion levers a new owner could pull (geographies, products, channels)?',
        options: [
          { label: 'Several identified', value: 100 },
          { label: 'A couple', value: 60 },
          { label: 'Vague', value: 30 },
          { label: 'None', value: 10 },
        ],
      },
      {
        id: 'GD5',
        text: 'Market positioning?',
        options: [
          { label: 'Differentiated leader', value: 100 },
          { label: 'Strong competitor', value: 70 },
          { label: 'Undifferentiated', value: 35 },
          { label: 'Losing ground', value: 10 },
        ],
      },
    ],
  },
];

export const financialQuestions: Question[] = [
  {
    id: 'FR1',
    text: 'How dependent is your future lifestyle on a specific sale price?',
    options: [
      { label: 'Independent of any single outcome', value: 100 },
      { label: 'Some flexibility', value: 65 },
      { label: 'Heavily dependent', value: 30 },
      { label: 'Entirely dependent', value: 10 },
    ],
  },
  {
    id: 'FR2',
    text: 'Do you have sufficient assets outside the business to retire?',
    options: [
      { label: 'Yes, comfortably', value: 100 },
      { label: 'Mostly', value: 65 },
      { label: 'Partially', value: 35 },
      { label: 'No', value: 10 },
    ],
  },
  {
    id: 'FR3',
    text: 'Confidence that the current value supports your goals?',
    options: [
      { label: 'High, recently valued', value: 100 },
      { label: 'Some', value: 60 },
      { label: 'Low', value: 30 },
      { label: 'Never formally valued', value: 15 },
    ],
  },
  {
    id: 'FR4',
    text: 'Are personal debt and guarantees consistent with your exit timeline?',
    options: [
      { label: 'Fully aligned', value: 100 },
      { label: 'Mostly', value: 65 },
      { label: 'Some tension', value: 30 },
      { label: 'Misaligned', value: 10 },
    ],
  },
  {
    id: 'FR5',
    text: 'How much ongoing income do you need from the business after exit?',
    options: [
      { label: 'None needed', value: 100 },
      { label: 'Some, flexible', value: 65 },
      { label: 'Significant', value: 35 },
      { label: 'Fully reliant', value: 15 },
    ],
  },
];

export const personalQuestions: Question[] = [
  {
    id: 'PR1',
    text: 'Clarity on staying involved vs leaving after the sale?',
    options: [
      { label: 'Clear and settled', value: 100 },
      { label: 'Leaning one way', value: 65 },
      { label: 'Unsure', value: 35 },
      { label: 'Conflicted', value: 15 },
    ],
  },
  {
    id: 'PR2',
    text: 'Defined role post-close and a transition plan?',
    options: [
      { label: 'Defined plan', value: 100 },
      { label: 'Rough idea', value: 60 },
      { label: 'None yet', value: 30 },
      { label: 'Would not disengage', value: 10 },
    ],
  },
  {
    id: 'PR3',
    text: 'A clear next chapter beyond the business?',
    options: [
      { label: 'Clear', value: 100 },
      { label: 'Some idea', value: 60 },
      { label: 'Vague', value: 30 },
      { label: 'None', value: 15 },
    ],
  },
  {
    id: 'PR4',
    text: 'Clarity of your exit timeline?',
    options: [
      { label: 'Specific timeline', value: 100 },
      { label: 'A range', value: 65 },
      { label: 'Loose', value: 35 },
      { label: 'Undecided', value: 15 },
    ],
  },
];

export const exitProfileQuestions: ExitProfileQuestion[] = [
  {
    id: 'EP1',
    text: 'After the sale, do you intend to:',
    options: [
      { label: 'Stay involved', value: 'stay' },
      { label: 'Transition out over time', value: 'transition' },
      { label: 'Fully exit', value: 'exit' },
      { label: 'Step away but keep ownership', value: 'step_away' },
    ],
  },
  {
    id: 'EP2',
    text: 'Preferred exit path:',
    options: [
      { label: 'Third party', value: 'third_party' },
      { label: 'Management or employees', value: 'mbo' },
      { label: 'Partner', value: 'partner' },
      { label: 'Family', value: 'family' },
      { label: 'Recapitalize and step away', value: 'recap' },
    ],
  },
  {
    id: 'EP3',
    text: 'What matters most in your exit?',
    options: [
      { label: 'Maximize price', value: 'price' },
      { label: 'Protect employees', value: 'employees' },
      { label: 'Preserve legacy', value: 'legacy' },
      { label: 'Maintain family ownership', value: 'family_ownership' },
      { label: 'Exit quickly', value: 'speed' },
      { label: 'Reduce risk', value: 'risk' },
      { label: 'Create ongoing income', value: 'income' },
    ],
  },
  {
    id: 'EP4',
    text: 'Target timeline:',
    options: [
      { label: 'Under 1 year', value: 'under_1' },
      { label: '1 to 2 years', value: '1_to_2' },
      { label: '3 to 5 years', value: '3_to_5' },
      { label: '5+ years', value: '5_plus' },
      { label: 'Just exploring', value: 'exploring' },
    ],
  },
];

export const tiers: TierBand[] = [
  { min: 85, max: 100, label: 'Diligence Ready', impliedMonths: 0 },
  { min: 70, max: 84,  label: 'Market Ready',    impliedMonths: 6 },
  { min: 55, max: 69,  label: 'Conditional',     impliedMonths: 12 },
  { min: 40, max: 54,  label: 'High Risk',        impliedMonths: 18 },
  { min: 0,  max: 39,  label: 'Pre-Diligence Required', impliedMonths: 24 },
];
