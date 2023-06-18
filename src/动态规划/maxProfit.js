/**
 * @description: 买股票问题
 * 找到最小的买入价格，然后找到最大的卖出价格
 * 单笔交易
 * @param {*} prices
 * @return {*}
 */
const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
function mp(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (min < prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      mac = prices[i] - min;
    }
  }
  return max;
}
const prices = [7, 5, 3, 6, 4];
console.log("maxProfit", maxProfit(prices));

function mp(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (min < prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
}

function mp2(pricesArr) {
  let min = pricesArr[0];
  let max = 0;
  for (let i = 1; i <= pricesArr.length; i++) {
    if (min < pricesArr[i]) {
      min = pricesArr[i];
    } else if (pricesArr[i] - min > max) {
      max = pricesArr[i] - min;
    }
  }
  return max;
}

function gupiao(pricesArr) {
  let min = pricesArr[0];
  let max = 0;
  for (let i = 1; i < pricesArr.length; i++) {
    if (min > pricesArr[i]) {
      min = pricesArr[i];
    } else if (pricesArr[i] - min > max) {
      max = pricesArr[i] - min;
    }
  }
  return max;
}

function gp(arr) {
  let min = arr[0];
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (arr[i] - min > max) {
      max = arr[i] - min;
    }
  }
  return max;
}
