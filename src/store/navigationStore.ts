import { create } from "zustand";
import { TransformType } from "../interfaces/container";
import { FRAME_KEY } from "../interfaces/frame";
import { NAVIGATING_ORDER } from "../static/frames";

const initialTransform = {
  x: 0,
  y: 0,
  scale: 1,
};

interface INavigationStore {
  transform: TransformType;
  isNavigating: boolean;
  recommendedFrame: FRAME_KEY[];
  setTransform: (props: Partial<TransformType>) => void;
  setIsNavigating: (isNavigating: boolean) => void;
  removeRecommendedFrame: (frameKey: FRAME_KEY) => void;
}

export const useNavigationStore = create<INavigationStore>((set) => ({
  transform: initialTransform,
  isNavigating: false,
  recommendedFrame: [...NAVIGATING_ORDER],
  setTransform: (props) =>
    set((store: INavigationStore) => ({
      transform: {
        ...store.transform,
        ...props,
      },
    })),
  setIsNavigating: (isNavigating) => set({ isNavigating }),
  removeRecommendedFrame: (frameKey) =>
    set((store: INavigationStore) => {
      const index = store.recommendedFrame.indexOf(frameKey);
      if (index > -1) {
        store.recommendedFrame.splice(index, 1);
      }
      return {
        recommendedFrame: [...store.recommendedFrame],
      };
    }),
}));
