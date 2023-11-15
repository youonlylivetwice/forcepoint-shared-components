# Shared components for Forcepoint Frontend Sites

Components for React applications using [TailwindCSS](https://tailwindcss.com/)

[View the deployed storybook instance](https://fourkitchens.github.io/forcepoint-shared-components)

## Requirements

- Node 20

## Local development on the shared components library itself

- Clone the repository
- Run `nvm use` or use a tool such as [NVM](https://github.com/nvm-sh/nvm) to
automatically switch to the correct Node version
- Run `npm install`
- Run `npm run dev` to start storybook and the Typescript compiler.

## Local development on a Nextjs Frontend site that uses the shared components

- In the Frontend Site, run `npm run link:forcepoint-shared-components`
- In this project, run `npm run dev`
