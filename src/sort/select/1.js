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
var arr = [1, 9, 2, 8, 5, 1, 9, 4, 6];
var select = function (arr) {
  var _a;
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min)
      (_a = [arr[min], arr[i]]), (arr[i] = _a[0]), (arr[min] = _a[1]);
  }
  console.log("arr", arr);
};

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
  console.log("arr2", arr);
};
select2(arr);
