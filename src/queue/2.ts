/**
 * 双端队列
 * "   a good   example " => "example good a"
 */
export {};
const reverseWords = (s: string): string => {
  // 去掉头尾空格
  let left = 0,
    right = s.length - 1;
  const result = [];
  let word = "";
  while (s[left] === " ") left++;
  while (s[right] === " ") right--;
  while (left <= right) {
    let char = s[left];
    if (char !== " ") {
      word += char;
    } else if (char === " " && word !== "") {
      result.unshift(word);
      word = "";
    }
    left++;
  }
  result.unshift(word);
  console.log(result.join(" "));

  return result.join(" ");
};
reverseWords("   a good   example ");

/**
 * 滑动窗口
 * 无重复字符的最长子串
 * "abcabcbb" => 3
 * abc
 */
const lengthOfLongestSubstring = (s: string): number => {
  let max = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    } else {
      arr.push(s[i]);
      max = Math.max(max, arr.length);
    }
  }
  console.log("max: ", max);

  return max;
};
lengthOfLongestSubstring("abcabcbb");

/**
 * 滑动窗口 最大值
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7]
 */

const getMaxArr = (nums: number[], k: number): number[] => {
  let i = 0;
  let arr = [];
  while (i < nums.length - k + 1) {
    let max = Math.max.apply(null, nums.slice(i, i + k));
    arr.push(max);
    i++;
  }
  console.log("arr: ", arr);
  return arr;
};
getMaxArr([1, 3, -1, -3, 5, 3, 6, 7], 3);
