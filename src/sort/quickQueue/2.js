var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
function quickQueue(arr) {
  if (arr.length < 2) return arr;
  var point = arr[arr.length - 1];
  var leftArr = arr.filter(function (ele, index) {
    if (ele <= point && index < arr.length - 1) {
      return ele;
    }
  });
  var rightArr = arr.filter(function (ele) {
    return ele > point;
  });
  return __spreadArray(
    __spreadArray(__spreadArray([], quickQueue(leftArr), true), [point], false),
    quickQueue(rightArr),
    true
  );
}
var arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
function quickQueue2(arr) {
  if (arr.length < 2) return arr;
  var point = arr[arr.length - 1];
  var leftArr = arr.filter(function (ele, index) {
    return ele <= point && index < arr.length - 1;
  });
  var rightArr = arr.filter(function (ele) {
    return ele > point;
  });
  return __spreadArray(
    __spreadArray(
      __spreadArray([], quickQueue2(leftArr), true),
      [point],
      false
    ),
    quickQueue2(rightArr),
    true
  );
}
console.time("quickQueue");
quickQueue2(arr);
console.timeEnd("quickQueue");

const quickQueue3 = (arr) => {
  if (arr.length < 2) return arr;
  const point = arr[arr.length - 1];
  const leftArr = arr.filter(
    (ele, index) => ele <= point && index < arr.length - 1
  );
  const rightArr = arr.filter((ele) => ele > point);
  return [...quickQueue3(leftArr), point, ...quickQueue3(rightArr)];
};
