function new3(Con, ...arg) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, arg);

  return result instanceof Object ? result : obj;
}

function new1(Con, ...arg) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, arg);
  return result instanceof Object ? result : obj;
}

function new2(Con, ...arg) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let r = Con.apply(obj, arg);
  return r instanceof Object ? r : obj;
}
function n(C, ...arg) {
  let obj = {};
  Object.setPrototypeOf(obj, C.prototype);
  let result = C.apply(obj, arg);
  return result instanceof Object ? result : obj;
}
function new2(Con, ...arg) {
  let obj = {};
  Object.setPrototypeOf(obj, Con.prototype);

  let setPrototypeOf = Con.apply(obj, arg);
  return setPrototypeOf instanceof Object ? setPrototypeOf : obj;
}
// 显示原型继承
child = Object.create(parent);
// 隐示原型继承
function CI(C, ...arg) {
  let instance = Object.create(C.prototype);
  C.call(instance, ...arg);
  return instance;
}

function newf(fn, ...arg) {
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, arg);
  return res instanceof Object ? res : obj;
}
