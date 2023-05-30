function t(fn, delay) {
  let t1 = new Date();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let t2 = new Date();
      if (t2 - t1 > delay) {
        target(args);
        t1 = new Date();
      }
    },
  });
}

function t1(fn, delay) {
  let time1 = new Date();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let time2 = new Date();
      if (time2 - time1 > delay) {
        target(args);
        time1 = new Date();
      }
    },
  });
}

function d(fn, delay) {
  let timer = null;
  return function (argument) {
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, [...arguments]);
      }, delay);
    }
  };
}
