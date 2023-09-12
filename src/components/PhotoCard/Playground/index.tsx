import { FC, lazy, useMemo } from "react";
import Draggable from "react-draggable";
import { IPhotoCard } from "../../../static/frames";
import usePhotoCard from "./usePhotoCard";
import RenderWhenInView from "../../template/RenderWhenInView";

const PhotoCardContent = lazy(() => import("./PhotoCardContent"));

const PhotoCard: FC<IPhotoCard> = (props) => {
  const { src, tinySrc } = props;
  const photoCard = usePhotoCard(props);
  const { position, cursor, onDrag, onDragStart, onDragStop } = photoCard;

  const Element = useMemo(
    () => <PhotoCardContent src={src} tinySrc={tinySrc} />,
    [tinySrc, src]
  );

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pointer-events-none touch-none">
      <Draggable
        bounds="parent"
        position={position}
        onStart={onDragStart}
        onDrag={onDrag}
        onStop={onDragStop}
        key={props.key}
      >
        <div
          key={props.key}
          style={{ cursor }}
          className="w-fit pointer-events-auto touch-auto"
        >
          <RenderWhenInView width={800} height={866}>
            {Element}
          </RenderWhenInView>
        </div>
      </Draggable>
    </div>
  );
};

export default PhotoCard;
