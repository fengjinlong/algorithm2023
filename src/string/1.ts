/**
 * "the sky is blue" => "blue is sky the"
 * 反转字符
 */

function reverseWords(s: string) {
  return s
    .split(" ")
    .reverse()
    .map((item) => item.trim())
    .filter((item) => !!item)
    .join(" ");
}

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("a   b c   d"));
/**
 * abbaca -> ca
 */
function fn(str: string) {
  const arr: string[] = [];
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
