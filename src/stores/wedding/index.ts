import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createPersonSlice, PersonSlice } from "./person.slice";
import { createGuestSlice, GuestSlice } from "./guest.slice";
import { createDateSlice, DateSlice } from "./date.slice";

// Crear el tipo del estado compartido (Share State)
type ShareState = PersonSlice & GuestSlice & DateSlice;

export const useWeddingStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
    ...createDateSlice(...a),
  }))
);
