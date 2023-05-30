// Path: src/指针/twoSum.js
function twoSumSortedArray(arr, target, i) {
  let left = 0;
  let right = arr.length - 1;
  let res = [];
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target && left > i && right !== i) {
      res = [arr[left], arr[right]];
      break;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

function threeSum(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const newTarget = target - arr[i];
    const twoSumIndex = twoSumSortedArray(arr, newTarget, i);
    if (twoSumIndex.length) {
      res.push([arr[i], ...twoSumIndex]);
    }
  }

  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 0];
const target = 10;
console.log("threeSum(arr, target)", threeSum(arr, target));
// Path: src/指针/unique.js

const arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 6, 8, 8, 8];
function fn(arr) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  // 最少次数
  let max = Math.min(...map.values());
  console.log("max", max);
  for (const m of map) {
    if (m[1] === max) {
      res.push(m[0]);
    }
  }
  console.log("res", res);
  return res;
}
fn(arr1);
