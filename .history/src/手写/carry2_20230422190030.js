/**
 * 参数够了就执行，不够就继续收集参数
 */

const cy = (fn, ...args) => {
  if (fn.length > args.length) {
    return (...a) => cy(fn, ...args, ...a);
  } else {
    let s = fn(...args);
    console.log("s", s);
    return s;
  }
};
const f = (a, b, c) => a + b + c;
const f1 = (a, b, c) => console.log(a, b, c);
const fn2 = cy(f);
fn2(1);
fn2(2);
fn2(3)(2)(3);

const cy1 = (fn, ...args) => {
  if (fn.length > args.length) {
    return function (...args2) {
      return cy1(fn, ...args, ...args2);
    };
  } else {
    return fn(...args);
  }
};

const cy2 = (fn, ...args) => {
  if(fn.length > args.length){
    return (...args2)=>cy2(fn, ...args,...args2)
  }