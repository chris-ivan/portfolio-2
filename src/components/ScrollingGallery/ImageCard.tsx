import { FC } from "react";
import Image from "../UI/Image";

interface IImageCard {
  src: string;
  tinySrc: string;
}

const ImageCard: FC<IImageCard> = (props) => {
  return (
    <div className="mx-4 w-[400px] h-[400px] aspect-square">
      <Image src={props.src} tinySrc={props.tinySrc} />
    </div>
  );
};

export default ImageCard;
