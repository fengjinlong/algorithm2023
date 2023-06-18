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
function inserts(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
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
function i(arr) {
  for (let i = 1; i < arr.length; i++) {
    let t = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > t) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = t;
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
function shell(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; i++) {
      let t = arr[j];
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

function inf(arr) {
  // 0 ok
  for (let i = 1; i < arr.length; i++) {
    let t = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > t) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = t;
  }
}
function she(arr) {
  for (let i = Math.floor(arr.length / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < arr.length; j++) {
      let t = arr[j];
      let k = j;
      while (k > i && arr[k - i] > t) {
        arr[k] = arr[k - i];
        k -= i;
      }
      arr[k] = t;
    }
  }
  console.log("arr", arr);
}
she([1, 3, 2, 4, 5]);

function insert11(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 1 && arr[j - 1] > arr[j]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
// console.log("insert11([1,4,2,3])", insert11([1, 4, 2, 3]));

function shell1(arr) {
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
console.log("shell1([1,4,2,3])", shell1([1, 4, 2, 3]));
