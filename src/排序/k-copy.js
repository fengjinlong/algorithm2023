const arr = [5, 1, 1, 1, 1, 2, 3, 2, 3, 3, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9];
let k = 1;

/**
 * @description: 前 K 个高频元素
 * @param {*} arr
 * @param {*} k
 * @return {*}
 */
function fn(arr, k) {
  let map = new Map();
  for (const element of arr) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  let result = [];
  for (let m of map) {
    result[m[1]] = m[0];
  }
  result = result.filter((ele) => ele !== undefined).reverse();

  console.log("map", map);
  console.log("result", result);
  return result.slice(0, k);
}
console.log(fn(arr, k));
