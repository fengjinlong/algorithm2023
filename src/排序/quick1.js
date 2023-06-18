function partition(arr, low, high) {
  if (low > high) return;
  let left = low;
  let right = high;
  let p = arr[left];
  while (left < right) {
    while (left < right && arr[left] < p) {
      left++;
    }
    while (left < right && arr[right] > p) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      high--;
    }
  }
  partition(arr, low, left - 1);
  partition(arr, left + 1, high);
}
const arr = [1, 4, 2, 3];
partition(arr, 0, arr.length - 1);
console.log("arr", arr);
