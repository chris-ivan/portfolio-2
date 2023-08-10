import { useKonvaStore } from "../../../store/konvaStore";
import {
  generateEllipse,
  generatePolygon,
  generateRectangle,
  getViewportCenter,
} from "../../../utils/konva";

const useCreateShape = () => {
  const { addNodes } = useKonvaStore();

  const createRectangle = () => {
    const rect = generateRectangle(getViewportCenter());
    addNodes([rect], true);
  };

  const createEllipse = () => {
    const ellipse = generateEllipse(getViewportCenter());
    addNodes([ellipse], true);
  };

  const createPolygon = () => {
    const polygon = generatePolygon(getViewportCenter());
    addNodes([polygon], true);
  };

  return { createRectangle, createEllipse, createPolygon };
};

export default useCreateShape;
