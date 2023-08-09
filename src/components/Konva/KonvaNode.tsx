import { KonvaEnum, KonvaNodeType } from "../../interfaces/konva";
import Rectangle from "./Rectangle";
import Ellipse from "./Ellipse";
import Polygon from "./Polygon";
import Line from "./Line";
import EditableText from "./Text";

const KonvaNode = (props: KonvaNodeType) => {
  const { type } = props;

  switch (type) {
    case KonvaEnum.RECT:
      return <Rectangle {...props} />;
    case KonvaEnum.ELLIPSE:
      return <Ellipse {...props} />;
    case KonvaEnum.POLYGON:
      return <Polygon {...props} />;
    case KonvaEnum.LINE:
      return <Line {...props} />;
    case KonvaEnum.TEXT:
      return <EditableText {...props} />;
    default:
      return null;
  }
};

export default KonvaNode;
