import { lazy } from "react";
import useGlobalStore from "../hooks/useGlobalStore";
import { NavigationMode } from "../interfaces/global";
import useInstruction from "../hooks/useInstruction";

const AdventureLayout = lazy(() => import("./AdventureLayout"));
const NormalLayout = lazy(() => import("./NormalLayout"));

const DesktopLayout = () => {
  const { navigationMode } = useGlobalStore();
  useInstruction();

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
