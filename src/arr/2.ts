// 合并两个有序数组
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

function merge(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] > arr2[j]) {
      arr1.splice(i, 0, arr2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  return arr1;
}

console.log("arr", merge([2, 4, 5, 0, 0], [1, 3]));

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

function total(arr, targe) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] < targe) {
      i++;
    } else if (arr[i] + arr[j] > targe) {
      j--;
    } else {
      return [i, j];
    }
  }
}

export {};
