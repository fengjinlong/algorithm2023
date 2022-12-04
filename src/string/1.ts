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

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a   b c   d"));
