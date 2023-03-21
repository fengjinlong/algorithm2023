/**
 * 小孩分面包,第一个小孩能吃1块，第二个能吃2块，第三个能吃3块，一共有三块面包。怎么分配
 * - 小孩按照能吃面包多少排序，少的在前
 * [1,2,3] children
 * - 面包吃一块少一块
 * [1,1,1] breads
 */
function bread(chilren, breads) {
  let res = 0;
  let i = 0; // 小孩
  let j = 0; // 面包
  while (i < chilren.length && j < breads.length) {
    let result = [];
    let i = 0;
    let j = 0;
    let n = 0; // 当前小孩已经吃的面包数
    while (i < chilren.length && j < breads.length) {
      n += breads[j];
      if (n >= chilren[i]) {
        // 当前小孩已经吃的面包数 大于等于 当前小孩能吃的面包数
        result.push(chilren[i]);
        i++; // 下一个小孩
        n = 0; // 重置当前小孩已经吃的面包数
      }
      j++; // 下一个面包
    }
  }
  return res;
}
