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

function debounc(fn, delay) {
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
