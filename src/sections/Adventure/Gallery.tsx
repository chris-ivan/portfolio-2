import PhotoCard from "../../components/PhotoCard/Playground";
import { PHOTO_CARDS } from "../../static/frames";

const Gallery = () => {
  return (
    <>
      {PHOTO_CARDS.map((photo) => (
        <PhotoCard {...photo} />
      ))}
    </>
  );
};

export default Gallery;
