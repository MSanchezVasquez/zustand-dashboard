import { test, expect } from "@chromatic-com/playwright";

test.describe("E2E: Interacción y Captura de Estado", () => {
  test("debe reflejar el cambio en la UI tras enviar el formulario de Zustand", async ({
    page,
  }) => {
    await page.goto("/");

    const inputTexto = page.getByRole("textbox").first();
    const btnSubmit = page.getByRole("button", {
      name: /enviar|agregar|submit|Ingresar al sistema/i,
    });

    await inputTexto.fill("Nuevo Estado Dinámico");

    await btnSubmit.click();
  });
});
