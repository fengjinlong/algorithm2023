/**
 * f = add()
 */
const add = function () {
  let args = [];
  return function fn() {
    if (arguments.length === 0) {
      // call
      let s = args.reduce((p, c) => {
        return p + c;
      });
    } else {
      args = [..._args, ...arguments];
      return fn;
    }
  };
};

const add2 = function () {
  let args = [];
  return function fn() {
    if (arguments.length === 0) {
      // call
      let s = args.reduce((p, c) => {
        return p + c;
      });
    } else {
      args = [...args, ...arguments];
      return fn;
    }
  };
};
