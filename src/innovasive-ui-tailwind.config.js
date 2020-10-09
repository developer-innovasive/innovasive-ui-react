/**
|--------------------------------------------------
| DEFAULT SCALE
|--------------------------------------------------
*/
const scales = {
  full: '100%',
  screen: '100vw',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '8': '8px',
  '16': '16px',
  '24': '24px',
  '32': '32px',
  '40': '40px',
  '48': '48px',
  '56': '56px',
  '64': '64px',
  '72': '72px',
  '80': '80px',
  '160': '160px',
  '320': '320px',
  '640': '640px',
  '1280': '1280px',
}

/**
|--------------------------------------------------
| CONFIG
|--------------------------------------------------
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['src/**/*.tsx'],
  },
  /**
  |--------------------------------------------------
  | DEFAULT THEME
  |--------------------------------------------------
  */
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
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
      full: '9999px',
      '3': '3px',
      '20': '20px',
    },
    spacing: { ...scales },
    minWidth: { ...scales },
    maxWidth: { ...scales },
    minHeight: { ...scales },
    maxHeight: { ...scales },
    /**
    |--------------------------------------------------
    | EXTENDED
    |--------------------------------------------------
    */
  },
  /**
  |--------------------------------------------------
  | VARIANTS
  |--------------------------------------------------
  */
  variants: {
    backgroundColor: ({ after }) => after(['active', 'disabled']),
    cursor: ({ after }) => after(['disabled']),
  },
}
