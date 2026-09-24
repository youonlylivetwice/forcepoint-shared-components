import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { dependencies, name, peerDependencies } from './package.json';

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

const externalPackages = [
  ...Object.keys(peerDependencies),
  ...Object.keys(dependencies),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    svgr(),
    copy({
      targets: [
        { src: 'src/lib/assets/css/*.css', dest: 'dist/assets/css' },
        { src: 'src/lib/assets/fonts/*', dest: 'dist/assets/fonts' },
        { src: 'src/lib/assets/img/*', dest: 'dist/assets/img' },
        { src: 'tailwind-theme-preset.js', dest: 'dist' },
      ],
      hook: 'writeBundle',
    }),
  ],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: formattedName,
      formats: ['es', 'umd'],
      fileName: (format) => `${formattedName}.${format}.js`,
    },
    rollupOptions: {
      // Subpaths have to be matched too, not just the bare package names. Most
      // components compile through the automatic JSX runtime, so they import
      // `react/jsx-runtime`; an exact-name list misses it and rollup inlines
      // React's own copy into the bundle. That copy stamps elements with
      // `Symbol.for('react.element')` and reads `ReactCurrentOwner` off
      // `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` — both changed in
      // React 19, so a bundled runtime throws as soon as a consumer is on 19.
      external: (id) =>
        externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`)),
      output: {
        banner: "'use client';",
        globals: {
          react: 'React',
          'react/jsx-runtime': 'React',
          'react/jsx-dev-runtime': 'React',
          'react-dom': 'ReactDOM',
          clsx: 'clsx',
          'tailwind-merge': 'tailwindMerge',
        },
      },
    },
  },
});
