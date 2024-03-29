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
Array.prototype.map5 = function (cb) {
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

// arr.map(fn)
Array.prototype.map6 = function (cb) {
  let arrobj = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (let i = 0; i < arrobj.length; i++) {
    result.push(cb.call(_this, arrobj[i], i, arrobj));
  }
  return result;
};

Array.prototype.map7 = function (cb) {
  let arrobj = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (let i = 0; i < arrobj.length; i++) {
    result.push(cb.call(_this, arrobj[i], i, arrobj));
  }
  return result;
};

Array.prototype.mapp = function (fn) {
  let arr = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn.call(_this, arr[i], i, arr));
  }
  return result;
};

// arr.map(fn,obj)
Array.prototype.mapp = function (fn) {
  let arr = this;
  let _this;
  if (arguments.length > 1) {
    _this = arguments[1];
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn.call(_this, arr[i], i, arr));
  }
  return result;
};
