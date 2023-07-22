import { TransformType } from "../interfaces/container";
import { useNavigationStore } from "../store/navigationStore";

let setNavigatingFalseTimeout: number;

const updateTransform = (newTransform: Partial<TransformType>) => {
  useNavigationStore.getState().setTransform(newTransform);
  useNavigationStore.getState().setIsNavigating(true);
  setNavigatingFalseTimeout && clearTimeout(setNavigatingFalseTimeout);

  setNavigatingFalseTimeout = setTimeout(() => {
    useNavigationStore.getState().setIsNavigating(false);
  }, 2000);
};

export default updateTransform;
