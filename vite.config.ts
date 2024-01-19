import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name, peerDependencies, dependencies } from './package.json';
import svgr from 'vite-plugin-svgr';
import copy from 'rollup-plugin-copy';

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

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
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
