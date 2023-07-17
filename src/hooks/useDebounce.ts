import { useMemo } from "react";
import debounce from "../utils/debounce";

const useDebounce = (fn: (...args: any[]) => void, t = 10) => {
  return useMemo(() => {
    return debounce(fn, t);
    // eslint-disable-next-line
  }, []);
};

export default useDebounce;
