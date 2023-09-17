import { useKonvaStore } from "../../../../store/konvaStore";
import {
  useState,
  useCallback,
  useEffect,
  useRef,
  SetStateAction,
} from "react";
import { ColorResult } from "react-color";
import { getColorHex } from "../../../../utils/color";
import { IFillColorPicker } from ".";
import { KonvaNodeType } from "../../../../interfaces/konva";
import { useMemo } from "react";
import { trackEvent } from "../../../../utils/analytics";
import { AnalyticsEvent } from "../../../../interfaces/analytics";

const getInitialFill = (
  selectedNodes: KonvaNodeType[],
  type: "fill" | "stroke"
) => {
  const defaultColor = "#000000";
  if (!selectedNodes.length || selectedNodes.length !== 1) return defaultColor;
  return selectedNodes[0].config[type];
};

const useColorPicker = (props: IFillColorPicker) => {
  const { type } = props;

  const { getSelectedNodes, modifyNodes } = useKonvaStore();
  const [isOpen, setOpen] = useState<boolean>(false);

  const selectedNodes = getSelectedNodes();
  const initialFill = useMemo(
    () => getInitialFill(selectedNodes, type),
    [selectedNodes, type]
  );

  const [fillColor, setFillColor] = useState<string>(initialFill as string);
  const isDragging = useRef<boolean>(false);

  const changeColor = useCallback(
    (color: ColorResult, addToHistory: boolean) => {
      if (!selectedNodes?.length) return;

      const hex = getColorHex(color);

      modifyNodes(
        selectedNodes.map((node) => node.id),
        (config) => ({
          ...config,
          [type]: hex,
        }),
        addToHistory
      );

      setFillColor(hex);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedNodes]
  );

  const onChange = useCallback(
    (color: ColorResult, e: React.ChangeEvent<HTMLInputElement>) => {
      if (!selectedNodes.length) return null;

      const isMouseDown = e.type === "mousedown";

      if (!isMouseDown) {
        isDragging.current = true;
        changeColor(color, false);
        return;
      }

      if (isDragging.current) {
        isDragging.current = false;
        changeColor(color, false);
        return;
      }

      trackEvent(AnalyticsEvent.KONVA, "change color", { selectedNodes });
      changeColor(color, true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedNodes]
  );

  useEffect(() => {
    if (selectedNodes.length !== 1) return;

    const selectedNode = selectedNodes[0];
    if (!selectedNode?.config?.[type]) return;

    setFillColor(selectedNode.config[type] as string);
  }, [selectedNodes, type]);

  const setOpenColorPicker = useCallback((value: SetStateAction<boolean>) => {
    if (typeof value === "boolean") {
      trackEvent(
        AnalyticsEvent.KONVA,
        `${value ? "open" : "close"} color picker`
      );
      if (value === false) isDragging.current = false;
      setOpen(value);
      return;
    }

    setOpen((prev) => {
      const newValue = value(prev);
      trackEvent(
        AnalyticsEvent.KONVA,
        `${newValue ? "open" : "close"} color picker`
      );
      if (newValue === false) isDragging.current = false;
      return newValue;
    });
  }, []);

  return {
    setOpenColorPicker,
    fillColor,
    onChange,
    openColorPicker: isOpen,
  };
};

export default useColorPicker;
