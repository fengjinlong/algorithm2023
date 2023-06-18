const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};

function fun(obj) {
  let resule = {};
  bp(obj, "");
  function bp(obj, key) {
    for (let k in obj) {
      if (typeof obj[k] === "object") {
        bp(obj[k], key + k + ".");
      } else {
        resule[key + k] = obj[k];
      }
    }
  }

  return resule;
}
// console.log("fun(obj)", fun(obj));

function ff(obj) {
  let resule = {};
  bp(obj, "");
  function bp(obj, key) {
    for (let k in obj) {
      if (typeof obj[k] === "object") {
        bp(obj[key], key + k + ".");
      } else {
        resule[key + k] = obj[k];
      }
    }
  }
  return resule;
}

const obj1 = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};
function fff(obj) {
  let result = {};
  bp(obj, "");
  function bp(o, key) {
    for (let k in o) {
      if (typeof o[k] === "object") {
        bp(o[k], key + k + ".");
      } else {
        result[key + k] = o[k];
      }
    }
  }
  console.log("result", result);
}
fff(obj1);
