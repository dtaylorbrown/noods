const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, '/index.ts'),
      name: '@noods/vue',
      fileName: (format: any) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});