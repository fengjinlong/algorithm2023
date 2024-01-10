function new1(context, args) {
  let obj = Object.create(context.prototype);
  let result = context.call(obj, args);
  return result instanceof Object ? result : obj;
}

function n(Fun, args) {
  let obj = Object.create(Fun.prototype);
  let r = Fun.call(obj, args);
  return r instanceof Object ? r : obj;
}
function new1(Fun, args) {
  let obj = Object.create(Fun.prototype);
  let r = Fun.call(obj, args);
  return r instanceof Object ? r : obj;
}
function ins(left, right) {
  let __proto__ = left.__proto__;
  let p = right.prototype;
  while (1) {
    if (__proto__ === null) {
      return false;
    }
    if (__proto__ === p) {
      return true;
    }
    __proto__ = __proto__.__proto__;
  }
}

function fn(left, right) {
  let _p = left.__proto__;
  let prototype = right.prototype;
  while (1) {
    if (_p === null) {
      return false;
    }
    if (_p === prototype) {
      return true;
    }
    _p = _p.__proto__;
  }
}
function _new(Fn, args) {
  let obj = Object.create(Fn.prototype);
  let result = Fn.call(obj, args);
  return result instanceof Object ? result : obj;
}
function __new(Fn, args) {
  let obj = Object.create(Fn.prototype);
  let result = Fn.call(obj, args);
  return result instanceof Object ? result : obj;
}
function _new(Fn, args) {
  let obj = Object.create(Fn.prototype);
  let r = Fn.call(obj, args);
  return r instanceof Object ? r : obj;
}

function _new(_Fun, args) {
  const o = Object.create(_Fun.prototype);
  const r = _Fun.call(o, args);
  return r instanceof Object ? r : o;
}
