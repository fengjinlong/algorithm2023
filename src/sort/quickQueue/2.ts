function quickQueue(arr) {
  if (arr.length < 2) return arr;
  const point = arr[arr.length - 1];
  const leftArr = arr.filter((ele, index) => {
    if (ele <= point && index < arr.length - 1) {
      return ele;
    }
  });
  const rightArr = arr.filter((ele) => ele > point);

  return [...quickQueue(leftArr), point, ...quickQueue(rightArr)];
}

const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
function quickQueue2(arr) {
  if (arr.length < 2) return arr;
  const point = arr[arr.length - 1];
  const leftArr = arr.filter(
    (ele, index) => ele <= point && index < arr.length - 1
  );
  const rightArr = arr.filter((ele) => ele > point);
  return [...quickQueue2(leftArr), point, ...quickQueue2(rightArr)];
}
console.time("quickQueue");
quickQueue2(arr);
console.timeEnd("quickQueue");
