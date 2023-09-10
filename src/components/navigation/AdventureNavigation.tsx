import { lazy, Suspense } from "react";
import Map from "./Map";
import Scrollbar from "./Scrollbar";
import useAppResize from "../../hooks/useAppSize";
import { useNavigationStore } from "../../store/navigationStore";

const Pointer = lazy(() => import("./Pointer"));

const AdventureNavigation = () => {
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
      <Scrollbar />
    </>
  );
};

export default AdventureNavigation;
