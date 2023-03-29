/**
 * @description: 判断一个构造函数的原型是否在另一个构造函数的原型链上
 * 右边变量的 prototype 是否在左边变量的原型链上
 * @param {*} left
 * @param {*} right
 * @return {*}
 */
function ins(left, right) {
  let prototype = right.prototype;
  let __proto__ = left.__proto__;
  while (true) {
    if (__proto__ === null) return false;
    if (__proto__ === prototype) return true;
    __proto__ = __proto__.__proto__;
  }
}

function ins(left, right) {
  let prototype = right.prototype;
  let __proto__ = left.__proto__;
  while (1) {
    if (__proto__ === null) {
      return false;
    }
    if (__proto__ === prototype) {
      return true;
    }
    __proto__ = __proto__.__proto__;
  }
}

function ins(left, right) {
  let prototype = right.prototype;
  let __proto__ = left.__proto__;
  while (1) {
    if (__proto__ === null) {
      return false;
    }
    if (__proto__ === prototype) {
      return true;
    }
    __proto__ = __proto__.prototype;
  }
}
