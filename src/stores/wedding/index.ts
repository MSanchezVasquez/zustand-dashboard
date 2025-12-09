import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { createPersonSlice, PersonSlice } from "./person.slice";
import { createGuestSlice, GuestSlice } from "./guest.slice";
import { createDateSlice, DateSlice } from "./date.slice";

// Crear el tipo del estado compartido (Share State)
type ShareState = PersonSlice & GuestSlice & DateSlice;

export const useWeddingStore = create<ShareState>()(
  devtools(
    persist(
      (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestSlice(...a),
        ...createDateSlice(...a),
      }),
      {
        name: "wedding-storage",
      }
    )
  )
);
