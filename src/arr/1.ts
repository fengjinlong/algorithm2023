const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

function sort<T>(arr1: T[], arr2: T[]) {
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
console.log(sort<number>(arr1, arr2));
