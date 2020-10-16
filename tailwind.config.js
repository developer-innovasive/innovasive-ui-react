const tailwindcssDefaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('tailwindcss/plugin')

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

const brightness = {
  '.brightness-95': {
    filter: 'brightness(95%)',
  },
  '.brightness-80': {
    filter: 'brightness(80%)',
  },
}

const positions = {
  '.absolute-center': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '.absolute-start': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-60%, -50%)',
  },
}

const typography = {
  '.heading1': {
    fontSize: '24px',
    fontFamily: 'Kanit',
    fontWeight: '500',
  },
  '.heading2': {
    fontSize: '16px',
    fontFamily: 'Kanit',
    fontWeight: '500',
  },
  '.text-body': {
    fontSize: '16px',
    fontFamily: 'Sarabun',
    fontWeight: '300',
  },
  '.text-error': {
    fontSize: '12px',
    fontFamily: 'Sarabun',
    fontWeight: '300',
  },
  '.subheading1': {
    fontSize: '14px',
    fontFamily: 'Kanit',
    fontWeight: '500',
  },
  '.subheading2': {
    fontSize: '12px',
    fontFamily: 'Sarabun',
    fontWeight: '500',
  },
  '.caption1': {
    fontSize: '12px',
    fontFamily: 'Sarabun',
    fontWeight: '300',
  },
  '.caption2': {
    fontSize: '9px',
    fontFamily: 'Sarabun',
    fontWeight: '300',
  },
  '.caption3': {
    fontSize: '9px',
    fontFamily: 'Kanit',
    fontWeight: '500',
  },
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
        800: '#00065E',
        700: '#000A91',
        600: '#000DC4',
        500: '#0010F7',
        400: '#3946FF',
        300: '#737CFF',
        200: '#ACB1FF',
        100: '#E5E7FF',
      },
      secondary: {
        800: '#0F1225',
        700: '#191D3C',
        600: '#2A2F59',
        500: '#3E4476',
        400: '#555C93',
        300: '#7077B1',
        200: '#8D95CE',
        100: '#AEB5EB',
      },
      grey: {
        800: '#363640',
        700: '#4E4E59',
        600: '#676773',
        500: '#898D9E',
        400: '#C5C9D8',
        300: '#E2E1E6',
        200: '#F1F1F2',
        100: '#F8F8F8',
      },
      yellow: {
        800: '#5A4000',
        700: '#835D00',
        600: '#AB7B05',
        500: '#D49D15',
        400: '#FDC02A',
        300: '#FFD46A',
        200: '#FFE6AA',
        100: '#FFF9E9',
      },
      red: {
        800: '#580000',
        700: '#8B0000',
        600: '#BE0000',
        500: '#F10000',
        400: '#FF3939',
        300: '#FF7373',
        200: '#FFACAC',
        100: '#FFE5E5',
      },
    },
    fontFamily: {
      ...tailwindcssDefaultConfig.theme.fontFamily,
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(brightness, { variants: ['group-hover', 'active'] })
      addUtilities(positions)
      addUtilities(typography)
    }),
  ],
}
