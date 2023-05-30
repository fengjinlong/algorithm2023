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
function new1(Fun, args){
  let obj = Object.create(Fun.prototype)
  let r = Fun.call(obj, args)
  return r instanceof Object? r: obj
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
