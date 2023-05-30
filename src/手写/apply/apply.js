Function.prototype.apply2 = function (context, args = []) {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  const result = args.length ? context[fn](...args) : context[fn]();
  delete context[fn];
  return result;
};
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply2(null, numbers);
console.log(max);

export {};

Function.prototype.apply3 = (context, args) => {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  const result = args.length ? context[fn](...args) : context[fn]();
  delete context[fn];
  return result;
};

Function.prototype.apply4 = (context, args) => {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  const result = args.length ? context[fn](...args) : context[fn];
  delete context[fn];
  return result;
};

Function.prototype.apply5 = (context, args) => {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  const result = args.length ? context[fn](...args) : context[fn];
  delete context[fn];
  return result;
};

Function.apply6 = (context, args) => {
  context = context || {};
  let fn = Symbol();
  context[fn] = this;
  const res = args.length ? context[fn](...args) : context[fn];
  delete context[fn];
  return res;
};
