import LoadingPage from "../components/UI/Loading/LoadingPage";
import Navigation from "../components/navigation";
import { NavigationMode, useGlobalStore } from "../store/globalStore";
import { lazy, Suspense } from "react";

const AdventureLayout = lazy(() => import("./AdventureLayout"));
const NormalLayout = lazy(() => import("./NormalLayout"));

const SelectedLayout = () => {
  const { navigationMode } = useGlobalStore();

  switch (navigationMode) {
    case NavigationMode.ADVENTURE:
      return <AdventureLayout />;
    case NavigationMode.NORMAL:
      return <NormalLayout />;
    default:
      return null;
  }
};

const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-[100] bg-white dark:bg-darker-grey transition-[background-color]">
            <LoadingPage />
            <p className="text-lg text-darker-grey dark:text-light-blue transition-[color]">
              Booting up a new world...
            </p>
          </div>
        }
      >
        <SelectedLayout />
      </Suspense>
      <Navigation />
    </>
  );
};

export default Layout;
