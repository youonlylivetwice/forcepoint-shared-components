import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name, peerDependencies, dependencies } from './package.json';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    ViteSvgSpriteWrapper({
      icons: 'assets/images/icons/*.svg',
			outputDir: 'public'
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: formattedName,
      formats: ['es', 'umd'],
      fileName: (format) => `${formattedName}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
