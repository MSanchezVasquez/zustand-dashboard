import { defineConfig } from "@playwright/test";
import { chromaticLightning } from "@chromatic-com/playwright";

export default defineConfig({
  // Conectamos el plugin oficial de Chromatic para Playwright
  plugins: [chromaticLightning()],

  use: {
    // URL base por defecto para los entornos de Next.js
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },

  /* Configuramos Playwright para que levante Next.js automáticamente */
  webServer: {
    command: "npm run dev", // o 'pnpm dev' / 'bun dev'
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
