export default function throttle(func, delay) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, arguments);
      }, delay);
    }
  };
}
