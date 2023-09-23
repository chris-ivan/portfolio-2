import { useContext } from "react";
import { FrameContext } from "../context/FrameContext";

export const useFrameContext = () => {
  const values = useContext(FrameContext);
  return values;
};
