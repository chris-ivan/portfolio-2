import { lazy, Suspense } from "react";
import Map from "./Map";
import Scrollbar from "./Scrollbar";
import NavigationConfig from "./Config";
import useAppResize from "../../hooks/useAppSize";
import { useNavigationStore } from "../../store/navigationStore";

const Pointer = lazy(() => import("./Pointer"));

const Navigation = () => {
  const { isNavigating } = useNavigationStore();
  useAppResize();

  return (
    <>
      {isNavigating && (
        <Suspense>
          <Pointer />
        </Suspense>
      )}
      <Map />
      <NavigationConfig />
      <Scrollbar />
    </>
  );
};

export default Navigation;
