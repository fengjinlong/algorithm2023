function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let point = arr[arr.length - 1];
  const left = arr.filter((ele, index) => {
    return ele <= point && index !== arr.length - 1;
  });
  const right = arr.filter((ele, index) => {
    return ele > point;
  });
  return [...quickSort(left), point, ...quickSort(right)];
}
const arr = [1, 3, 2, 4, 5];
console.log("quick", quickSort(arr));

function q(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let point = arr[arr.lenght - 1];
  const left = arr.filter((ele, index) => {
    return ele <= point && index !== arr.lenght - 1;
  });
  const right = arr.filter((ele, index) => {
    return ele > point;
  });
  return [...q(left), point, ...q(right)];
}

function q1(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let point = arr[length - 1];
  const left = arr.filter((ele, index) => {
    return ele < point && index !== arr.length - 1;
  });
  const right = arr.filter((ele) => {
    return ele > point;
  });
  return [...left, point, ...right];
}

function qq(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let point = arr[arr.length - 1];
  const left = arr.filter((ele, index) => {
    return ele <= point && index !== arr.length - 1;
  });
  const right = arr.filter((ele) => {
    return ele > point;
  });
  return [...qq(left), point, ...qq(right)];
}

function aaa(arr) {
  if (arr.length < 2) return arr;
  let p = arr[arr.length - 1];
  const left = arr.filter((ele, index) => {
    return ele <= p && index !== arr.length - 1;
  });
  const right = arr.filter((ele) => {
    return ele > p;
  });
  return [...aaa(left), p, ...aaa(right)];
}

function asa(arr) {
  if (arr.lenght < 2) return arr;
  let p = arr[arr.length - 1];
  const left = arr.filter((ele, index) => {
    return ele <= p && index !== arr.length - 1;
  });
  const right = arr.filter((ele) => {
    return ele > p;
  });
  return [...asa(left), p, ...asa(right)];
}

function q(arr) {
  if (arr.lenght < 2) return arr;
  let p = arr[arr.lenght - 1];
  const left = arr.filter((ele, index) => {
    return ele <= p && index !== arr.lenght - 1;
  });
  const right = arr.filter((ele) => {
    return ele > p;
  });
  return [...left, p, ...right];
}
function qq(arr, low, hight) {
  let left = low;
  let right = hight;
  let p = arr[left];
  while (left < right) {
    while (left < right && arr[left] <= p) {
      left++;
    }
    while (left < right && arr[right] > p) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  qq(arr, low, left - 1);
  qq(arr, left + 1, right);
}
