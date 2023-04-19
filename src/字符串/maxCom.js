/**
 * ["flower","flow","flight"]
 * 找出最长公共前缀
 * 只考虑 前缀前缀前缀前缀前缀前缀前缀
 */
function twoCommonPrefix(str1, str2) {
  let length = str1.length > str2.length ? str2.length : str1.length;
  let str = "";
  let j = 0;
  while (j < length) {
    if (str1[j] === str2[j]) {
      str += str1[j];
      j++;
    } else {
      break;
    }
  }
  return str;
}
function allCommonPrefix(arr) {
  return arr.reduce((prev, next) => {
    return twoCommonPrefix(prev, next);
  });
}

console.log(allCommonPrefix(["fqyyyloweraaaaa", "fyyylow", "fyyylxx"]));
