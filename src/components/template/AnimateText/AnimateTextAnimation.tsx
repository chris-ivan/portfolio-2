import { FC, useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useIntersectionObserver } from "usehooks-ts";

interface IAnimateTextAnimation {
  children: string;
  charDelay?: number;
  interval?: number;
}

const INTERVAL = 15;

const AnimateTextAnimation: FC<IAnimateTextAnimation> = (props) => {
  const { children, charDelay = 0, interval = INTERVAL } = props;
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const responseLength = useMemo(() => children.length, [children]);

  const observer = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  const animateText = useCallback(() => {
    const animationInterval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;

        if (newCount > responseLength) {
          clearInterval(animationInterval);
        }

        return newCount;
      });
    }, interval);
  }, [responseLength, interval]);

  useEffect(() => {
    if (observer?.isIntersecting) {
      setTimeout(animateText, interval * charDelay);
    } else {
      setCount(0);
    }
  }, [observer, animateText, charDelay, interval]);

  return (
    <span ref={ref}>
      <span>{children.slice(0, count)}</span>
      <span className="opacity-10">
        {children.slice(count, responseLength)}
      </span>
    </span>
  );
};

export default AnimateTextAnimation;
