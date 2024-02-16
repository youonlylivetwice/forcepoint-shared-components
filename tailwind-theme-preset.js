/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
/** @type {import('tailwindcss').Config} */
module.exports = {
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
      s: '5px',
      m: '10px',
      lg: '30px',
    },
    borderWidth: {
      DEFAULT: '1px',
      none: '0',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      sm: '1px',
      md: '2px',
      lg: '3px',
      xl: '4px',
      xxl: '5px',
      '3xl': '6px',
    },
    colors: {
      none: 'none',
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      navy: {
        DEFAULT: '#003654',
        bright: '#4c7287',
        brighter: '#99aeba',
        pale: '#e5eaed',
        dark: '#002b43',
        darker: '#001b2a',
        shade: '#001019',
      },
      teal: {
        DEFAULT: '#00af9a',
        bright: '#4cc7b8',
        brighter: '#b2e7e0',
        pale: '#e5f7f4',
        dark: '#007a6b',
        darker: '#00463d',
        shade: '#00231e',
      },
      violette: {
        DEFAULT: '#3d1152',
        bright: '#735584',
        brighter: '#ad9bb8',
        pale: '#d5ccdb',
        dark: '#2b093b',
        darker: '#1a0425',
        shade: '#0a0111',
      },
      viola: {
        DEFAULT: '#a30080',
        bright: '#be4ca6',
        brighter: '#da99cc',
        pale: '#f5e5f2',
        dark: '#720059',
        darker: '#410033',
        shade: '#200019',
      },
      veridian: {
        DEFAULT: '#007565',
        bright: '#329083',
        brighter: '#7fbab2',
        pale: '#cce3e0',
        dark: '#005146',
        darker: '#002e28',
        shade: '#001714',
      },
      spring: {
        DEFAULT: '#69bc00',
        bright: '#87c932',
        brighter: '#b4dd7f',
        pale: '#e1f1cc',
        dark: '#498300',
        darker: '#2a4b00',
        shade: '#152500',
      },
      blue: {
        DEFAULT: '#023e8a',
        bright: '#3464a1',
        brighter: '#809ec4',
        pale: '#e5ebf3',
        dark: '#01316e',
        darker: '#011f45',
        shade: '#000c1b',
      },
      sky: {
        DEFAULT: '#36b0c9',
        bright: '#5ebfd3',
        brighter: '#9ad7e4',
        pale: '#eaf7f9',
        dark: '#2b8ca0',
        darker: '#1b5864',
        shade: '#0a2328',
      },
      sandwisp: {
        DEFAULT: '#f6dfa4',
        bright: '#f7e5b6',
        brighter: '#faefd1',
        pale: '#fdf8ec',
        dark: '#c4b283',
        darker: '#7b6f52',
        shade: '#312c20',
      },
      sol: {
        DEFAULT: '#fa5300',
        bright: '#fb7532',
        brighter: '#fca97f',
        pale: '#feede5',
        dark: '#af3a00',
        darker: '#642100',
        shade: '#321000',
      },
      crimson: {
        DEFAULT: '#da1b2e',
        bright: '#e14857',
        brighter: '#ec8d96',
        pale: '#fbe8ea',
        dark: '#a2111f',
        darker: '#6c0812',
        shade: '#250102',
      },
      black: {
        DEFAULT: '#1d252c',
        bright: '#6e7479',
        dark: '#13191e',
      },
      grey: {
        DEFAULT: '#53575a',
        bright: '#949698',
        dark: '#3b3e41',
      },
      chateau: {
        DEFAULT: '#a2a9ad',
        bright: '#c6cbcd',
        dark: '#777c7f',
      },
      brumosa: '#ccd2d3',
      mercury: {
        DEFAULT: '#e5e8e9',
        bright: '#edeff0',
        dark: '#8e9090',
      },
      azure: {
        DEFAULT: '#f5f6f6',
        bright: '#f8f9f9',
        dark: '#b6b7b7',
      },
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Hoves', 'sans-serif'],
    },
    fontSize: {
      // 115px.
      colossus: [
        '7.1875rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.07px',
          fontWeight: '600',
        },
      ],
      // 80px.
      uber: [
        '5rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.7px',
          fontWeight: '600',
        },
      ],
      // 60px.
      'hero-1': [
        '3.75rem',
        {
          lineHeight: '110%',
          letterSpacing: '-1px',
          fontWeight: '600',
        },
      ],
      // 52px.
      'hero-2': [
        '3.25rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.6px',
          fontWeight: '600',
        },
      ],
      // 44px.
      display: [
        '2.75rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.7px',
        },
      ],
      // 36px.
      h1: [
        '2.25rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.4px',
        },
      ],
      // 28px.
      h2: [
        '1.75rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.2px',
        },
      ],
      // 24px.
      h3: [
        '1.5rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.2px',
        },
      ],
      // 20px.
      h4: [
        '1.25rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.4px',
        },
      ],
      // 15px.
      h5: [
        '0.9375rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.2px',
        },
      ],
      // 13px.
      h6: [
        '0.8125rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.2px',
        },
      ],
      // 24px.
      'body-1': [
        '1.5rem',
        {
          lineHeight: '130%',
          letterSpacing: '-0.2px',
        },
      ],
      // 18px.
      'body-2': [
        '1.125rem',
        {
          lineHeight: '140%',
          letterSpacing: '-0.1px',
        },
      ],
      // 16px.
      'body-3': [
        '1rem',
        {
          lineHeight: '140%',
          letterSpacing: '-0.1px',
        },
      ],
      // 14px.
      'body-4': [
        '0.875rem',
        {
          lineHeight: '150%',
          fontWeight: '500',
        },
      ],
      // 10px.
      'body-5': [
        '0.625rem',
        {
          lineHeight: '160%',
        },
      ],
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.3',
      normal: '1.4',
      relaxed: '1.5',
    },
    screens: {
      sm: '750px',
      md: '950px',
      lg: '1240px',
      xl: '1600px',
      menu: '1156px',
    },
    extend: {
      spacing: {
        xs: '5px',
        sm: '10px',
        md: '20px',
        lg: '40px',
        xl: '80px',
        xxl: '120px',
        '3xl': '160px',
      },
      width: {
        xxs: '5px',
        xs: '10px',
        sm: '15px',
        md: '20px',
        lg: '30px',
        xl: '50px',
        xxl: '80px',
        '3xl': '120px',
      },
      height: {
        xxs: '5px',
        xs: '10px',
        sm: '15px',
        md: '20px',
        lg: '30px',
        xl: '50px',
        xxl: '80px',
        '3xl': '120px',
      },
      boxShadow: {
        md: '0px 4px 10px 0px rgba(29, 37, 44, 0.20)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wysiwyg',
    }),
  ],
};
