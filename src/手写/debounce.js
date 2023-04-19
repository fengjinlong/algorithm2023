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

function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

function deb(fn, delay) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
