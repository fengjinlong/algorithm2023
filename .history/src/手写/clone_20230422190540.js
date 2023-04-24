const isComplexDataType = (obj) => {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
};
const deepClone = (obj, hash = new WeakMap()) => {
  //如果成环了,参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj
  if (hash.has(obj)) return hash.get(obj);

  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) {
    return new obj.constructor(obj);
  }

  let allDesc = Oobject.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = isComplexDataType(obj[key])
      ? deepClone(obj[key], hash)
      : obj[key];
  }
  return cloneObj;
};

const isC = (obj) => {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
};
const deepClone1 = (obj, hash = new WeakMap()) => {
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, Set];
  if (type.includes(obj.constructor)) {
    return new obj.constructor(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  const clObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, clObj);
  for (const key of Reflect.ownKeys(obj)) {
    clObj[key] = isC(obj[key]) ? deepClone1(obj[key], hash) : obj[key];
  }
  return clObj;
};
const isObjFn = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;
const deepClone2 = (obj, hash = new WeakMap()) => {
  if (hash.has(obj)) return hash.get(obj);
  let types = [Date, Set, WeakMap, Map];
  if (types.includes(obj.constructor)) {
    return new obj.constructor(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  hash.set(obj, cloneObj);
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] = isObjFn(obj[key]) ? deepClone2(obj[key]) : obj[key];
  }
  return cloneObj;
};

const isObj = (val) => {
  return (typeof val === "object" || typeof val === "function") && val !== null;
};
const deepClone3 = (obj, hash = new WeakMap()) => {
  if (!isObj(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((key) => {
    target[key] = isObj(obj[key]) ? deepClone3(obj[key], hash) : obj[key];
  });
  return target;
};

const isObjFn1 = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;
const dc = (obj, hash = new WeakMap()) => {
  if (!isObjFn1(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((key) => {
    target[key] = isObjFn1(obj[key]) ? dc(obj[key], hash) : obj[key];
  });
  return target;
};
const isObjFn2 = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;
const adc = (obj, hash = new WeakMap()) => {
  if (!isObjFn2(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((k) => {
    target[k] = isObjFn2(obj[k]) ? adc(obj[k], hash) : obj[k];
  });
  return target;
};
