// vitest.rtl.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["**/*.stories.@(ts|tsx|js|jsx)", "**/*.mdx", "node_modules"],
    setupFiles: ["./src/setupTest.ts"],
  },
});
