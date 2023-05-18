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
        "./Header": "./src/App.jsx",
        './LanguageState': "./src/utils/languageAtom.tsx"
      },
      shared: ["react", "react-dom", "jotai"]

    })
  ],
  build: {
    target: 'esnext'
  }
})
