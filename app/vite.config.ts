import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
// export default defineConfig({
//   base: './',
//   plugins: [inspectAttr(), react()],
//   server: {
//     port: 3000,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
export default defineConfig({
  base: '/thamadie-portfolio/app/index.html', // Must match your GitHub repo name exactly
  plugins: [inspectAttr(), react()],
})