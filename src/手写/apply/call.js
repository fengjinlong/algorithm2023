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

Function.prototype.call3 = function (C, ...args) {
  let fn = Symbol();
  C[fn] = this;
  let result = C[fn](...args);
  delete C[fn];
  return result;
};
Function.prototype.call4 = function (C, ...args) {
  let fn = Symbol();
  C[fn] = this;
  let result = C[fn](...args);
  delete C[fn];
  return result;
};
Function.prototype.call5 = function (C, ...args) {
  let fn = Symbol();
  C[fn] = this;
  let result = C[fn](...args);
  delete C[fn];
  return result;
};

Function.prototype.call6 = function (C, ...args) {
  let fn = Symbol();
  C[fn] = this;
  let result = C[fn](...args);
  delete C[fn];
  return result;
};
fn.call(obj, args);
Function.prototype.call7 = function (C, ...args) {
  let fn = Symbol();
  C[fn] = this;
  let r = C[fn](...args);
  delete C[fn];
  return r;
};

Function.prototype.ca = function (Obj, ...arg) {
  let fn = Symbol();
  Obj[fn] = this;
  let r = Obj[fn](...arg);
  delete Obj[fn];
  return r;
};
// fn.call(obj, 1)
