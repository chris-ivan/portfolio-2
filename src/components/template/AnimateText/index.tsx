import { FC, lazy, Suspense } from "react";
import useGlobalStore from "../../../hooks/useGlobalStore";

interface IAnimateText {
  children: string;
  charDelay?: number;
  interval?: number;
}

const AnimateTextAnimation = lazy(() => import("./AnimateTextAnimation"));

const AnimateText: FC<IAnimateText> = (props) => {
  const { isAdventure } = useGlobalStore();

  if (isAdventure) {
    return props.children;
  } else {
    return (
      <Suspense fallback={<div className="opacity-0">{props.children}</div>}>
        <AnimateTextAnimation {...props} />
      </Suspense>
    );
  }
};

export default AnimateText;
