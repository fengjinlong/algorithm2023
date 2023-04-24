function shell(arr) {
  for (let i = arr.length - 1; i > 0; i = Math.floor(i / 2)) {
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
  console.log("shell", arr);

  return arr;
}

const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
console.time("shell");
shell(arr);
console.timeEnd("shell");

function shell2(arr) {
  for (let i = arr.length / 2; i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let currentItem = arr[j];
      let prevIndex = j - i;
      while (prevIndex >= 0 && arr[prevIndex] > currentItem) {
        arr[prevIndex + 1] = arr[prevIndex];
        previndex -= i;
      }
      arr[prevIndex + i] = currentItem;
    }
  }
  console.log("shell2", arr);
}
shell2(arr);

function shell3(arr) {
  for (let i = arr.length / 2; i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let current = arr[i];
      let prevIndex = j;
      while (prevIndex >= 0 && arr[prevIndex - i] > current) {
        arr[prevIndex] = arr[prevIndex - i];
        prevIndex -= i;
      }
      arr[prevIndex] = current;
    }
  }
  return arr;
}
