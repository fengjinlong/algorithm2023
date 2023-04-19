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

function fn1(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
}

function fn11(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
}
