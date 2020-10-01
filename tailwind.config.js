module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['src/**/*.tsx'],
  },
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#191D3C',

      'innovasive-ui': {
        label: 'black',
        border: '#E2E1E6',
        placeholder: 'grey',
        error: '#DA0000',
        'disabled-bg': '#F8F8F8',
        'disabled-border': '#E2E1E6',
        'options-hover': '#F8F8F8',
        'options-selected': '#E2E1E6',
        'table-header-bg': '#F1F1F2',

        primary: '#0010F7',

        grey: '#898D9E',
        'grey-medium': '#E2E1E6',
        'grey-medium-light': '#F1F1F2',
        'grey-light': '#F8F8F8',
      },
    },
    fontFamily: {
      'innovasive-ui-label': ['Kanit'],
      'innovasive-ui-value': ['Sarabun'],
    },
    spacing: {
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
    },
    minWidth: {
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
    },
    maxWidth: {
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
    },
    minHeight: {
      full: '100%',
      screen: '100vh',
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
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
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
    },
  },
}
