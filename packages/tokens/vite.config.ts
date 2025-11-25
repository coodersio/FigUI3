import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'colors/index': resolve(__dirname, 'src/colors/index.ts'),
        typography: resolve(__dirname, 'src/typography.ts'),
        spacing: resolve(__dirname, 'src/spacing.ts'),
        elevation: resolve(__dirname, 'src/elevation.ts'),
        radius: resolve(__dirname, 'src/radius.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs';
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: [],
    },
  },
});
