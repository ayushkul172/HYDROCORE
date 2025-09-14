import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'Autoprime.html', dest: '' },
        { src: 'Product webpage.html', dest: '' }
      ]
    })
  ],
  build: {
    outDir: 'dist' // ✅ Ensures Vite outputs to "dist"
  }
})
