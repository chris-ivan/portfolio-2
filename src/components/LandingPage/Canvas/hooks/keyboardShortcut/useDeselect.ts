import { useKonvaStore } from "../../../../../store/konvaStore";
import { useEffect } from "react";

const onDeselect = () => {
  const { setSelectedNodeIds } = useKonvaStore.getState();
  setSelectedNodeIds([]);
};

const onDeselectListener = (e: KeyboardEvent) => {
  if (e.key === "Escape") onDeselect();
};

const useDeselect = () => {
  useEffect(() => {
    window.addEventListener("keydown", onDeselectListener);

    return () => {
      window.removeEventListener("keydown", onDeselectListener);
    };
  });
};

export default useDeselect;
