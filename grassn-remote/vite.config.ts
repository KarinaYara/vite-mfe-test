import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "grassN_remote",
      filename: "remoteEntry.js",
      exposes: {
        "./GrassN": "./src/App.jsx"
      },
      shared: ["react", "react-dom"]

    })
  ],
  build: {
    target: 'esnext'
  }
})