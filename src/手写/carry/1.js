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
/**
 * f = add2(fn)
 */
const add2 = function (f) {
  let args = [];
  return function fn() {
    if (arguments.length === 0) {
      // call
      let s = args.reduce(f);
      return s;
    } else {
      args = [...args, ...arguments];
      return fn;
    }
  };
};
const fff = (a, b) => a * b;
const f = add2(fff);
f(2);
f(2);
f(2);
console.log("f()", f()); // 5
