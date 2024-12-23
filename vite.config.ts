import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  base: "byod",
  plugins: [
    vue(),
    viteCompression({
      algorithm: "gzip",
      deleteOriginFile: false,
      threshold: 10240,
      compressionOptions: {
        level: 9,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
