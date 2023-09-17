import { AnalyticsEvent } from "../../../interfaces/analytics";
import {
  KonvaNodeConfigType,
  KonvaNodeType,
  KonvaToolbarEnum,
} from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";
import { trackEvent } from "../../../utils/analytics";
import {
  IGenerateShapeProps,
  generateEllipse,
  generatePolygon,
  generateRectangle,
  getViewportCenter,
} from "../../../utils/konva";

type createBasicNodeFn = (
  props?: IGenerateShapeProps & Partial<KonvaNodeConfigType>
) => KonvaNodeType;

const useCreateShape = () => {
  const { addNodes, setCurrentToolbar } = useKonvaStore();

  const generateShape = (fn: createBasicNodeFn) => {
    const node = fn(getViewportCenter());
    addNodes([node], true);
    trackEvent(AnalyticsEvent.KONVA, `create ${node.type} node`, { node });
    setCurrentToolbar(KonvaToolbarEnum.SELECT);
  };

  const createRectangle = () => generateShape(generateRectangle);
  const createEllipse = () => generateShape(generateEllipse);
  const createPolygon = () => generateShape(generatePolygon);

  return { createRectangle, createEllipse, createPolygon };
};

export default useCreateShape;
