import { arr } from "../arr";
function insert(arr: number[]): number[] {
  for (let index = 1; index < arr.length; index++) {
    const target = arr[index];
    while (index > 0 && arr[index - 1] > target) {
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = target;
  }
  return arr;
}

console.log("insert", insert(arr));
