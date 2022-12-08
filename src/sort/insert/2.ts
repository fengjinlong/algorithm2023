function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prevIndex = i - 1;
    let current = arr[i];
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = current;
  }
}
