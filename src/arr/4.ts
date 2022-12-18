const getIntersection = (...args: number[][]) => {
  return args.reduce((total, arr) => {
    return arr.filter((item) => total.includes(item));
  });
};
let t = getIntersection([1, 2, 3], [2, 3, 4], [3, 4, 5]); // [3]
console.log("t", t);
