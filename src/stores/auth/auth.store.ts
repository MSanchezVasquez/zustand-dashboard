import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  fullName: string;
}

type AuthStatus = "authorized" | "unauthorized" | "pending";

export interface AuthState {
  status: AuthStatus;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  status: "unauthorized",
  user: undefined,

  login: async (email, password) => {
    // 1. Ponemos estado en pending (opcional, para loading spinners)
    // set({ status: 'pending' });

    try {
      // 2. Simulamos una petición HTTP asíncrona
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // 3. Validación dummy (acepta todo por ahora para probar)
      if (!email || !password) throw new Error("Credenciales incorrectas");

      set({
        status: "authorized",
        user: {
          id: "123",
          email: email,
          fullName: "Edward Tompson", // Simulamos que la API nos devuelve el nombre
        },
      });

      return true;
    } catch (error) {
      set({ status: "unauthorized", user: undefined });
      return false;
    }
  },

  logout: () => {
    set({ status: "unauthorized", user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(storeApi, {
      name: "auth-storage",
    })
  )
);
