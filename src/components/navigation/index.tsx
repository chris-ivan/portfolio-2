import useAppResize from "../../hooks/useAppSize";
import NavigationConfig from "./Config";
import Map from "./Map";
import Pointer from "./Pointer";
import Scrollbar from "./Scrollbar";

const Navigation = () => {
  useAppResize();

  return (
    <>
      <Map />
      <Pointer />
      <NavigationConfig />
      <Scrollbar />
    </>
  );
};

export default Navigation;
