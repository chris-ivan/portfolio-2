import { lazy } from "react";
import Map from "./Map";
import Scrollbar from "./Scrollbar";
import useAppResize from "../../hooks/useAppSize";

const Pointer = lazy(() => import("./Pointer"));

const AdventureNavigation = () => {
  useAppResize();

  return (
    <>
      <Pointer />
      <Map />
      <Scrollbar />
    </>
  );
};

export default AdventureNavigation;
