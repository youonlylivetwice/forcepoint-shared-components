import type { Preview } from '@storybook/react';
import { initializeRTL } from 'storybook-addon-rtl';
import '../src/lib/theme.css';

initializeRTL();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
