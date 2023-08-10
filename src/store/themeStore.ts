import { create } from "zustand";

interface IZustandThemeStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const useZustandThemeStore = create<IZustandThemeStore>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
}));
