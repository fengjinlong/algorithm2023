const arr = [1, 2, 3, [4, 5, [6, 7]]];
function f1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = arr.flat();
  }
  return arr;
}
console.log("f1(arr)", f1(arr));

function f2(arr) {
  return arr
    .toString()
    .split(",")
    .map((item) => +item);
}
console.log("f2(arr)", f2(arr));

function f3(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? f3(cur) : cur);
  }, []);
}
console.log("f3(arr)", f3(arr));
