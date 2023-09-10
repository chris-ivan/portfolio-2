import AdventureOnly from "../template/AdventureOnly";
import NavigationConfig from "./Config";
import { lazy } from "react";

const AdventureNavigation = lazy(() => import("./AdventureNavigation"));

const Navigation = () => {
  return (
    <>
      <NavigationConfig />
      <AdventureOnly>
        <AdventureNavigation />
      </AdventureOnly>
    </>
  );
};

export default Navigation;
