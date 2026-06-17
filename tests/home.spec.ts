import { expect } from "@playwright/test";
import { test } from "@chromatic-com/playwright"; // ✨ Cambias este import

test.describe("Control Visual de la Home", () => {
  test("debe renderizar la página principal correctamente", async ({
    page,
  }) => {
    // 1. Viaja a la raíz de tu app de Next.js
    await page.goto("/");

    // 2. Espera a que un elemento clave esté visible para asegurar que la página cargó
    // Puedes cambiar 'button' por cualquier rol o texto que tengas en tu página actual
    const mainHeading = page.getByRole("heading", { level: 1 });
    await expect(mainHeading).toBeVisible();

    // 💡 No necesitas añadir page.screenshot() manualmente para Chromatic.
    // El plugin 'chromaticLightning()' grabará automáticamente el estado
    // de las páginas visitadas durante el test y generará los snapshots en la nube.
  });
});
