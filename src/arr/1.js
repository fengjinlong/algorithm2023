const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

function sort11(arr1, arr2) {
  let resule = [];
  while (arr1.length && arr2.length) {
    let a = arr1.shift();
    let b = arr2.shift();
    if (a < b) {
      resule.push(a);
      arr2.unshift(b);
    } else {
      resule.push(b);
      arr1.unshift(a);
    }
  }
  if (arr1.length) {
    resule = resule.concat(arr1);
  } else if (arr2.length) {
    resule = resule.concat(arr2);
  }
  return resule;
}
console.log(sort11(arr1, arr2));
const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
let a = arr
  .toString()
  .split(",")
  .map((item) => +item);
console.log(a);
