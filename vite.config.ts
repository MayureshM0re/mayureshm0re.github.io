import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: set `base` to your repository name when deploying to GitHub Pages
// Replace the string below with your repo path if it differs
export default defineConfig({
  // Use a relative base so assets work with custom domains and when the site is served
  // from the root. './' keeps URLs relative to index.html.
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
