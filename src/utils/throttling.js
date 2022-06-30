export const debounce = (fn, timedelay) => {
  let timerid = null;
  return function () {
    clearTimeout(timerid);
    timerid = setTimeout(fn.bind(this, ...arguments), timedelay);
  };
};

export const throttle = (fn, timedelay) => {
  let ref = { pass: true, arguments: [] };
  return function () {
    ref.arguments = arguments;
    if (ref.pass) {
      setTimeout(() => {
        fn.apply(this, ref.arguments);
        ref.pass = true;
      }, timedelay);

      ref.pass = false;
    }
  };
};
