import { FC } from "react";
import useProgressiveImg from "../../../hooks/useProgressiveImg";

interface IImage {
  alt?: string;
  src: string;
  tinySrc: string;
}

const Image: FC<IImage> = (props) => {
  const { src, blur } = useProgressiveImg(props.src, props.tinySrc);
  return (
    <img
      src={src}
      alt={props.alt || ""}
      className="object-cover w-full h-full drop-shadow-lg dark:drop-shadow-none transition-[filter]"
      style={{
        filter: blur ? "blur(10px)" : "none",
      }}
    />
  );
};

export default Image;
