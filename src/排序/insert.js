function insertSort(arr) {
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
}
const arr = [1, 3, 2, 4, 5];
console.log("insert", insertSort(arr));

function insertSortaa(arr) {
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
}

function insertSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - i] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

function insertSo1(arr) {
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
}

// shell sort
function shellSort(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let t = arr[j];
      let k = j;
      while (k > 0 && arr[k - i] > t) {
        arr[k] = arr[k - i];
        k -= i;
      }
      arr[k] = t;
    }
  }
  return arr;
}

function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let t = arr[i];
    let k = j;
    while (k > 0 && arr[k - 1] > arr[k]) {
      arr[k] = arr[k - 1];
      k--;
    }
    arr[k] = t;
  }
  return arr;
}

function shel(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let t = arr[i];
      let k = j;
      while (k > 0 && arr[k - i] > arr[k]) {
        arr[k] = arr[k - i];
        k -= i;
      }
      arr[k] = t;
    }
  }
  return arr;
}
