import type { Preview } from '@storybook/react';
import { initializeRTL } from 'storybook-addon-rtl';
import '../src/lib/assets/css/theme.css';
import '../src/lib/assets/css/fonts.css';
import '../src/lib/assets/css/form.css';

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
