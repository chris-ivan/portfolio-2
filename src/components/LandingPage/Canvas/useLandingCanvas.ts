import { KonvaEventObject } from "konva/lib/Node";
import { useKonvaStore } from "../../../store/konvaStore";
import { KonvaToolbarEnum } from "../../../interfaces/konva";
import useCreateLine from "../../Konva/Line/useCreateLine";
import { Rect } from "konva/lib/shapes/Rect";
import useSelection from "./hooks/useSelection";
import { Layer } from "konva/lib/Layer";

interface IUseLandingCanvas {
  selectionRef: React.RefObject<Rect>;
  layerRef: React.RefObject<Layer>;
}

const useLandingCanvas = (props: IUseLandingCanvas) => {
  const { setSelectedNodeIds, currentToolbar } = useKonvaStore();
  const selection = useSelection(props);
  const line = useCreateLine();

  const checkDeselect = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedNodeIds([]);
    }
  };

  const onMouseDown = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    switch (currentToolbar) {
      case KonvaToolbarEnum.SELECT:
        selection.onMouseDown(e);
        return checkDeselect(e);
      case KonvaToolbarEnum.PENCIL:
        return line.onMouseDown(e);
      default:
        return;
    }
  };

  const onMouseMove = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    switch (currentToolbar) {
      case KonvaToolbarEnum.SELECT:
        return selection.onMouseMove(e);
      case KonvaToolbarEnum.PENCIL:
        return line.onMouseMove(e);
      default:
        return;
    }
  };

  const onMouseUp = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    switch (currentToolbar) {
      case KonvaToolbarEnum.SELECT:
        return selection.onMouseUp(e);
      case KonvaToolbarEnum.PENCIL:
        return line.onMouseUp();
      default:
        return;
    }
  };

  return { onMouseDown, onMouseMove, onMouseUp };
};

export default useLandingCanvas;
