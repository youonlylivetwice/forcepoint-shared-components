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
      transparent: 'transparent',
      current: 'currentColor',
      navy: {
        DEFAULT: '#003654',
        bright: '#4C7287',
        brighter: '#99AEBA',
        pale: '#E5EAED',
        dark: '#002B43',
        darker: '#001B2A',
        shade: '#001019',
      },
      teal: {
        DEFAULT: '#00AF9A',
        bright: '#4CC7B8',
        brighter: '#B2E7E0',
        pale: '#E5F7F4',
        dark: '#007A6B',
        darker: '#00463D',
        shade: '#00231E',
      },
      violette: {
        DEFAULT: '#3D1152',
        bright: '#735584',
        brighter: '#AD9BB8',
        pale: '#D5CCDB',
        dark: '#2B093B',
        darker: '#1A0425',
        shade: '#0A0111',
      },
      viola: {
        DEFAULT: '#A30080',
        bright: '#BE4CA6',
        brighter: '#DA99CC',
        pale: '#F5E5F2',
        dark: '#720059',
        darker: '#410033',
        shade: '#200019',
      },
      veridian: {
        DEFAULT: '#007565',
        bright: '#329083',
        brighter: '#7FBAB2',
        pale: '#CCE3E0',
        dark: '#005146',
        darker: '#002E28',
        shade: '#001714',
      },
      spring: {
        DEFAULT: '#69BC00',
        bright: '#87C932',
        brighter: '#B4DD7F',
        pale: '#E1F1CC',
        dark: '#498300',
        darker: '#2A4B00',
        shade: '#152500',
      },
      blue: {
        DEFAULT: '#023E8A',
        bright: '#3464A1',
        brighter: '#809EC4',
        pale: '#E5EBF3',
        dark: '#01316E',
        darker: '#011F45',
        shade: '#000C1B',
      },
      sky: {
        DEFAULT: '#36B0C9',
        bright: '#5EBFD3',
        brighter: '#9AD7E4',
        pale: '#EAF7F9',
        dark: '#2B8CA0',
        darker: '#1B5864',
        shade: '#0A2328',
      },
      sandwisp: {
        DEFAULT: '#F6DFA4',
        bright: '#F7E5B6',
        brighter: '#FAEFD1',
        pale: '#FDF8EC',
        dark: '#C4B283',
        darker: '#7B6F52',
        shade: '#312C20',
      },
      sol: {
        DEFAULT: '#FA5300',
        bright: '#FB7532',
        brighter: '#FCA97F',
        pale: '#FEEDE5',
        dark: '#AF3A00',
        darker: '#642100',
        shade: '#321000',
      },
      crimson: {
        DEFAULT: '#DA1B2E',
        bright: '#E14857',
        brighter: '#EC8D96',
        pale: '#FBE8EA',
        dark: '#A2111F',
        darker: '#6C0812',
        shade: '#250102',
      },
      black: {
        DEFAULT: '#1D252C',
        bright: '#6E7479',
        dark: '#13191E',
      },
      grey: {
        DEFAULT: '#53575A',
        bright: '#949698',
        dark: '#3B3E41',
      },
      chateau: {
        DEFAULT: '#A2A9AD',
        bright: '#C6CBCD',
        dark: '#777C7F',
      },
      brumosa: '#CCD2D3',
      mercury: {
        DEFAULT: '#E5E8E9',
        bright: '#EDEFF0',
        dark: '#8E9090',
      },
      azure: {
        DEFAULT: '#F5F6F6',
        bright: '#F8F9F9',
        dark: '#B6B7B7',
      },
      white: '#FFFFFF',
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
    height: {
      xxs: '5px',
      xs: '10px',
      sm: '15px',
      md: '20px',
      lg: '30px',
      xl: '50px',
      xxl: '80px',
      '3xl': '120px',
      'auto': 'auto',
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
    },
    spacing: {
      0: '0',
      xs: '5px',
      sm: '10px',
      md: '20px',
      lg: '40px',
      xl: '60px',
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
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'wysiwyg',
    }),
  ],
};
