import { useKonvaStore } from "../../../../store/konvaStore";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../../../UI/Loading/LoadingSpinner";

const ColorPickerContainer = lazy(() => import("./ColorPickerContainer"));

export interface IFillColorPicker {
  type: "fill" | "stroke";
  label: string;
}

const ColorPicker = (props: IFillColorPicker) => {
  const { getSelectedNodes } = useKonvaStore();
  const selectedNodes = getSelectedNodes();

  if (!selectedNodes.length) return null;
  if (selectedNodes.some((node) => !node.config[props.type])) return null;

  return (
    <Suspense
      fallback={
        <div className="mx-3 text-darker-grey dark:text-white">
          <LoadingSpinner />
        </div>
      }
    >
      <ColorPickerContainer {...props} />
    </Suspense>
  );
};

export default ColorPicker;
