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
  showNavigation: boolean;
  showMiniMap: boolean;
  recommendedFrame: FRAME_KEY[];
  frameVisibility: { [key in FRAME_KEY]: boolean };
  setTransform: (props: Partial<TransformType>) => void;
  setIsNavigating: (isNavigating: boolean) => void;
  removeRecommendedFrame: (frameKey: FRAME_KEY) => void;
  changeFrameVisibility: (frameKey: FRAME_KEY, isVisible: boolean) => void;
  toggleNavigation: () => void;
  toggleMiniMap: () => void;
}

export const useNavigationStore = create<INavigationStore>((set) => ({
  transform: initialTransform,
  isNavigating: false,
  showNavigation: true,
  showMiniMap: true,
  recommendedFrame: [...NAVIGATING_ORDER],
  frameVisibility: {
    [FRAME_KEY.CONTACT]: false,
    [FRAME_KEY.INTERESTS]: false,
    [FRAME_KEY.EXPERIENCES]: false,
    [FRAME_KEY.LANDING]: false,
    [FRAME_KEY.SKILLS]: false,
    [FRAME_KEY.ABOUT]: false,
    [FRAME_KEY.PROJECTS]: false,
  },
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
  changeFrameVisibility: (frameKey, isVisible) =>
    set((store: INavigationStore) => {
      return {
        frameVisibility: {
          ...store.frameVisibility,
          [frameKey]: isVisible,
        },
      };
    }),
  toggleNavigation: () =>
    set((store: INavigationStore) => ({
      showNavigation: !store.showNavigation,
    })),
  toggleMiniMap: () =>
    set((store: INavigationStore) => ({ showMiniMap: !store.showMiniMap })),
}));
