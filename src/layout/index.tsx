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
      <Suspense>
        <SelectedLayout />
      </Suspense>
      <Navigation />
    </>
  );
};

export default Layout;
