/**
 * abbaca -> ca
 */
function fn(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr[arr.length - 1] === str[i]) {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }
  console.log(arr.join(""));
}
fn("abbaca");
