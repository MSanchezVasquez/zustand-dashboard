import { StateCreator } from "zustand";

export interface GuestSlice {
  guestCount: number;
  isComing: boolean;

  setGuestCount: (count: number) => void;
  setIsComing: (isComing: boolean) => void;
}

export const createGuestSlice: StateCreator<GuestSlice> = (set) => ({
  guestCount: 0,
  isComing: false,

  setGuestCount: (guestCount: number) =>
    set({ guestCount: guestCount > 0 ? guestCount : 0 }),

  setIsComing: (isComing: boolean) => set({ isComing }),
});
