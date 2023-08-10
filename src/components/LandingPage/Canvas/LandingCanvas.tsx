import { Stage, Layer, Transformer, Rect } from "react-konva";
import { Transformer as TransformerType } from "konva/lib/shapes/Transformer";
import { Stage as StageType } from "konva/lib/Stage";
import { Layer as LayerType } from "konva/lib/Layer";
import { Rect as RectType } from "konva/lib/shapes/Rect";
import { useKonvaStore } from "../../../store/konvaStore";
import KonvaNode from "../../Konva/KonvaNode";
import useKeyboardShortcut from "./hooks/useKeyboardShortcut";
import useLandingCanvas from "./useLandingCanvas";
import { useRef } from "react";
import useTransformer from "./hooks/useTransformer";
import { BASIC_SHAPE } from "../../../static/konva";
import useViewport from "../../../hooks/useViewport";
import useFontLoaded from "./hooks/useFontLoaded";

const LandingCanvas = () => {
  const stageRef = useRef<StageType>(null);
  const layerRef = useRef<LayerType>(null);
  const trRef = useRef<TransformerType>(null);
  const selectionRef = useRef<RectType>(null);

  useFontLoaded();
  useKeyboardShortcut({ stageRef });
  const mouseHandler = useLandingCanvas({ layerRef, selectionRef });
  const transformer = useTransformer({ layerRef, trRef });
  const { width, height } = useViewport();

  const { onMouseDown, onMouseMove, onMouseUp } = mouseHandler;
  const { allowResize, enabledAnchors } = transformer;

  const { currentState, selectedNodeIds, isEditingText } = useKonvaStore();

  return (
    <Stage
      ref={stageRef}
      width={width}
      height={height - 40}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onMouseMove={onMouseMove}
      onTouchMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchEnd={onMouseUp}
    >
      <Layer ref={layerRef}>
        {currentState.map((node, i) => (
          <KonvaNode key={i} {...node} />
        ))}
        {selectedNodeIds && !isEditingText && (
          <Transformer
            ref={trRef}
            enabledAnchors={enabledAnchors}
            resizeEnabled={allowResize}
            rotateEnabled={allowResize}
            boundBoxFunc={(oldShape, newShape) => {
              // limit resize
              if (
                newShape.height < BASIC_SHAPE.MIN_HEIGHT ||
                newShape.width < BASIC_SHAPE.MIN_WIDTH
              ) {
                return oldShape;
              }
              return newShape;
            }}
          />
        )}
        <Rect fill="rgba(0,0,255,0.5)" ref={selectionRef} />
      </Layer>
    </Stage>
  );
};

export default LandingCanvas;
