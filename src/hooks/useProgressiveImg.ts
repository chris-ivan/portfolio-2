import { useState, useEffect, useMemo } from "react";

function useProgressiveImg(src: string, tinySrc: string) {
  const [source, setSource] = useState(tinySrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setSource(src);
    };
  }, [src, tinySrc]);

  const blur = useMemo(() => source === tinySrc, [source, tinySrc]);
  return { src: source, blur };
}

export default useProgressiveImg;
