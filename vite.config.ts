import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project sites are served from /<repo>/.
// Change `base` if you rename the repo, or set it to '/' for a user/custom-domain site.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
