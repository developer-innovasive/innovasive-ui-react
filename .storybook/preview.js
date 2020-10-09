import '../src/styles/index.css'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  docs: {
    source: {
      code: 'Some custom string here',
    },
  },
  viewport: {
    defaultViewport: 'tablet',
  },
}
