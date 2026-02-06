import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react({
      parserConfig(id) {
        if (id.endsWith('.js')) return { syntax: 'ecmascript', jsx: true };
        if (id.endsWith('.jsx')) return { syntax: 'ecmascript', jsx: true };
        if (id.endsWith('.ts')) return { syntax: 'typescript', tsx: false };
        if (id.endsWith('.tsx')) return { syntax: 'typescript', tsx: true };
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    force: true,
    esbuild: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
}));
