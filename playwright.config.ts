import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    // URL por defecto donde corre Next.js localmente
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
  },

  /* Configuramos Playwright para que levante Next.js por nosotros antes de los tests */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
  },

  /* Configuramos los navegadores que usarás localmente */
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "Tablet",
      use: { ...devices["iPad Mini"] },
    },
  ],
});
