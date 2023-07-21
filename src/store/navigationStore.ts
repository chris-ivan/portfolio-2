import { create } from "zustand";
import { TransformType } from "../interfaces/container";

const initialTransform = {
  x: 0,
  y: 0,
  scale: 1,
};

interface INavigationStore {
  transform: TransformType;
  isNavigating: boolean;
  setTransform: (props: Partial<TransformType>) => void;
  setIsNavigating: (isNavigating: boolean) => void;
}

export const useNavigationStore = create<INavigationStore>((set) => ({
  transform: initialTransform,
  isNavigating: false,
  setTransform: (props) =>
    set((store: INavigationStore) => ({
      transform: {
        ...store.transform,
        ...props,
      },
    })),
  setIsNavigating: (isNavigating) => set({ isNavigating }),
}));
