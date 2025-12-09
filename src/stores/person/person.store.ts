import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
//import { customSessionStorage } from "../storages/session.storage";
/* import { firebaseStorage } from "../storages/firebase.storage";
import { logger } from "../middlewares/logger.middleware"; */

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (value: string) => set({ firstName: value }),
  setLastName: (value: string) => set({ lastName: value }),
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApi, {
      name: "person-storage",
      //storage: customSessionStorage,
      //storage: firebaseStorage,
    })
  )
);
