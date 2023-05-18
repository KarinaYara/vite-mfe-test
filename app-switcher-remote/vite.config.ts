import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header_remote",
      filename: "remoteEntry.js",
      exposes: {
        "./SideNav": "./src/App.jsx"
      },
      shared: ["react", "react-dom"]

    })
  ],
  build: {
    target: 'esnext'
  }
})
