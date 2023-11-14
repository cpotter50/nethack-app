import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api/pokemon' :  'https://pokeapi.co/api/v2/pokemon/ditto',
    '/pokemon' :  {
      target: 'https://pokeapi.co/api',
      // changeOrigin: true,
      // secure: false,      
      // ws: true,
      rewrite: (path) => path.replace(/^\/pokemon/, ''),
    },
    '/api': {
            target: 'http://localhost:9002',
            // changeOrigin: true,
            // secure: false,      
            // ws: true,
            // rewrite: (path) => path.replace(/^\/api/, ''),
        }
    }
  },
  plugins: [vue()],
})

