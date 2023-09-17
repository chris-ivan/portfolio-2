import { ReactNode, Suspense } from "react";
import { FC } from "react";
import LoadingSpinner from "../../components/UI/Loading/LoadingSpinner";

interface ILoadingFallback {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  minHeight?: number | string;
  small?: boolean;
}

const LoadingFallback: FC<ILoadingFallback> = (props) => {
  const {
    children,
    width = "100%",
    height = "100%",
    minHeight = "50vh",
    small,
  } = props;
  return (
    <Suspense
      fallback={
        <div
          style={{ width, height, minHeight }}
          className="flex items-center justify-center w-[100%] h-[100%] bg-light-grey dark:bg-darker-grey text-darker-grey dark:text-white"
        >
          <div style={{ transform: `scale(${small ? 0.5 : 1})` }}>
            <LoadingSpinner />
          </div>
          {!small && <span className="text-lg ml-5">Loading</span>}
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default LoadingFallback;
