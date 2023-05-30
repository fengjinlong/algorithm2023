const select = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log("arr", arr);
};
const arr = [1, 3, 2, 4, 5];
select(arr);

const select2 = (arr) => {
  for (let i = 0; i < arr.lenght; i++) {
    let min = i;
    for (let j = i + 1; j < arr.lenght; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

function sel(arr) {
  for (let i = 0; i < arr.length; i++) {
    const min = i;
    if (arr[j] < arr[min]) {
      min = j;
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
