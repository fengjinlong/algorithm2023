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
const prices = [7, 5, 3, 6, 4];
console.log("maxProfit", maxProfit(prices));
