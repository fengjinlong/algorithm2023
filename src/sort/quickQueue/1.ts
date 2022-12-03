const arr = [1, 8, 2, 7, 3, 2, 9, 5];
function quickQueue(arr: number[]): number[] {
  if (arr.length < 2) return [];
  let point = arr[arr.length - 1];
  const leftArr = arr.filter((ele, index) => {
    if (ele <= point && index < arr.length - 1) {
      return ele;
    }
  });
  const rightArr = arr.filter((ele) => ele > point);
  return [...quickQueue(leftArr), point, ...quickQueue(rightArr)];
}
console.log(quickQueue(arr));
// https://juejin.cn/post/6844903938290876430
