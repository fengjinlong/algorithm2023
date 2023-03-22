function sum(arr, target) {
  let res = [];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let num = target - arr[i];
    if (map.has(num)) {
      res.push([num, arr[i]]);
    } else {
      map.set(arr[i], i);
    }
  }
  return res;
}
const arr = [1, 3, 2, 4, 5, 3, 5];
console.log("arr", sum(arr, 5));
