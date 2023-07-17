type F = (...args: any[]) => void;

const debounce = function (fn: F, t = 100) {
  let timeout: number | undefined;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line
      fn(...args);
    }, t);
  };
};

export default debounce;
