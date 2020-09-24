module.exports = {
  theme: {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      content: ['./src/**/*.tsx'],
    },
    colors: {
      'innovasive-ui': {
        error: '#DA0000',
        'disabled-light': '#F8F8F8',
        'disabled-dark': '#E2E1E6',
        black: '#191D3C',
        grey: '#898D9E',
        'grey-medium': '#E2E1E6',
        'grey-light': '#F1F1F2',
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
    maxHeight: {
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
    variants: {},
    plugins: [],
  },
}
