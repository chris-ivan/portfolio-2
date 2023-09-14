import { useContext } from "react";
import { GlobalContext, IGlobalContext } from "../context/GlobalContext";

const useGlobalStore = () => {
  const context = useContext<IGlobalContext>(GlobalContext);
  return context;
};

export default useGlobalStore;
