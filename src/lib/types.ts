export type QuestionOption = {
  label: string;
  value: number;
};

export type Question = {
  id: string;
  text: string;
  options: QuestionOption[];
  isSignature?: boolean;
};

export type Category = {
  code: string;
  name: string;
  weight: number;
  questions: Question[];
};

export type ExitProfileOption = {
  label: string;
  value: string;
};

export type ExitProfileQuestion = {
  id: string;
  text: string;
  options: ExitProfileOption[];
};

export type TierBand = {
  min: number;
  max: number;
  label: string;
  impliedMonths: number;
};

export type AssessmentAnswers = {
  profile: Record<string, string>;
  drs: Record<string, number>;
  financial: Record<string, number>;
  personal: Record<string, number>;
};

export type ScoreResult = {
  drs: number;
  tier: TierBand;
  categoryScores: Record<string, number>;
  financial: number;
  personal: number;
  confidenceBand: { conservative: number; base: number; optimistic: number };
  gaps: Array<{ code: string; name: string; score: number; weight: number; copy: string }>;
  alignment: string;
};
