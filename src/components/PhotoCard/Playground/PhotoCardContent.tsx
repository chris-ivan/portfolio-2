import { Transition } from "@headlessui/react";
import { FC, useState } from "react";
// @ts-ignore
import { ReactComponent as ImageIcon } from "../../../assets/icons/UI/Picture.svg";
import useTheme from "../../../hooks/useTheme";
import useProgressiveImg from "../../../hooks/useProgressiveImg";

interface IPhotoCardContent {
  src: string;
  tinySrc: string;
}

const PhotoCardContent: FC<IPhotoCardContent> = (props) => {
  const { src, blur } = useProgressiveImg(props.src, props.tinySrc);
  const [open, setOpen] = useState<boolean>(true);
  const { theme } = useTheme();

  return (
    <div
      style={{
        width: open ? 800 : 350,
        background: theme.colorBgBase,
        border: `1px solid ${theme.colorBorder}`,
      }}
      className="shadow-2xl dark:shadow-none transition-[width] duration-300"
    >
      <div className="p-4 flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <ImageIcon />
          <p style={{ color: theme.colorText }}>Photo.jpg</p>
        </div>
        <button
          className="h-6 w-6 flex items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div
            style={{
              border: `2px solid ${theme.colorTextSecondary}`,
              height: open ? 0 : 16,
            }}
            className="w-4 transition-[height]"
          />
        </button>
      </div>
      <Transition
        show={open}
        enter="transform height opacity transition ease-in-out duration-300"
        enterFrom="h-0 opacity-0"
        enterTo="opacity-1"
        leave="transform height opacity transition ease-in-out duration-300"
        leaveFrom="opacity-1"
        leaveTo="h-0 opacity-0"
      >
        <div className="p-4 w-full aspect-square pointer-events-none bg-light-grey dark:bg-darker-grey dark:border-t border-solid border-dark-grey">
          <img
            src={src}
            alt=""
            className="object-cover w-full h-full drop-shadow-lg dark:drop-shadow-none transition-[filter]"
            style={{
              filter: blur ? "blur(10px)" : "none",
            }}
          />
        </div>
      </Transition>
    </div>
  );
};

export default PhotoCardContent;
