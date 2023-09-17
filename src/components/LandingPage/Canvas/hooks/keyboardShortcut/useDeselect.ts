import { AnalyticsEvent } from "../../../../../interfaces/analytics";
import { KonvaToolbarEnum } from "../../../../../interfaces/konva";
import { useKonvaStore } from "../../../../../store/konvaStore";
import { trackEvent } from "../../../../../utils/analytics";

const onDeselect = () => {
  const { setSelectedNodeIds, currentToolbar, setCurrentToolbar } =
    useKonvaStore.getState();

  if (currentToolbar === KonvaToolbarEnum.PENCIL) {
    setCurrentToolbar(KonvaToolbarEnum.SELECT);
  }

  trackEvent(AnalyticsEvent.KONVA, "deselect node");
  setSelectedNodeIds([]);
};

const onDeselectListener = (e: KeyboardEvent) => {
  if (e.key === "Escape") onDeselect();
};

const useDeselect = () => {
  const onKeyDown = (e: KeyboardEvent) => {
    onDeselectListener(e);
  };

  return { onKeyDown };
};

export default useDeselect;
