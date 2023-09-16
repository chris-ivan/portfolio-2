import { ReactNode, Suspense } from "react";
import { FC } from "react";
import LoadingSpinner from "../../components/UI/Loading/LoadingSpinner";

interface ILoadingFallback {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
}

const LoadingFallback: FC<ILoadingFallback> = (props) => {
  const { children, width = "100%", height = "100%" } = props;
  return (
    <Suspense
      fallback={
        <div
          style={{ width, height }}
          className="flex items-center justify-center w-[100%] h-[100%] min-h-[50vh] bg-light-grey dark:bg-darker-grey text-darker-grey dark:text-white"
        >
          <LoadingSpinner />
          <span className="text-lg ml-5">Loading</span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default LoadingFallback;
