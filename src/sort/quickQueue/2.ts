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
