// 1
function P1() {}
function C1() {}
C1.prototype = new P1();
let c1 = new C1();
// 2
function P2(arguments) {}
function C2(arguments) {
  P2.call(this);
}
let c2 = new C2();
// 3
function P3(arguments) {}
function C3(arguments) {
  P3.call(this);
}
C3.prototype = new P3();
C3.prototype.constructor = C3;
let c3 = new C3();
// 4
function P4(arguments) {}
const c4 = Object.create(P4.prototype);
// 5
function P5(arguments) {}
function clone(p) {
  const c = Object.create(p);
  c.say = function () {};
  return c;
}
const c5 = clone(P5.prototype);
// 6 寄生式组合继承
function inherit(Sub, Par) {
  const prototype = Object.create(Par.prototype);
  prototype.constructor = Sub;
  Sub.prototype = prototype;
}
// 7 class 继承
class P7 {
  constructor() {
    this.name = "parent";
  }
  say() {}
}
class C7 extends P7 {
  constructor() {
    super();
    this.name = "child";
  }
}
let c7 = new C7();
// 红宝书 P 238
