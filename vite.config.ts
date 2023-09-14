/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/const/*',
        '**/*/@(index|config).@(tsx|ts)',
        '**/*/*.@(icon|asset).@(tsx|ts)',
      ],
      enabled: true,
      provider: 'istanbul',
      reporter: ['text'],
      all: true,
    },
  },
});
