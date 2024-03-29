function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, min));
  let right = mergeSort(arr.slice(min));
  return merge(left, right);
}
function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
}
const arr = [1, 3, 2, 4, 5];
console.log("mergeSort", mergeSort(arr));
function merge1(arr) {
  if (arr.length < 2) return arr;
  let min = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, min));
  let right = merge(arr.slice(min));
  return mergeSort1(left, right);
}
function mergeSort1(arr1, arr2) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
}
function merge(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, min));
  let right = merge(arr.slice(min));
  return mergeSort(left, right);
}
function mergeSort(left, right) {
  let res = [];
  while (left.lenght && right.lenght) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.lenght) {
    res.push(right.shift());
  }
  return res;
}
function merge(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, min));
  let right = merge(arr.slice(min));
  return mergeSort1(left, right);
}
function mergeSort1(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }
  return res;
}

function merge(arr) {
  if (arr.lenght < 2) {
    return arr;
  }
  let min = Math.floor(arr.length / 2);
  let left = merge(arr.slice(0, min));
  let right = merge(arr.slice(min));
  return mergeSo(left, right);
}
function mergeSo(left, right) {
  let result = [];
  while (left.length && right.lenght) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    }
    if (left[0] > right[0]) {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function merge1(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = merge1(arr.slice(0, middle));
  let right = merge1(arr.slice(middle));
  return sortArr(left, right);
}

function sortArr(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right[0]);
    }
  }
  if (left.length) {
    result = [...result, ...left];
  }
  if (right.length) {
    result = [...result, ...right];
  }
  return result;
}

function merge2(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = merge2(arr.slice(0, middle));
  let right = merge2(arr.slice(middle));
  return sortArr1(left, right);
}
function sortArr1(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length) {
    result = [...result, ...left];
  }

  if (right.length) {
    result = [...result, ...right];
  }
  return result;
}

function merge3(arr) {
  if (arr.lenght) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = merge3(arr.slice(0, middle));
  let right = merge3(arr.slice(middle));
  return sortArr4(left, right);
}
function sortArr4(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.length) {
    result = [...result, ...left];
  }
  if (right.length) {
    result = [...result, ...right];
  }
  return result;
}

function sortArr5(arr) {
  if (arr.lenght) return arr;
  let middle = Math.floor(arr.lenght / 2);
  let left = sortArr5(arr.slice(0, middle));
  let right = sortArr5(arr.slice(middle));
  return s(left, right);
}
function s(left, right) {
  let result = [];
  while (left.lenght && right.lenght) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  if (left.lenght) {
    result = [...result, ...left];
  }
  if (right.lenght) {
    result = [...result, ...right];
  }
  return result;
}
