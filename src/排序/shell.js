function shellSort(arr) {
  // flag
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let temp = arr[j];
      let k = j;
      while (k >= 0 && arr[k - i] > temp) {
        arr[k] = arr[k - i];
        k -= i;
      }
      arr[k] = temp;
    }
  }
  return arr;
}
const arr = [1, 3, 2, 4, 5];
console.log("shell arr", shellSort(arr));
