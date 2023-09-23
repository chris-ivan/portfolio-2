import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { FRAME_KEY } from "../interfaces/frame";
import { NAVIGATING_ORDER } from "../static/frames";

interface IFrameData {
  height: number;
  width: number;
  isVisible: boolean;
}

type IFrameContextFrame = {
  [key in FRAME_KEY]?: IFrameData;
};

type IFrameContext = {
  frames: IFrameContextFrame;
  updateFrame: (id: FRAME_KEY, data: IntersectionObserverEntry) => void;
  recommendedFrame?: FRAME_KEY;
};

export const FrameContext = createContext<IFrameContext>({
  frames: {},
  updateFrame: () => undefined,
});

function reducer(state: FRAME_KEY[], frameKey: FRAME_KEY) {
  const index = state.indexOf(frameKey);
  if (index <= -1) return state;

  const newRecommended = state.slice();
  newRecommended.splice(index, 1);
  return newRecommended;
}

export const FrameProvider = ({ children }: { children: React.ReactNode }) => {
  const [recommendedFrames, removeFrame] = useReducer(
    reducer,
    NAVIGATING_ORDER
  );
  const [frames, setFrames] = useState<IFrameContextFrame>({});

  const updateFrame = useCallback(
    (id: FRAME_KEY, data: IntersectionObserverEntry) => {
      const { height, width } = data.boundingClientRect;
      const isVisible = data.isIntersecting;

      if (isVisible) removeFrame(id);

      setFrames((prev) => ({
        ...prev,
        [id]: { height, width, isVisible },
      }));
    },
    []
  );

  const values = useMemo(
    () => ({
      frames,
      updateFrame,
      recommendedFrame: recommendedFrames.length
        ? recommendedFrames[0]
        : undefined,
    }),
    [frames, updateFrame, recommendedFrames]
  );

  return (
    <FrameContext.Provider value={values}>{children}</FrameContext.Provider>
  );
};
