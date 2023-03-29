// 1 原型链继承
// 共享污染
function P1() {
  this.name = "parent";
}
function C1() {
  this.name = "child";
}
C1.prototype = new P1();
let c1 = new C1();

// 2 构造函数继承
// 不能继承原型属性或者方法
function P2() {
  this.name = "parent";
}
P2.prototype.getName = function () {
  return this.name;
};
function C2() {
  P2.call(this);
  this.name = "child";
}
let c2 = new C2();
c2.getName(); // TypeError: c2.getName is not a function

// 3 组合继承
// 既能继承原型属性和方法，又能继承实例属性和方法
// 多进行了一次性能开销
function P3() {
  this.name = "parent";
}
P3.prototype.getName = function () {
  return this.name;
};
function C3() {
  P3.call(this);
  this.name = "child";
}
C3.prototype = new P3();
C3.prototype.constructor = C3;
let c3 = new C3();

// 4 原型式继承
// Object.create 方法是可以为一些对象实现浅拷贝的
function P4() {
  this.name = "parent";
}
const c4 = Object.create(P4.prototype);

// 5 寄生式继承
// 使用原型式继承可以获得一份目标对象的浅拷贝，然后利用这个浅拷贝的能力再进行增强，添加一些方法
function P5() {
  this.name = "parent";
}
function clone(p) {
  const c = Object.create(p);
  c.getName = function () {
    return this.name;
  };
  return c;
}

// 6 寄生组合式继承
// 组合继承方式中提到了一些弊端，即两次调用父类的构造函数造成浪费，寄生组合继承就可以解决这个问题。
function P6() {
  this.name = "parent";
}
P6.prototype.getName = function () {
  return this.name;
};
function C6() {
  P6.call(this);
  this.name = "child";
}
function clone1(p, c) {
  c.prototype = Object.create(p.prototype);
  c.prototype.constructor = c;
}
function P61() {
  this.name = "";
}
P61.prototype.getName = function () {
  return this.name;
};
function clone11(p, c) {
  c.prototype = Object.create(p.prototype);
  c.prototype.constructor = c;
}
clone1(P6, C6);
