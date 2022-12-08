function mergeFun(arr) {
  return merge(arr);
}

function merge(arr: any) {
  // Implement
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeArr(merge(left), merge(right));
}
function mergeArr(arg0: any, arg1: any) {
  let res = [];
  while (arg0.length && arg1.length) {
    if (arg0[0] < arg1[0]) {
      res.push(arg0.shift());
    } else {
      res.push(arg1.shift());
    }
  }
  if (arg0.length) {
    res = res.concat(arg0);
  }
  if (arg1.length) {
    res = res.concat(arg1);
  }
  return res;
}
