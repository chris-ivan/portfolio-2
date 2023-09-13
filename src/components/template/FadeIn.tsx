import { ReactNode, FC } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { useRef } from "react";
import { NavigationMode, useGlobalStore } from "../../store/globalStore";

interface IFadeIn {
  children: ReactNode;
}

const FadeInWithIntersection: FC<IFadeIn> = (props) => {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const observer = useIntersectionObserver(ref, {
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      className="transition-[transform,opacity] duration-500 delay-150"
      style={{
        opacity: observer?.isIntersecting ? 1 : 0,
        transform: observer?.isIntersecting ? "none" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
};

const FadeIn: FC<IFadeIn> = (props) => {
  const { navigationMode } = useGlobalStore();

  if (navigationMode === NavigationMode.NORMAL) {
    return <FadeInWithIntersection {...props} />;
  } else {
    return props.children;
  }
};

export default FadeIn;
