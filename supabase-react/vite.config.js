import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["crypto"],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      components: path.resolve(__dirname, "src/components"),
      clients: path.resolve(__dirname, "src/clients"),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
});
