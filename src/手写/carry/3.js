const fn = function () {
  let arg = [...arguments];
  var fn1 = function (b) {
    arg = arg.concat(b);
    return fn1;
  };
  fn1.toString = function () {
    console.log(arg);
  };
  return fn1;
};
fn(1);
fn(1)(2);
fn(1)(2)(3);
