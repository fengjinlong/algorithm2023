function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const merge = (left, right) => {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  if (left.length) res.concat(left);
  if (right.length) res.concat(right);
  return res;
};

const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
console.time("mergeSort");
mergeSort(arr);
console.timeEnd("mergeSort");

function mergeSort2(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort2(arr.slice(0, mid));
  let right = mergeSort2(arr.slice(mid));
  return merge2(left, right);
}
function merge2(left, right) {
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
