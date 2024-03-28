import type { Preview } from '@storybook/react';
import '../src/lib/assets/css/fonts.css';
import '../src/lib/assets/css/form.css';
import '../src/lib/assets/css/main-menu.css';
import '../src/lib/assets/css/theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
