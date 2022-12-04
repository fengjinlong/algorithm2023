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
// console.log(sort<number>(arr1, arr2));
function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const days = (endDate.getTime() - beginDate.getTime()) / (1000 * 3600 * 24);
  return days;
}
function fn(a: number, b: number) {
  return a + b;
}
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log("hello");
  }
  eat() {
    console.log("eat");
  }
}

/**
 * ["flower","flow","flight"]
 * 找出最长公共前缀
 * 前缀前缀前缀前缀前缀前缀前缀
 */

function twoCommonPrefix<T extends { length: number }>(
  str1: T,
  str2: T
): string {
  let length = str1.length > str2.length ? str2.length : str1.length;
  let str = "";
  let j = 0;
  while (j < length) {
    if (str1[j] === str2[j]) {
      str += str1[j];
      j++;
    } else {
      break;
    }
  }
  return str;
}
function allCommonPrefix(arr): string {
  return arr.reduce((prev, next) => {
    return twoCommonPrefix<string>(prev, next);
  });
}

console.log(allCommonPrefix(["floweraaaaa", "flow", "flxx"]));
