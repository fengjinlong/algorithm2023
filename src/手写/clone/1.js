const isObjFn = (o) => {
  return (typeof o === "object" || typeof o === "function") && o !== null;
};
const clone = (obj, hash = new WeakMap()) => {
  if (!isObjFn(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  // let obj2 = Object.create(obj.prototype)
  let obj2 = Array.isArray(obj) ? [] : Object.create(obj.prototype);
  hash.set(obj, obj2);
  Reflect.ownKeys(obj).forEach((key) => {
    obj2[key] = isObjFn(obj[key]) ? clone(obj[key]) : obj[key];
  });
  return obj2;
};

const isObjFn1 = function (obj) {
  return (typeof obj === "object" || typeof obj === "function") && o !== null;
};
function clone1(obj, hash = new WeakMap()) {
  if (!isObjFn1(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  let obj2 = Array.isArray(obj) ? [] : Object.create(obj.prototype);
  Reflect.ownKeys(obj).forEach((key) => {
    obj2[key] = isObjFn1(obj[key]) ? clone1(obj[key]) : obj[key];
  });
  return obj2;
}

const isObjFn2 = function (obj) {
  return (typeof obj === "object" && obj !== null) || typeof obj === "function";
};
function clone2(obj, hash = new WeakMap()) {
  if (!isObjFn2(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  let obj2 = Array.isArray(obj) ? [] : Object.create(obj.prototype);
  Reflect.ownKeys(obj).forEach((key) => {
    obj2[key] = isObjFn2(obj[key]) ? clone2(obj[key]) : obj[key];
  });
  return obj2;
}
