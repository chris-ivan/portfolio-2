import { useKonvaStore } from "../../../../../store/konvaStore";

const onDeselect = () => {
  const { setSelectedNodeIds } = useKonvaStore.getState();
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
