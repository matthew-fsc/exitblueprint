import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#16201E',
        'ink-2':'#1F2C29',
        paper:  '#F4F1E9',
        'paper-2':'#EAE5D8',
        card:   '#FBFAF5',
        line:   '#CFC8B6',
        brass:  '#9A742B',
        'brass-soft':'#B9954A',
        emerald:'#1F6F5C',
        amber:  '#BE8418',
        clay:   '#A6402E',
        mut:    '#5C645F',
        'emerald-deep':'#2E8C73',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Hanken Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
