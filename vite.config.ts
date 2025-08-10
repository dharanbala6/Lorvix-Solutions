import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ['lorvix-solutions.onrender.com'],  // <-- Add your Render domain here
  },
  preview: {
    port: Number(process.env.PORT) || 4173,
    allowedHosts: ['lorvix-solutions.onrender.com'],  // <-- Also allow on preview server
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
