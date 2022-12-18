const f1 = (a) => {
  console.log("f1", a);
  return a;
};
const f2 = (a) => {
  console.log("f2", a + 1);
  return a + 1;
};
const f3 = (a) => {
  console.log("f3", a + 2);
  return a + 2;
};
const f = (...fns) => {
  let fun = (p) => {
    fns.reduce((prev, curr) => {
      return curr(prev);
    }, p);
  };
  return fun;
};
const ff = f(f1, f2, f3);
ff(5);
const fff = f(f3, f2, f1);
fff(5);
