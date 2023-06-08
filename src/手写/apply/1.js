Function.prototype.apply = function (context, args) {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  let result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.apply3 = function (context, args) {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  let result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.apply2 = function (context, args) {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  let result = context[fn](...args);
  delete context[fn];
  return result;
};
