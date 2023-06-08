Function.prototype.bind = function (context, args) {
  if (typeof this !== "function") return;
  let fn = this;
  return function () {
    if (new.target) {
      return new fn(...args, ...arguments);
    } else {
      return fn.apply(context, [..._args, ...arguments]);
    }
  };
};

Function.prototype.bind = function (context, args) {
  if (typeof this !== "function") return;
  let fn = this;
  return function () {
    if (new target()) {
      return new fn(...args, ...arguments);
    } else {
      return fn.apply(context, [...args, ...arguments]);
    }
  };
};
