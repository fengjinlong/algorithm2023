// 桶排序
function sort(arr, maxVal) {
  let buckets = new Array(maxVal + 1).fill(0);
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (!buckets[arr[j]]) {
      buckets[arr[j]] = 0;
    }
    buckets[arr[j]]++;
  }
  for (let j = 0; j < buckets.length + 1; j++) {
    while (buckets[j] > 0) {
      arr[i] = j;
      i++;
      buckets[j]--;
    }
  }
  console.log("临时console-----", "arr", arr);
}
sort([1, 2, 5, 4, 2, 3], 5);

// 基数排序
// 只比较 1 位
function sort1(arr1, site) {
  if (arr1.length <= 1) return arr1;
  let point = arr1[0] % site;
  const left = arr1.filter((item) => item % site < point);
  const right = arr1.filter((item) => item % site > point);
  return [...sort1(left, site), arr1[0], ...sort1(right, site)];
}
// 比较 4 位
// 10 100 1000
function sort2(arr1, site) {
  for (let i = 0; i < site; i++) {
    
    
  }
}
console.log("arr", sort1([21, 15, 14, 12, 13], 10));
