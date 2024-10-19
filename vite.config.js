import { svelte } from "@sveltejs/vite-plugin-svelte";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [enhancedImages(), svelte()],
    build: {
      minify: isProduction,
    },
  };
});
