// 示例1：
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1

// 示例2：
// 输入: coins = [2], amount = 3
// 输出: -1

function getc(coins, amount) {
  if (amount < 1) return -1;
  // 省略排序过程
  let result = [];
  let sum = 0;
  let i = 0;
  while (sum < amount && i < coins.length) {
    if (sum < amount) {
      sum += coins[i];
      if (sum <= amount) {
        result.push(coins[i]);
      } else {
        sum -= coins[i];
        i++;
      }
    } else if (sum === amount) {
      break;
    } else {
      i++;
    }
  }
  if (sum !== amount) return [];
  return result;
}

const coins = [5, 2, 1];
const amount = 11;
const coins1 = [2];
const amount1 = 3;
// console.log(getc(coins, amount));

function fn(coins, amount) {
  if (amount < 1) return -1;
  let result = [];
  let sum = 0;
  let i = 0;
  while (sum < amount && i < coins.length) {
    sum += coins[i];
    if (sum < amount) {
      result.push(coins[i]);
    } else if (sum > amount) {
      sum -= coins[i];
      i++;
    } else {
      result.push(coins[i]);
      break;
    }
  }
  return sum === amount ? result : [];
}
console.log("fn(coins, amount)", fn(coins, amount));
