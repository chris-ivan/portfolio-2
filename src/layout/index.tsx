import LoadingPage from "../components/UI/Loading/LoadingPage";
import Navigation from "../components/navigation";
import { lazy, Suspense } from "react";
import { IS_MOBILE } from "../utils/device";

const MobileLayout = lazy(() => import("./MobileLayout"));
const DesktopLayout = lazy(() => import("./DesktopLayout"));

const SelectedLayout = () => {
  return IS_MOBILE ? <MobileLayout /> : <DesktopLayout />;
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
