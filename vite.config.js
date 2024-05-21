import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    minify: true
  // }
  // ,
  // build: {
  //   lib: {
  //     entry: 'index.html',
  //     formats: ['es']
  //   },
  //   rollupOptions: {
  //     external: /^lit/
  //   }
  }
})
