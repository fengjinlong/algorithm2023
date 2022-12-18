// 两数之和 哈希表优化法
const sumTwo = (arr, target) => {
  const a = [];
  const map = new Map();
  arr.forEach((ele, index) => {
    map.set(ele, index);
  });
  arr.forEach((ele, index) => {
    if (map.has(target - ele)) {
      a.push([index, map.get(target - ele)]);
    }
  });
  return a;
};

console.log("arr", sumTwo([1, 2, 3, 4], 7));
