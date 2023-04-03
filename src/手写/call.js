
Function.prototype.call2 = function (context, ...arg) {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  const result = context[fn](...arg);
  delete context[fn];
  return result;
};

Function.prototype.call2 = function (context, ...arg) {
  let fn = Symbol();
  context[fn] = this;
  const result = context[fn](...arg);
  delete context[fn];
  return result;
};

Function.prototype.call3 = function (C, ...arg) {
  let fn = Symbol();
  C[fn] = this;
  let result = C[fn](...arg);
  delete C[fn];
  return result;
};

Function.prototype.call3= function(C,...args){
  let fn = Symbol()
  C[fn]=this
  let result = C[fn](...args)
  delete C[fn]
  return result
}