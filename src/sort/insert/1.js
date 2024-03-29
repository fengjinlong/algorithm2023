function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prevIndex = i - 1;
    let current = arr[i];
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = current;
  }
}

const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
function insert2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prevIndex = i - 1;
    let current = arr[i];
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = current;
  }
  console.log("arr", arr);
}
console.time("insert");
insert2(arr);
console.timeEnd("insert");
export {};

const insert3 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let prevIndex = i - 1;
    let currentItem = arr[i];
    while (prevIndex >= 0 && arr[prevIndex] > currentItem) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = currentItem;
  }
  console.log("arr3", arr);
};
insert3(arr);

const insert4 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let c = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > c) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = c;
  }
  console.log("arr", arr);
};

const insert5 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
};
console.log("insert5(arr)", insert5(arr));
