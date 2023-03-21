/**
 * @description:JS打家劫舍问题是一个经典的动态规划问题，它的目标是计算在不触动警报装置的情况下，能够偷到的最高金额。
 *              在这个问题中，每个房间都有一定的金额，但是如果相邻的房间同时被偷，就会触发警报。
 *              问在不触发警报的情况下，能够偷到的最高金额是多少。这个问题可以使用递归或动态规划来解决。
 * @return {*}
 */

const nums = [1, 2, 3, 3];
// 递归解法

function rob(nums) {
  let len = nums.length;
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[len - 1];
}
console.log(rob(nums));
