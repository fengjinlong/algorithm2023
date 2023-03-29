function debounce(fn, delay) {
  let time = null;
  return function () {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function de(fn, delay) {
  let time = null;
  return function () {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
