import { describe, it, expect } from 'vitest';
import { computeDRS, computeLeg, tierFor, confidenceBand, rankGaps, alignment } from './score';
import { categories, financialQuestions } from './model';

describe('scoring engine', () => {
  it('weights sum to 1.0', () => {
    const sum = categories.reduce((s, c) => s + c.weight, 0);
    expect(sum).toBeCloseTo(1.0);
  });

  it('all-best yields 100 DRS', () => {
    const answers: Record<string, number> = {};
    for (const cat of categories) {
      for (const q of cat.questions) {
        answers[q.id] = q.options[0].value;
      }
    }
    const { drs } = computeDRS(answers);
    expect(drs).toBe(100);
  });

  it('all-worst yields a floor below 30', () => {
    const answers: Record<string, number> = {};
    for (const cat of categories) {
      for (const q of cat.questions) {
        answers[q.id] = q.options[q.options.length - 1].value;
      }
    }
    const { drs } = computeDRS(answers);
    expect(drs).toBeGreaterThanOrEqual(0);
    expect(drs).toBeLessThan(30);
  });

  it('tier bands cover 0-100', () => {
    expect(tierFor(100).label).toBe('Diligence Ready');
    expect(tierFor(85).label).toBe('Diligence Ready');
    expect(tierFor(84).label).toBe('Market Ready');
    expect(tierFor(70).label).toBe('Market Ready');
    expect(tierFor(55).label).toBe('Conditional');
    expect(tierFor(40).label).toBe('High Risk');
    expect(tierFor(39).label).toBe('Pre-Diligence Required');
    expect(tierFor(0).label).toBe('Pre-Diligence Required');
  });

  it('confidence band math', () => {
    const catScores = { RQ: 80, FI: 80, OI: 80, CR: 80, MT: 80, GD: 80 };
    const band = confidenceBand(catScores, 80);
    expect(band.conservative).toBe(76);
    expect(band.base).toBe(80);
    expect(band.optimistic).toBe(83);
  });

  it('gap ordering by weighted shortfall', () => {
    const catScores = { RQ: 20, FI: 90, OI: 90, CR: 90, MT: 90, GD: 90 };
    const gaps = rankGaps(catScores);
    expect(gaps[0].code).toBe('RQ');
  });

  it('alignment flags compressed timeline', () => {
    const result = alignment(30, { EP4: 'under_1', EP3: 'price' }, 80, 80);
    expect(result).toMatch(/compressed/i);
  });

  it('computeLeg returns correct average', () => {
    const answers: Record<string, number> = {};
    financialQuestions.forEach(q => { answers[q.id] = 100; });
    expect(computeLeg(answers, financialQuestions)).toBe(100);
  });
});
