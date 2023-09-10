import { ReactNode, Suspense } from "react";
import { FC } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

interface ILoadingFallback {
  children: ReactNode;
}

const LoadingFallback: FC<ILoadingFallback> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-[100%] h-[100%] min-h-[100vh] bg-grey dark:bg-darker-grey text-darker-grey dark:text-white">
          <LoadingSpinner />
          <span className="text-lg">Loading</span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default LoadingFallback;
