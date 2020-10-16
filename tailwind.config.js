const tailwindcssDefaultConfig = require('tailwindcss/defaultConfig')

const scales = {
  auto: 'auto',
  content: 'fit-content',
  full: '100%',
  screen: '100vw',
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  72: '72px',
  80: '80px',
  160: '160px',
  320: '320px',
  640: '640px',
  1280: '1280px',
}

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['src/**/*.tsx'],
  },
  theme: {
    ...tailwindcssDefaultConfig.theme,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      primary: {
        500: '#0010F7',
        200: '#ACB1FF',
      },

      'innovasive-ui': {
        border: '#F8F8F8',
        error: '#DA0000',
        grey: '#898D9E',
        'grey-medium': '#E2E1E6',
        'grey-light': '#F8F8F8',
        active: '#E2E1E6',
        primary: '#0010F7',
        secondary: '#191D3C',
        hover: '#F8F8F8',
        disabled: '#F8F8F8',
        'disabled-dark': '#898D9E',
      },
    },
    fontFamily: {
      kanit: ['Kanit'],
      sarabun: ['Sarabun'],
    },
    borderRadius: {
      none: '0',
      3: '3px',
      20: '20px',
      full: '9999px',
    },
    spacing: { ...scales },
    minWidth: { ...scales },
    maxWidth: { ...scales },
    minHeight: { ...scales },
    maxHeight: { ...scales },
  },
  variants: {
    ...tailwindcssDefaultConfig.variants,
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    cursor: ['responsive', 'disabled'],
  },
}
