const add = function () {
  let res = [];
  return function f() {
    if (arguments.length) {
      res = [...res, ...arguments];
      return f;
    } else {
      return res.reduce((p, c) => {
        return p + c;
      });
    }
  };
};

const add2 = function (fn) {
  let res = [];
  return function f() {
    if (arguments.length) {
      res = [...res, ...arguments];
      return f;
    } else {
      return res.reduce(fn);
    }
  };
};

const add3 = function (fn, ...args) {
  if (fn.length > args.length) {
    return function () {
      add3(fn, ...args, ...arguments);
    };
  } else {
    return fn(...args);
  }
};
const cf = function (fns) {
  return fns.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
};

const cf1 = function (fns) {
  return fns.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
};
