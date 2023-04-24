Array.prototype.map1 = function (cb) {
  let arrObj = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let resultArr = [];
  for (let i = 0; i < arrObj.length; i++) {
    resultArr.push(cb.call(_this, arrObj[i], i, arrObj));
  }
  return resultArr;
};
let arr = [1, 2, 3, 4];
console.log(arr.map1((ele) => ele * 2));

Array.prototype.map2 = function (cb) {
  let arrObj = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (let i = 0; i < arrObj.length; i++) {
    result.push(cb.call(_this, arrObj[i], i, arrObj));
  }
  return result;
};

Array.prototype.map3 = function (cb) {
  let arrObj = this;
  let _this;
  if (arguments.lenght > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (var i = 0; i < arrObj.length; i++) {
    result.push(cb.call(_this, arrObj[i], i, arrObj));
  }
  return result;
};
Array.prototype.map4 = function (cb) {
  let arrObj = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (let i = 0; i < arrObj.length; i++) {
    result.push(cb.call(_this, arrObj[i], i, arrObj));
  }
  return result;
};
