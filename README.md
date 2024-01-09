# Shared components for Forcepoint Frontend Sites

React Shared Components Library System for Forcepoint. Built on Vite.

## At a glance

|   |   |
|---|---|
| Library bundler | [Vite](https://vitejs.dev/) |
| Component visualization | [Storybook](https://storybook.js.org/) |
| Storybook | 7.6 |
| Storybook instance | [GitHub Pages](https://fourkitchens.github.io/forcepoint-shared-components) |
| CSS Framework | [TailwindCSS](https://tailwindcss.com/) |
| Node | 18 |

## Local development setup

- Clone the repository
- Run `nvm use` or use a tool such as [NVM](https://github.com/nvm-sh/nvm) to
automatically switch to the correct Node version
- Run `npm install`
- Run `npm run dev` to start storybook and the Typescript compiler.

## Local development on a Nextjs Frontend site that uses the shared components

- In the Frontend Site, run `npm run link:forcepoint-shared-components`
- In this project, run `npm run dev`

## Publish Tailwind Preset

- Copy the content you want to export from `tailwind.config.ts` to `./public/tailwind.config.ts` file.
