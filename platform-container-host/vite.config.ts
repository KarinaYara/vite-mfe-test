import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "platform_container_host",
      remotes: {
        remoteHeader: "http://localhost:5003/assets/remoteEntry.js",
        remoteSideNav: "http://localhost:5004/assets/remoteEntry.js",
        grassN: 'http://localhost:5001/assets/remoteEntry.js'
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext'
  }
})
