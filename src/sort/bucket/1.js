function b(arr) {
  let buckets = [];
  let max = Math.max.apply(null, arr);
  for (let i = 0; i < max + 1; i++) {
    buckets[i] = [];
  }
  arr.forEach((item, i) => {
    buckets[item].push(item);
  });
  const result = [];
  buckets.forEach((item, i) => {
    result.push(...item);
  });

  console.log("arr", result);
}
b([1, 5, 2, 4, 3]);
