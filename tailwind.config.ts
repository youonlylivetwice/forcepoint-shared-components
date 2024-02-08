import type { Config } from 'tailwindcss';
import themePreset from './tailwind-theme-preset';

export default {
  presets: [themePreset],
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wysiwyg',
    }),
  ],
  content: ['./src/lib/**/*.{ts,tsx}'],
} satisfies Config;
