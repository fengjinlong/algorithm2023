const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
function fn(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = fn(arr.slice(0, middle));
  let right = fn(arr.slice(middle));
  return merge(left, right);
}
function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  if (left.length) res = res.concat(left);
  if (right.length) res = res.concat(right);
  return res;
}
console.log("fn(arr)", fn(arr));
