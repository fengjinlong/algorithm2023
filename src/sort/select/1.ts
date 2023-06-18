// function select(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
//   }
// }

const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6];
const select = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log("arr", arr);
};
select(arr);
export {};

const select2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
};
