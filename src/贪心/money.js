/**
 * 贪心算法
 * 商店老板有1、2、5、10面额的纸币，小伙买东西给了100花了80，计算如何找零是最佳(钱的张数最少)
 * 无数个 12510
 *
 * 默认数组是排好序列的 [ 10, 5, 2, 1]
 */

function money(arr, total) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let c = arr[i];
    while (sum + c <= total) {
      sum += c;
      result.push(c);
    }
  }
  return result;
}
console.log(money([10, 5, 2, 1], 23));
