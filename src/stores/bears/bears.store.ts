import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  increaseBlackBeards: (by: number) => void;
  increasePolarBeards: (by: number) => void;
  increasePandaBears: (by: number) => void;

  bears: Bear[];

  totalBears: () => number;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      polarBears: 5,
      pandaBears: 1,

      increaseBlackBeards: (by: number) =>
        set((state) => ({ blackBears: state.blackBears + by })),
      increasePolarBeards: (by: number) =>
        set((state) => ({ polarBears: state.polarBears + by })),
      increasePandaBears: (by: number) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),

      bears: [{ id: 1, name: "Oso #1" }],

      totalBears: () => {
        return (
          get().blackBears +
          get().polarBears +
          get().pandaBears +
          get().bears.length
        );
      },

      doNothing: () => set((state) => ({ bears: [...state.bears] })),
      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: `Oso #${state.bears.length + 1}`,
            },
          ],
        })),
      clearBears: () => set({ bears: [] }),
    }),
    { name: "bears-store" }
  )
);
