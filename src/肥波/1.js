function fibonacci(n) {
  if (n <= 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 3;
console.log("fibonacci(5)", fibonacci(n));

// 最小解决方案
function fibonacciMin(n) {
  if (n <= 3) return n - 1;
  return Math.min(fibonacci(n - 1), fibonacci(n - 2));
}

console.log("fibonacci(5)", fibonacciMin(n));
