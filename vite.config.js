import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/camhbrt.github.io/', // Remplacez 'mon-projet-vue' par le nom de votre repository GitHub
  plugins: [vue()],
  // Autres options de configuration ici...
});