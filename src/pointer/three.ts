export {};
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， a + b + c = 0
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// a+b+c=0 => a+b=-c

const threeSum = (nums: number[]) => {
  const result = [];
  // i target index
  // j k two pointer
  // 排序

  nums.sort((a, b) => a - b);
  let already = [];
  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i];
    // already.push(nums[i]);
    let j = 0;
    let k = nums.length - 1;

    while (j < k && !already.includes(nums[i])) {
      if (nums[j] + nums[k] === target) {
        if (j !== i && k !== i) {
          already.push(nums[i]);
          already.push(nums[j]);
          already.push(nums[k]);
          result.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
        } else {
          if (j === i) {
            j++;
          } else if (k === i) {
            k--;
          }
        }
      } else if (nums[j] + nums[k] < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  console.log(result);
};
threeSum([-1, 0, 1, 2, -1, -4]);
