import type { Config } from 'tailwindcss';
import themePreset from './tailwind-theme-preset';

export default {
  presets: [themePreset],
  content: ['./src/lib/**/*.{ts,tsx}'],
} satisfies Config;
