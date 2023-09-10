import { useEffect, useState } from "react";
import { TransformType } from "../interfaces/container";
import { useNavigationStore } from "../store/navigationStore";

// https://codesandbox.io/s/peaceful-johnson-txtws?file=/src/store.js
const useTransformListener = () => {
  const [transform, setTransform] = useState<TransformType>(
    useNavigationStore.getState().transform
  );

  useEffect(() => {
    const unsubscribe = useNavigationStore.subscribe(
      (store) => store.transform,
      setTransform
    );
    return unsubscribe;
  }, [setTransform]);

  return transform;
};

export default useTransformListener;
