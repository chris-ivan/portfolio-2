import { FC } from "react";
import Image from "../UI/Image";

interface IImageCard {
  src: string;
  tinySrc: string;
}

const ImageCard: FC<IImageCard> = (props) => {
  return (
    <div className="mx-2 md:mx-4 w-[200px] md:w-[400px] aspect-square">
      <Image src={props.src} tinySrc={props.tinySrc} />
    </div>
  );
};

export default ImageCard;
