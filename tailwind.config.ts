import type { Config } from 'tailwindcss';

export default {
  content: ['./src/lib/**/*.{ts,tsx}'],
  theme: {
    colors: {
      none: 'none',
      transparent: 'transparent',
      current: 'currentColor',
      navy: '#003654',
      teal: '#00af9a',
      violette: '#3d1153',
      viola: '#a30080',
      veridian: '#007565',
      spring: '#69bc00',
      blue: '#023e8a',
      sky: '#36b0c9',
      sandwisp: '#f6dfa4',
      sol: '#fa5300',
      crimson: '#da1b2e',
      black: '#1d252c',
      chateau: '#a2a9ad',
      brumosa: '#ccd2d3',
      mercury: '#e5e8e9',
      azure: '#f5f6f6',
      white: '#ffffff',
    },
    spacing: {
      xs: '5px',
      sm: '10px',
      md: '20px',
      lg: '40px',
      xl: '80px',
      xxl: '120px',
      '3xl': '160px',
    },
    lineHeight: {
      'none': '1',
      'tight': '1.1',
      'snug': '1.3',
      'normal': '1.4',
      'relaxed': '1.5'
    },
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '4/3': '4 / 3',
        '5/3': '5 / 3',
        '5/4': '5 / 4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
