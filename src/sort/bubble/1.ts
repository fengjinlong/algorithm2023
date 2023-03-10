// function buttle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let flag = false;
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         flag = true;
//       }
//     }
//     if (!flag) break;
//   }
// }

const arr = [1, 9, 2, 8, 5, 1, 9, 4, 6, 2, 8, 6, 4, 3, 2, 1, 2, 3, 9, 7, 1, 2];
function buttle(arr) {
  console.time("bubble");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.timeEnd("bubble");
  console.log("bubble", arr);
}
buttle(arr);

function buttle1(arr) {
  console.time("bubble1");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.timeEnd("bubble1");
  console.log("buttle1", arr);
}
buttle1(arr);

function bubble2(arr) {
  console.time("bubble2");

  let low = 0;
  let high = arr.length - 1;
  let tmp, j;
  while (low < high) {
    for (j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      high--;
    }
    for (j = high; j > low; j--) {
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
      low++;
    }
  }
  console.timeEnd("bubble2");
  console.log("bubble2", arr);
}
bubble2(arr);
export {};

function bubble3(arr) {
  let low = 0;
  let high = arr.length - 1;
  let tmp, j;
  while (low < high) {
    for (j = low; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      high--;
    }
    for (j = high; j > low; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
      low++;
    }
  }
  console.log("bubble3", arr);
}
bubble3(arr);
