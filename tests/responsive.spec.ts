import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Validación de Layout Multi-Dispositivo con Interacción Inteligente", () => {
  test("debe adaptar el diseño y abrir menú si es necesario", async ({
    page,
  }, testInfo) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Condicionar según el dispositivo.
    // Obtenemos las opciones de uso del proyecto actual configurado en playwright.config.ts
    const currentDeviceOptions = testInfo.project.use;

    // Condición: Si el proyecto está configurado con 'isMobile: true'
    if (currentDeviceOptions.isMobile) {
      console.log(`🤖 Ejecutando lógica móvil en: ${testInfo.project.name}`);

      // La app no tiene un boton de menú
      /* // 🍔 Localizar y hacer clic en el Menú Hamburguesa
      const hamburgerMenu = page.getByRole("button", {
        name: /abrir menú|menu/i,
      });

      await expect(hamburgerMenu).toBeVisible();
      await hamburgerMenu.click(); */

      // Opcional: Esperar a que una animación de menú termine o un enlace sea visible
      // await expect(page.getByRole('link', { name: /dashboard/i })).toBeVisible();
    } else {
      console.log(
        `💻 Ejecutando lógica de escritorio en: ${testInfo.project.name}`,
      );
    }

    // Tomar la captura final
    const fileName = `layout-final-${testInfo.project.name.replace(/\s+/g, "-")}.png`;

    await page.screenshot({
      path: path.join(import.meta.dirname, `screenshots/${fileName}`),
      fullPage: false,
    });
  });
});
