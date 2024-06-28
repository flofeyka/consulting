/* eslint-disable new-cap */
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

const imageOptimizerConfig = {
  test: /\.(png|jpe?g|gif|svg)$/i,
  svg: {
    multipass: true,
    plugins: ['preset-default', 'prefixIds'],
  },
  png: {
    quality: 80,
  },
  jpeg: {
    quality: 75,
  },
  gif: {
    optimizationLevel: 3,
  },
  webp: {
    quality: 75,
  },
};

export default defineConfig({
  plugins: [svgr(), react(), ViteImageOptimizer(imageOptimizerConfig as any)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
