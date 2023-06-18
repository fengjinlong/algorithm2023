Function.prototype.bind = function (context, args) {
  if (typeof this !== "function") return;
  context = context || window;
  const fn = this;
  return function () {
    if (new target()) {
      return new fn(...args, ...arguments);
    } else {
      return fn.call(context, ...arguments, ...args);
    }
  };
};
Function.prototype.bind = function (obj, args) {
  if (typeof this !== "function") return;
  obj = obj || window;
  const fn = this;
  return function () {
    if (new.target()) {
      return new fn(...args, ...arguments);
    } else {
      return fn.call(obj, ...arguments, ...args);
    }
  };
};
// fn = fn1.bind(obj,a)
