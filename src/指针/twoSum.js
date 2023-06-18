// Path: src/指针/twoSum.js
function twoSumSortedArray(arr, target) {
  let left = 0;
  let right = 0;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// 乱序的情况
function twoSumUnsortedArray(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let res = target - arr[i];
    if (map.has(res)) {
      return [map.get(res), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [];
}

function twoSumUnsortedArray1(arr, target) {
  const map = new Map();
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    let val = target - arr[i];
    if (map.get(val)) {
      a = [map.get(val), val];
    } else {
      map.set(arr[i], i);
    }
  }
  return a;
}
console.log(
  "twoSumUnsortedArray1([1,2,3,4], 6)",
  twoSumUnsortedArray1([1, 2, 3, 4], 5)
);
