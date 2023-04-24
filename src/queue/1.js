/**
 * 滑动窗口
 * 无重复字符的最长子串
 * "abcabcbb" => 3
 * abc
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      // arr.splice(index, 1);
      // max--;
      // arr.push(s[i]);
    } else {
      arr.push(s[i]);
      max = Math.max(max, arr.length);
    }
  }
  console.log("arr", arr);
  console.log("max: ", max);

  return max;
};
lengthOfLongestSubstring("abceb");
const getMaxArr = (arr, k) => {
  let reasult = [];
  let i = 0;
  while (i < arr.length - k + 1) {
    let temp = arr.slice(i, i + k);
    reasult.push(Math.max(...temp));
    i++;
  }
  console.log("reasult", reasult);
  return reasult;
};
getMaxArr([1, 3, -1, -3, 5, 3, 6, 7], 3);
