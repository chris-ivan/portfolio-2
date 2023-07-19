import { create } from "zustand";
import { TransformType } from "../interfaces/container";

const initialTransform = {
  x: 0,
  y: 0,
  scale: 1,
};

interface IZoomStore {
  transform: TransformType;
  setTransform: (props: Partial<TransformType>) => void;
}

export const useZoomStore = create<IZoomStore>((set) => ({
  transform: initialTransform,
  setTransform: (props) =>
    set((store: IZoomStore) => ({
      transform: {
        ...store.transform,
        ...props,
      },
    })),
}));
