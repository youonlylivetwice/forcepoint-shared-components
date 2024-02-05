# Contributing to Forcepoint Shared Components

🎉 First off, thank you for considering contributing to Forcepoint Shared Components Library! 🎉

This project uses [Vite](https://vitejs.dev/) as package bundler for building the library. The configuration file is `vite.config.ts`

## Creating a new Component

This project uses [Atomic Design System](./ATOMIC_DESIGN.md) for creating new components within `src/lib/components` folder.

Make sure your new Componet follows the [coding standards](#coding-standards)

## Publishing a new Component

For publising a new Component, you need add the component in the `src/lib/components/index.ts` file.

Once you run `npm run yalc-publish`, a `dist` folder is created with all components exported.

### Coding standards

- Each Visual *Component* should have an Storybook representation associated.
- Each *Component* should have RTL support using [TailwindCSS](https://tailwindcss.com/).
- *Components* can be imported in any React Framework and work properly.
- Some *Componets* might need to be flexible and accept specifics React Framework component that can override functionalities like [`next/link`](https://nextjs.org/docs/pages/api-reference/components/link) or [`next/image`](https://nextjs.org/docs/pages/api-reference/components/image)
- Use Typescript to define all custom properties required by your *Component*
- Use the `cn` function (located in `src/lib/utils/tailwind-merge.ts`) for conditional merging [TailwindCSS](https://tailwindcss.com/) classes.
