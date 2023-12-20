import type { Config } from 'tailwindcss';

export default {
  content: ['./src/lib/**/*.{ts,tsx}'],
  theme: {
    aspectRatio: {
      '3/1': '3 / 1',
      '2/1': '2 / 1',
      '16/9': '16 / 9',
      '5/3': '5 / 3',
      '4/3': '4 / 3',
      '5/4': '5 / 4',
      '1/1': '1 / 1',
    },
    borderRadius: {
      's': '5px',
      'm': '10px',
      'lg': '30px',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '4px',
    },
    colors: {
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
      grey: '#53575a',
      chateau: '#a2a9ad',
      brumosa: '#ccd2d3',
      mercury: '#e5e8e9',
      azure: '#f5f6f6',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Hoves', 'sans-serif']
    },
    fontSize: {
      // 115px.
      'colossus': ['7.1875rem', {
        lineHeight: '110%',
        letterSpacing: '-0.07px',
        fontWeight: '600',
      }],
      // 80px.
      'uber': ['5rem', { 
        lineHeight: '110%',
        letterSpacing: '-0.7px',
        fontWeight: '600',
      }],
      // 60px.
      'hero-1': ['3.75rem', {
        lineHeight: '110%',
        letterSpacing: '-1px',
        fontWeight: '600',
      }],
      // 52px.
      'hero-2': ['3.25rem' , {
        lineHeight: '110%',
        letterSpacing: '-0.6px',
        fontWeight: '600',
      }],
      // 44px.
      'display': ['2.75rem', {
        lineHeight: '110%',
        letterSpacing: '-0.7px',
      }],
      // 36px.
      'h1': ['2.25rem', {
        lineHeight: '110%',
        letterSpacing: '-0.4px',
      }],
      // 28px.
      'h2': ['1.75rem', {
        lineHeight: '110%',
        letterSpacing: '-0.2px',
      }],
      // 24px.
      'h3': ['1.5rem', {
        lineHeight: '130%',
        letterSpacing: '-0.2px',
      }],
      // 20px.
      'h4': ['1.25rem', {
        lineHeight: '130%',
        letterSpacing: '-0.4px',
      }],
      // 15px.
      'h5': ['0.9375rem', {
        lineHeight: '130%',
        letterSpacing: '-0.2px',
      }],
      // 13px.
      'h6': ['0.8125rem', {
        lineHeight: '130%',
        letterSpacing: '-0.2px',
      }],
      // 24px.
      'body-1': ['1.5rem', {
        lineHeight: '130%',
        letterSpacing: '-0.2px',
      }],
      // 18px.
      'body-2': ['1.125rem', {
        lineHeight: '140%',
        letterSpacing: '-0.1px',
      }],
      // 16px.
      'body-3': ['1rem', {
        lineHeight: '140%',
        letterSpacing: '-0.1px',
      }],
      // 14px.
      'body-4': ['0.875rem', {
        lineHeight: '150%',
        fontWeight: '500',
      }],
      // 10px.
      'body-5': ['0.625rem', {
        lineHeight: '160%',
      }],
    },
    height: {
      'xxs': '5px',
      'xs': '10px',
      'sm': '15px',
      'md': '20px',
      'lg': '30px',
      'xl': '50px',
      'xxl': '80px',
      '3xl': '120px',
    },
    lineHeight: {
      'none': '1',
      'tight': '1.1',
      'snug': '1.3',
      'normal': '1.4',
      'relaxed': '1.5',
    },
    screens: {
      'sm': '750px',
      'md': '950px',
      'lg': '1240px',
      'xl': '1600px',
    },
    spacing: {
      'xs': '5px',
      'sm': '10px',
      'md': '20px',
      'lg': '40px',
      'xl': '60px',
      'xxl': '120px',
      '3xl': '160px',
    },
    width: {
      'xxs': '5px',
      'xs': '10px',
      'sm': '15px',
      'md': '20px',
      'lg': '30px',
      'xl': '50px',
      'xxl': '80px',
      '3xl': '120px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
