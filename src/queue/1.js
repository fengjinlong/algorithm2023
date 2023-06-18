/**
 * 滑动窗口
 * 无重复字符的最长子串
 * "abcabcbb" => 3
 * abc
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr2.push(arr.length);
      let index = arr.indexOf(s[i]);
      arr.push(s[i]);
      arr.splice(0, index + 1);
    } else {
      arr.push(s[i]);
    }
  }
  console.log("arr", arr);
  console.log("max: ", Math.max(...arr2));

  return max;
};
lengthOfLongestSubstring("abceaecbfb"); // 5
lengthOfLongestSubstring("abcabcbb"); // 3
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
// getMaxArr([1, 3, -1, -3, 5, 3, 6, 7], 3);
