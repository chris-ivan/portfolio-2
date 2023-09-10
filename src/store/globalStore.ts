import { create } from "zustand";

export enum NavigationMode {
  NORMAL = "Normal",
  ADVENTURE = "Adventure",
}

interface IGlobalStore {
  navigationMode: NavigationMode;
  setNavigationMode: (navigationMode: NavigationMode) => void;
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  navigationMode: NavigationMode.NORMAL,
  setNavigationMode: (navigationMode) => set({ navigationMode }),
}));
