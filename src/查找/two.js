function fn(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let midd = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[midd] === target) {
      return midd;
    } else if (arr[midd] > target) {
      right = midd - 1;
    } else {
      left = midd + 1;
    }
    midd = Math.floor((left + right) / 2);
  }
  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("fn(arr, 5)", fn(arr, 5));
