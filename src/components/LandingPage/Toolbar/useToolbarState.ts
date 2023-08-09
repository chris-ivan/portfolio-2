import { KonvaToolbarEnum } from "../../../interfaces/konva";
import { useKonvaStore } from "../../../store/konvaStore";

const useToolbarState = () => {
  const { setCurrentToolbar } = useKonvaStore();

  const handlePencil = () => {
    setCurrentToolbar(KonvaToolbarEnum.PENCIL);
  };

  const handleMove = () => {
    setCurrentToolbar(KonvaToolbarEnum.SELECT);
  };

  return { handlePencil, handleMove };
};

export default useToolbarState;
