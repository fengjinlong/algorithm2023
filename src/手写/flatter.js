function f1(arr) {
  if (!arr.length) return;
  return arr.reduce((previous, current) => {
    return Array.isArray(current)
      ? [...previous, ...f1(current)]
      : [...previous, current];
  }, []);
}
function f2(arr) {
  if (!arr.length) return;
  while (arr.some((ele) => Array.isArray(ele))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function f3(arr) {
  if (!arr.length) return;
  // return arr.flat(Infinity);
  // return arr.toString().split(',').map(ele=>+ele);
  // return arr.join(',').split(',').map(ele=>+ele);
  while (arr.some((ele) => Array.isArray(ele))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function fn(arr) {
  while (arr.some((ele) => Array.isArray(ele))) {
    arr = arr.flat();
  }
  return arr;
}
