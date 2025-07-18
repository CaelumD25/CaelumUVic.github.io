import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
