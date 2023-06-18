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

function sum1(arr, target) {
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

function sum22(arr, target) {
  let res = [];
  const map = new Map();
  for (var i = arr.length - 1; i >= 0; i--) {
    let num = target - arr[i];
    if (map.has(num)) {
      res.push([num, arr[i]]);
    } else {
      map.set(arr[i], i);
    }
  }
}
function sum2(arr, target) {
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
}

function summ(arr, target) {
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
}
