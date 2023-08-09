import { useKonvaStore } from "../../../store/konvaStore";
import {
  IGenerateShapeProps,
  generateEllipse,
  generatePolygon,
  generateRectangle,
} from "../../../utils/konva";

const createShapeProps: IGenerateShapeProps = {
  x: 400,
  y: 400,
};

const useCreateShape = () => {
  const { addNodes } = useKonvaStore();

  const createRectangle = () => {
    const rect = generateRectangle(createShapeProps);
    addNodes([rect], true);
  };

  const createEllipse = () => {
    const ellipse = generateEllipse(createShapeProps);
    addNodes([ellipse], true);
  };

  const createPolygon = () => {
    const polygon = generatePolygon(createShapeProps);
    addNodes([polygon], true);
  };

  return { createRectangle, createEllipse, createPolygon };
};

export default useCreateShape;
