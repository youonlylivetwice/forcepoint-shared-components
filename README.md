# Shared components for Forcepoint Frontend Sites

React Shared Components Library System for Forcepoint. Built on Vite.

## At a glance

|   |   |
|---|---|
| Library bundler | [Vite](https://vitejs.dev/) |
| Component visualization | [Storybook](https://storybook.js.org/) |
| Storybook | 8.0 |
| Storybook instance | [GitHub Pages](https://fourkitchens.github.io/forcepoint-shared-components) |
| CSS Framework | [TailwindCSS](https://tailwindcss.com/) |
| Node | 18 |

## Library reference

This section provides a concise overview of the key classes and functions available in our library, aiding developers in understanding and utilizing the provided functionalities effectively.

### Include the Tailwind preset

```js
import type { Config } from 'tailwindcss';
import themePreset from './node_modules/forcepoint-shared-components/dist/tailwind-theme-preset.js';

export default {
  presets: [themePreset],
  content: ['./src/lib/**/*.{ts,tsx}'],
} satisfies Config;

```

### Components API

- [Content Image Slider](./docs/api/content-slider.md)
- [Branding](./docs/api/branding.md)
- [Button](./docs/api/button.md)
- [Callout](./docs/api/callout.md)
- [Footer Menu](./docs/api/footerMenu.md)
- [Image](./docs/api/img.md)
- [Card 380](./docs/api/card380.md)
- [Card Nav Highlight](./docs/api/navHighlight.md)
- [Language Switcher](./docs/api/languageSwitcher.md)
- [Legal Menu](./docs/api/legalMenu.md)
- [Link](./docs/api/link.md)
- [Logo Grid](./docs/api/logoGrid.md)
- [Main Menu](./docs/api/mainMenu.md)
- [Secondary Menu](./docs/api/secondaryMenu.md)
- [Social Menu](./docs/api/socialMenu.md)
- [Typography](./docs/api/typography.md)

## Development

This section is intended for developers who want to contribute to the project or explore its internals. If you're interested in enhancing our codebase, fixing bugs, or adding new features, follow the guidelines below to get started.

### Setting Up the Development Environment

- Clone the repository
- Run `nvm use` or use a tool such as [NVM](https://github.com/nvm-sh/nvm) to
automatically switch to the correct Node version
- Run `npm install`
- Run `npm run dev` to start storybook and the Typescript compiler.

### Publishing local development changes to your Application

This project uses [Yalc](https://www.npmjs.com/package/yalc) for local package publishing and sharing.

- Publish local changes: `yalc-publish`

### Coding Guidelines

Follow the coding style and guidelines specified in [CONTRIBUTING.md](./docs/CONTRIBUTING.md) to maintain a consistent codebase.

### Feedback

We welcome your feedback! If you encounter any issues, have suggestions, or want to discuss improvements, open an issue or reach out to us.

Happy coding! 🚀
