import { FRAME_KEY } from "../../../../interfaces/frame";
import { useKonvaStore } from "../../../../store/konvaStore";

const useGlobalDeselect = () => {
  const { setSelectedNodeIds } = useKonvaStore();

  const onMouseDown = (e: MouseEvent) => {
    const excludedElement = document.getElementById(FRAME_KEY.LANDING);
    if (!excludedElement || !e.target) return;
    // @ts-ignore
    if (!excludedElement.contains(e.target)) {
      setSelectedNodeIds([]);
    }
  };

  return { onMouseDown };
};

export default useGlobalDeselect;
