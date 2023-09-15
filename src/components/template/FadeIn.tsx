import { ReactNode, FC } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { useRef } from "react";
import useGlobalStore from "../../hooks/useGlobalStore";

interface IFadeIn {
  children: ReactNode;
  animationClass?: string;
}

const FadeInWithIntersection: FC<IFadeIn> = (props) => {
  const { children, animationClass } = props;
  const ref = useRef<HTMLDivElement>(null);

  const observer = useIntersectionObserver(ref, {
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const { isIntersecting } = observer || {};

  return (
    <div
      ref={ref}
      className={`${
        (isIntersecting && animationClass) || ""
      } transition-[transform,opacity] duration-500 delay-150`}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "none" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
};

const FadeIn: FC<IFadeIn> = (props) => {
  const { isAdventure } = useGlobalStore();

  if (isAdventure) {
    return props.children;
  } else {
    return <FadeInWithIntersection {...props} />;
  }
};

export default FadeIn;
