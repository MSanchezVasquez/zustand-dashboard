# Zustand Dashboard - State Management Patterns

![Zustand Dashboard](https://img.shields.io/badge/React-18-blue) ![Zustand](https://img.shields.io/badge/State_Management-Zustand-orange) ![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue) ![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38bdf8)

Una aplicación de demostración profesional construida con **React, TypeScript y Vite**, diseñada para mostrar patrones avanzados de manejo de estado utilizando **Zustand**.

El proyecto simula un panel de administración completo con autenticación, tableros de tareas tipo Jira, formularios segmentados y persistencia de datos.

---

## 🚀 Características Principales

### 🔐 Autenticación y Seguridad

- **Auth Store:** Manejo de estado de sesión (Authorized/Unauthorized/Pending).
- **Protected Routes:** Uso de `DashboardLayout` como Guard para proteger rutas privadas.
- **Persistencia:** La sesión sobrevive a recargas de página (`persist` middleware).

### 📋 Tablero de Tareas (Kanban)

- **Drag & Drop Nativo:** Implementación de arrastrar y soltar tareas entre columnas.
- **Inmutabilidad con Immer:** Uso del middleware `immer` para actualizaciones de estado anidado complejas.
- **Interacciones UI:** Modales para creación (SweetAlert2) y confirmación de eliminación.

### 🍰 Patrón de Slices (Wedding Invitation)

- Demostración de cómo dividir un Store gigante en pequeñas partes lógicas (**Slices**).
- **Stores:** `PersonSlice`, `GuestSlice`, `DateSlice` combinados en un `useWeddingStore` único.

### 🐻 Contadores y Objetos (Bears & Person)

- Ejemplos básicos de contadores y manejo de objetos simples.
- Visualizadores de estado tipo "Terminal" para depuración en tiempo real.

---

## 🛠️ Stack Tecnológico

- **Core:** React 18, TypeScript, Vite.
- **Estado:** Zustand (con middlewares: `devtools`, `persist`, `immer`).
- **Estilos:** Tailwind CSS, Font "Plus Jakarta Sans".
- **Iconos:** React Icons (IO5).
- **Utilidades:** Classnames, UUID, SweetAlert2.

---

## 📸 Capturas de Pantalla

|                  Login Page                   |                        Dashboard                        |
| :-------------------------------------------: | :-----------------------------------------------------: |
| Diseño moderno con gradientes y validaciones. | Vista general de widgets conectados a múltiples stores. |

|               Tablero Kanban               |                   Slices Demo                   |
| :----------------------------------------: | :---------------------------------------------: |
| Gestión de tareas con Drag & Drop e Immer. | Formulario complejo dividido en slices lógicos. |

---

## 📦 Instalación y Uso

Este proyecto utiliza **pnpm** como gestor de paquetes.

1. **Clonar el repositorio**

   ```bash
   git clone [https://github.com/tu-usuario/zustand-dashboard.git](https://github.com/tu-usuario/zustand-dashboard.git)
   cd zustand-dashboard
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Correr en desarrollo**

   ```bash
   pnpm run dev
   ```

4. **Construir para producción**

   ```bash
   pnpm run build
   ```

---

## 🧠 Conceptos de Zustand Aplicados

1.  **Store Creation:** Creación de stores tipados con TypeScript.
2.  **Middlewares:**
    - `persist`: Para guardar datos en LocalStorage/SessionStorage.
    - `devtools`: Para conexión con Redux DevTools.
    - `immer`: Para mutar estado de forma "inmutable" y sencilla.
3.  **Custom Hooks:** Separación de lógica de UI (ej. `useTasks`).
4.  **Slices Pattern:** Composición de stores grandes a partir de piezas pequeñas.

---

## 👤 Autor

Desarrollado por **Moises Sanchez** como parte de una demostración de dominio de React y State Management.
