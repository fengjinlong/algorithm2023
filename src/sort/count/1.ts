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
