import { create } from "zustand";
import { TransformType } from "../interfaces/container";

const initialTransform = {
  x: 0,
  y: 0,
  scale: 1,
};

interface IZoomStore {
  transform: TransformType;
  isNavigating: boolean;
  setTransform: (props: Partial<TransformType>) => void;
  setIsNavigating: (isNavigating: boolean) => void;
}

export const useZoomStore = create<IZoomStore>((set) => ({
  transform: initialTransform,
  isNavigating: false,
  setTransform: (props) =>
    set((store: IZoomStore) => ({
      transform: {
        ...store.transform,
        ...props,
      },
    })),
  setIsNavigating: (isNavigating) => set({ isNavigating }),
}));
