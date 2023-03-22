function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, min));
  let right = mergeSort(arr.slice(min));
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
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
}
const arr = [1, 3, 2, 4, 5];
console.log("mergeSort", mergeSort(arr));
