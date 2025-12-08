import { StateCreator } from "zustand";

export interface DateSlice {
  eventDate: string; // Guardamos string directo "YYYY-MM-DD"
  eventTime: string;

  setEventDate: (parcialDate: string) => void;
  setEventTime: (eventTime: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set) => ({
  // Inicializamos con la fecha actual en formato ISO string
  eventDate: new Date().toISOString().split("T")[0],
  eventTime: "00:00",

  setEventDate: (eventDate: string) => set({ eventDate }),
  setEventTime: (eventTime: string) => set({ eventTime }),
});
