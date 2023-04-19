// JS爬楼梯问题是一个经典的动态规划问题，它的目标是计算到达楼梯顶部的不同方式的数量。
// 在这个问题中，每次可以爬1或2个台阶，问有多少种不同的方式可以到达楼梯顶部。这个问题可以使用递归或动态规划来解决。

// 递归解法
function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
function c(n) {
  if (n <= 2) return n;
  return c(n - 1) + c(n - 2);
}
// 动态规划解法
function climbStairs2(n) {
  if (n <= 2) return n;
  let prev = 1;
  let curr = 2;
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
}
function cl3(n) {
  if (n <= 2) return n;
  let prev = 1;
  let curr = 2;
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
}

function cs(n) {
  if (n <= 2) return n;
  let arr = [1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

// 递归解法
console.log(climbStairs(5));
// 动态规划解法
console.log(climbStairs2(5));
// 8
// 8

function c1(n) {
  if (n <= 2) return n;
  return c(n - 1) + c(n - 2);
}
function c2(n) {
  if (n <= 2) return n;
  let prev = 1;
  let curr = 2;
  for (let i = 0; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
}

function cc(n) {
  if (n <= 2) return n;
  return c(n - 1) + c(n - 2);
}
