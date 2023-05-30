const arr = [5, 1, 1, 1, 1, 2, 3, 2, 3, 3, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9];
let k = 1;

/**
 * @description: 前 K 个 **高频** 元素
 * @param {*} arr
 * @param {*} k
 * @return {*}
 */
function fn(arr, k) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  let result = [];
  for (let m of map) {
    // console.log("m[0]", m[0]);
    // console.log("m[1]", m[1]);
    console.log("m", m);
    result[m[1]] = m[0];
  }
  console.log(
    "result",
    result.filter((ele) => ele !== undefined)
  );
  result = result.filter((ele) => ele !== undefined).reverse();

  console.log("map", map);
  console.log("result", result);
  return result.slice(0, k);
}
console.log(fn(arr, k));
