import { frameSizeType } from "../interfaces/frame";
import { useState, useEffect } from "react";
import { getViewportHeight, getViewportWidth } from "../utils/viewport";

const useViewport = (): frameSizeType<number> => {
  const [width, setWidth] = useState<number>(getViewportWidth());
  const [height, setHeight] = useState<number>(getViewportHeight());

  const resetSize = () => {
    setWidth(getViewportWidth());
    setHeight(getViewportHeight());
  };

  useEffect(() => {
    window.addEventListener("resize", resetSize);
    return () => window.removeEventListener("resize", resetSize);
  });

  return { width, height };
};

export default useViewport;
