import { useRef, ReactNode, FC } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import LoadingFallback from "../../sections/Adventure/LoadingFallback";

interface IRenderWhenInView {
  children: ReactNode;
}

const RenderWhenInView: FC<IRenderWhenInView> = (props) => {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={ref}>
      {isVisible && <LoadingFallback>{children}</LoadingFallback>}
    </div>
  );
};

export default RenderWhenInView;
