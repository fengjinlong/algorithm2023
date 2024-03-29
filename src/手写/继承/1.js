const { f } = require("vitest/dist/index-9f5bc072");

// 原型继承
function P1() {}
function C1() {}
C1.prototype = new P1();
let c1 = new C1();

// 2 构造函数继承
// 不能继承原型属性或者方法
function P2() {
  this.name = "parent";
}
function C2() {
  P2.call(this);
}
let c2 = new C2();
// 3 组合继承
// 既能继承原型属性和方法，又能继承实例属性和方法
// 多进行了一次性能开销
function P3() {}
function C3() {
  P3.call(this);
}
C3.prototype = new P3();
C3.prototype.constructor = C3;
let c3 = new C3();
// 4 原型式继承
// Object.create 方法是可以为一些对象实现浅拷贝的
function P4() {}
const c4 = Object.create(P4.prototype);
// 5 寄生式继承
function P5() {}
function clone(p) {
  const c = Object.create(p);
  return c;
}
const c5 = clone(P5.prototype);
// 6 寄生组合式继承

function P11() {}
function C11() {}
C11.prototype = new P11();

function P2() {}
function C2() {
  P2.call(this);
}

function P33() {}
function C33() {
  P33.call(this);
}
C33.prototype = new P33();
C33.prototype.constructor = C33;

// 原型继承
function P44() {}
const c4 = Object.create(P44.prototype);

// 寄生
function P55() {}
function clone(prototype) {
  const c = Object.create(prototype);
  c.fn = () => {};
  return c;
}
const cc = clone(P55.prototype);
// 寄生组合式
function inherit(P, C) {
  const prototype = Object.create(P.prototype);
  prototype.constructor = C;
  C.prototype = prototype;

  // C.prototype = Object.create(P.prototype);
  // C.prototype.constructor = C;
}
