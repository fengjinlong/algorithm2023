const arr = [1, 9, 2, 8, 5];

// console.log("she(arr)", she(arr));
function she(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let currentItem = arr[j];
      let prevIndex = j - i;
      while (prevIndex >= 0 && arr[prevIndex] > currentItem) {
        arr[prevIndex + i] = arr[prevIndex];
        prevIndex -= i;
      }
      arr[prevIndex + i] = currentItem;
    }
  }
  return arr;
}

function shell(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let current = arr[j];
      let prevIndex = j - i;
      while (prevIndex >= 0 && arr[prevIndex] > current) {
        arr[prevIndex + i] = arr[prevIndex];
        prevIndex -= i;
      }
      arr[prevIndex + i] = current;
    }
  }
  return arr;
}
console.log("shell(arr)", shell(arr));

function shell2(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let temp = arr[j];
      let k = j;
      while (k > i && arr[k - i] > arr[k]) {
        arr[k] = arr[k - i];
        k -= i;
      }
      arr[k] = temp;
    }
  }
  return arr;
}
console.log("shell2([1,4,2,3])", shell2([1, 4, 2, 3]));
