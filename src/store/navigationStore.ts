import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

import { TransformType } from "../interfaces/container";
import { FRAME_KEY, frameSizeType } from "../interfaces/frame";
import { INITIAL_APP_SIZE_PX, NAVIGATING_ORDER } from "../static/frames";

const initialTransform = {
  x: 0,
  y: 0,
  scale: 1,
};

interface INavigationStore {
  appSize: frameSizeType<number>;
  transform: TransformType;
  isNavigating: boolean;
  showNavigation: boolean;
  showGuide: boolean;
  showMiniMap: boolean;
  recommendedFrame: FRAME_KEY[];
  setAppSize: (appSize: frameSizeType<number>) => void;
  setTransform: (props: Partial<TransformType>) => void;
  setIsNavigating: (isNavigating: boolean) => void;
  removeRecommendedFrame: (frameKey: FRAME_KEY) => void;
  toggleNavigation: () => void;
  toggleMiniMap: () => void;
  setShowGuide: (showGuide: boolean) => void;
}

export const useNavigationStore = create(
  subscribeWithSelector<INavigationStore>((set) => ({
    appSize: INITIAL_APP_SIZE_PX,
    transform: initialTransform,
    isNavigating: false,
    showNavigation: true,
    showGuide: false,
    showMiniMap: true,
    recommendedFrame: [...NAVIGATING_ORDER],
    setAppSize: (appSize) => set({ appSize }),
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
    toggleNavigation: () =>
      set((store: INavigationStore) => ({
        showNavigation: !store.showNavigation,
      })),
    toggleMiniMap: () =>
      set((store: INavigationStore) => ({ showMiniMap: !store.showMiniMap })),
    setShowGuide: (showGuide) => set({ showGuide }),
  }))
);
