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
function shell(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; i++) {
      let temp = arr[i];
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

function shell2(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; i++) {
      let t = arr[i];
      let k = j;
      while (k >= 0 && arr[k - i] > t) {
        arr[k] = arr[k - i];
        j -= i;
      }
      arr[k] = t;
    }
  }
  return arr;
}

