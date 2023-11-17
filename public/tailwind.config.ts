import type { Config } from 'tailwindcss';

export default {
  theme: {
    colors: {
      none: 'none',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1d252c',
      white: '#ffffff',
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
      chateau: '#a2a9ad',
      brumosa: '#ccd2d3',
      mercury: '#e5e8e9',
      azure: '#f5f6f6',
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '5/4': '5 / 4',
      },
    },
  },
  plugins: [],
} satisfies Config;
