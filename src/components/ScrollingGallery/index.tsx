import Photo1 from "../../assets/images/profile/photo-1.webp";
import Photo1Min from "../../assets/images/profile/photo-1-min.webp";
import Photo2 from "../../assets/images/profile/photo-2.webp";
import Photo2Min from "../../assets/images/profile/photo-2-min.webp";
import Photo3 from "../../assets/images/profile/photo-3.webp";
import Photo3Min from "../../assets/images/profile/photo-3-min.webp";
import Photo4 from "../../assets/images/profile/photo-4.webp";
import Photo4Min from "../../assets/images/profile/photo-4-min.webp";
import ImageCard from "./ImageCard";
import Marquee from "react-fast-marquee";
import { IS_MOBILE } from "../../utils/device";

const ScrollingGallery = () => {
  return (
    <div className="bg-light-grey dark:bg-darker-grey py-4 md:p-0">
      <Marquee speed={IS_MOBILE ? 25 : undefined}>
        <ImageCard src={Photo1} tinySrc={Photo1Min} />
        <ImageCard src={Photo2} tinySrc={Photo2Min} />
        <ImageCard src={Photo3} tinySrc={Photo3Min} />
        <ImageCard src={Photo4} tinySrc={Photo4Min} />
      </Marquee>
    </div>
  );
};

export default ScrollingGallery;
