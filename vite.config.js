import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Opens the browser automatically
    historyApiFallback: true, // Fallback to index.html for SPA routing
  },
  build: {
    outDir: 'dist', // Specify the output directory (default is 'dist')
    minify: 'terser', // Use Terser for minification
    sourcemap: true, // Generate sourcemaps for debugging
  },
  base: '/', // Set the base path for your application
})