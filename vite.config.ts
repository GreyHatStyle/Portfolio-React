import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      output: {
        // chunking for build optimization
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['motion', 'framer-motion'],
          ui: ['@radix-ui/react-select', '@radix-ui/react-tooltip', '@radix-ui/react-slot', 'lucide-react'],
          icons: ['react-icons'],
          state: ['zustand'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
  }
})
