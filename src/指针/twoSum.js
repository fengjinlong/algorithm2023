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
