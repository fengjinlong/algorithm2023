/**
 * 碰见 （） 就执行
 *
 */
const add = function () {
  let _args = [];
  return function f() {
    if (arguments.length === 0) {
      let s = _args.reduce((p, c) => p + c);
      console.log(s);
      return s;
    }
    _args = [..._args, ...arguments];
    return f;
  };
};
const add1 = function () {
  let _args = [];
  return function f() {
    if (arguments.length === 0) {
      let result = _args.reduce((p, c) => p + c);
      return result;
    }
    _args = [..._args, ...arguments];
    return f;
  };
};
// const sum = add();
// sum(100, 200)(300);
// sum(400);
// sum();

// 传方法 fn
const add2 = function (fn) {
  let _args = [];
  return function f() {
    if (arguments.length === 0) {
      let s = _args.reduce(fn);
      console.log(s);
      return s;
    }
    _args = [..._args, ...arguments];
    return f;
  };
};
function multi(a, b) {
  return a * b;
}
function sum(a, b) {
  return a + b;
}
// const sum2 = add2(sum);
const sum2 = add2(multi);
sum2(100, 200)(300);
sum2(400)();
// sum2();

const fn3 = function (fn) {
  let _args = [];
  return function f() {
    if (arguments.length === 0) {
      return _args.reduce(fn);
    }
    _args = [..._args, ...arguments];
    return f;
  };
};
