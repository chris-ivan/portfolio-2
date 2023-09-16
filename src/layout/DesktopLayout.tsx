import { lazy } from "react";
import useGlobalStore from "../hooks/useGlobalStore";
import { NavigationMode } from "../interfaces/global";

const AdventureLayout = lazy(() => import("./AdventureLayout"));
const NormalLayout = lazy(() => import("./NormalLayout"));

const DesktopLayout = () => {
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

export default DesktopLayout;
