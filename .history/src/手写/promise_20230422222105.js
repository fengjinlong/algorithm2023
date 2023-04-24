class Promise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(func) {
    this.PromistState = Promise.PENDING;
    this.PromistState = null;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(result) {
    if (this.PromistState === Promise.PENDING) {
      this.PromistState = Promise.FULFILLED;
      this.PromistResult = result;
      this.onFullfilledCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  reject(reason) {
    if (this.PromistState === Promise.PENDING) {
      this.PromistState = Promise.REJECTED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(callback) {
    return this.then(callback, callback);
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let result = [];
        let count = 0;
        if (promises.length === 0) return resolve([]);
        promises.forEach((p, index) => {
          if (p instanceof Promise) {
            Promise.resolve(p).then(
              (value) => {
                count++;
                result[index] = value;
                count === promises.length && resolve(result);
              },
              (reason) => {
                reject(reason);
              }
            );
          } else {
            count++;
            result[index] = p;
            count === promises.length && resolve(result);
          }
        });
      } else {
        throw new TypeError("arguments must be an array");
      }
    });
  }

  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let count = 0;
      if (Array.isArray(promises)) {
        if (promises.length === 0) return resolve([]);
        promises.forEach((p, index) => {
          Promise.resolve(p).then(
            (value) => {
              count++;
              result[index] = {
                status: "fulfilled",
                value,
              };
              count === promises.length && resolve(result);
            },
            (reason) => {
              count++;
              result[index] = {
                status: "rejected",
                reason,
              };
              count === promises.length && resolve(result);
            }
          );
        });
      } else {
        throw new TypeError("arguments must be an array");
      }
    });
  }
  static race = (promises) => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        if (promises.length === 0) return resolve([]);
        promises.forEach((p) => {
          Promise.resolve(p).then(resolve, reject);
        });
      } else {
        throw new TypeError("arguments must be an array");
      }
    });
  };
  then(onFulfilled, onRejected) {
    // onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    // onRejected =
    //   typeof onRejected === "function"
    //     ? onRejected
    //     : (e) => {
    //         throw reason;
    //       };

    const promise2 = new Promise((resolve, reject) => {
      if (this.PromistState === Promise.PENDING) {
        this.onFullfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.PromistResult);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onRejected !== "function") {
                reject(this.PromistResult);
              } else {
                let x = onRejected(this.PromistResult);
                resolvePromise(promise2, x, resolve, reject);
              }
            } catch (e) {
              reject(e);
            }
          });
        });
      }
      if (this.PromistState === Promise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.PromistResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.PromistState === Promise.REJECTED) {
        setTimeout(() => {
          try {
            if (typeof onRejected !== "function") {
              reject(this.PromistResult);
            } else {
              let x = onRejected(this.PromistResult);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return new TypeError("Chaining cycle detected for promise #<Promise>");
  }
  if (x instanceof Promise) {
    x.then((y) => {
      resolvePromise(promise2, y, resolve, reject);
    }, reject);
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
    } catch (e) {
      reject(e);
    }
    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (e) {
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      resolve(x);
    }
  } else {
    return resolve(x);
  }
}

Promise.resolve = function (value) {
  if (value instanceof Promise) return value;
  if (value instanceof Object && "then" in value)
    return new Promise((resolve, reject) => {
      value.then(resolve, reject);
    });

  return new Promise((resolve, reject) => {
    resolve(value);
  });
};
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

Promise2.resolve = function (value) {
  if (value instanceof Promise2) {
    return value;
  }
  if (value instanceof Object && "then" in value) {
    return new Promise2((resolve, reject) => {
      value.then(resolve, reject);
    });
  }
  return new Promise2((resolve, reject) => {
    resolve(value);
  });
};
Promise2.reject = function (value) {
  return new Promise2((resolve, reject) => {
    reject(value);
  });
};
class Promise2 {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(func) {
    this.PromistState = Promise2.PENDING;
    this.PromistResult = null;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(result) {
    if (this.PromistState === Promise2.PENDING) {
      this.PromistState = Promise2.FULFILLED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  reject(reason) {
    if (thisl.PromistState === Promise2.PENDING) {
      this.PromistState = Promise.REJECTED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  static race(pArr) {
    return new Promise2((resolve, reject) => {
      if (Array.isArray(pArr)) {
        if (pArr.length === 0) {
          return resolve([]);
        }
        pArr.forEach((p) => {
          Promise2.resolve(p).then(resolve, reject);
        });
      } else {
        throw new TypeError("...");
      }
    });
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(promises)) {
        let result = [];
        let count = 0;
        if (promises.length === 0) {
          return resolve([]);
        }
        promises.forEach((p, index) => {
          if (p instanceof Promise2) {
            Promise2.resolve(p).then(
              (val) => {
                count++;
                reason[index] = val;
                count === promises.length && resolve(result);
              },
              (reason) => {
                reject(reason);
              }
            );
          } else {
            count++;
            reason[index] = p;
            count === promises.length && resolve(reason);
          }
        });
      } else {
        throw new TypeError("....");
      }
    });
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e;
          };

    const p2 = new Promise2((resolve, reject) => {
      if (this.PromistState === Promise2.PENDING) {
        this.onFullfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.PromistResult);
              resolvePromise2(p2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.PromistResult);
              resolvePromise2(p2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
      if (this.PromistState === Promise2.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.PromistResult);
            resolvePromise2(p2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.PromistState === Promise2.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.PromistResult);
            resolvePromise2(p2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return p2;
  }
}

function resolvePromise2(p2, x, resolve, reject) {
  if (x === p2) {
    return new Error("...");
  }
  if (x instanceof Promise2) {
    x.then((y) => {
      resolvePromise2(p2, y, resolve, reject);
    }, reject);
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
    } catch (e) {
      reject(e);
    }

    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(p2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (e) {
        reject(e);
      }
    } else {
      resolve(x);
    }
  } else {
    return resolve(x);
  }
}

class Promise3 {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(func) {
    this.PromiseState = Promise3.PENDING;
    this.PromistResult = null;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(result) {
    if (this.PromiseState === Promise3.PENDING) {
      this.PromiseState = Promise3.FULFILLED;
      this.PromistResult = reason;
      this.onFullfilledCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  static resolve(v) {
    if (v instanceof Promise3) return v;
    if (v instanceof Object && "then" in value) {
      return new Promise3((resolve, reject) => {
        v.then(resolve, reject);
      });
    }
    return new Promise3((resolve, reject) => {
      resolve(v);
    });
  }
  static reject(v) {
    return new Promise3((resolve, reject) => {
      reject(value);
    });
  }
  reject(reason) {
    if ((this.PromistState = Promise3.PENDING)) {
      this.PromistState = Promise3.REJECTED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(cb) {
    return this.then(cb, cb);
  }
  static all(parr) {
    return new Promise3((resolve, reject) => {
      if (Array.isArray(pArr)) {
        let result = [];
        let count = 0;
        if (pArr.length === 0) return resolve([]);
        pArr.forEach((p, i) => {
          if (p instanceof Promise3) {
            Promise3.resolve(p).then((value) => {
              count++;
              result[i] = value;
              count === pArr.length && resolve(result);
            });
          } else {
            count++;
            result[i] = p;
            count === pArr.length && resolve(result);
          }
        });
      }
    });
  }
  static race(pArr) {
    return new Promise3((resolve, reject) => {
      if (Array.isArray(pArr)) {
        if (pArr.length === 0) return resolve([]);
        pArr.forEach(p).then(resolve, reject);
      }
    });
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (e) => {
            throw e;
          };
    const p2 = new Promise3((resolve, reject) => {
      if ((this.PromistState = Promise3.PENDING)) {
        this.onFullfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.PromistResult);
              resolvePromise(p2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.PromistResult);
              resolvePromise(p2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
      if (this.PromistState === Promise3.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.PromistResult);
            resolvePromise(p2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.PromistState === Promise3.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.PromistResult);
            resolvePromise(p2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return p2;
  }
}

class P {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(func) {
    this.PromiseState = P.PENDING;
    this.PromistResult = null;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(result) {
    if (this.PromiseState === P.PENDING) {
      this.PromiseState = P.FULFILLED;
      this.PromistResult = result;
      this.onFullfilledCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  reject(reason) {
    if (this.PromiseState === P.PENDING) {
      this.PromiseState = P.REJECTED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((fn) => fn(this.PromistResult));
    }
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(cb) {
    return this.then(cb, cb);
  }
  then(onFulfilled, onRejected) {}
  static all(parr) {
    return new P((resolve, reject) => {
      if (Array.isArray(parr)) {
        let result = [];
        let count = 0;
        if (parr.length === 0) return resolve([]);
        parr.forEach((p, i) => {
          if (p instanceof P) {
            P.resolve(p).then((value) => {
              count++;
              result[i] = value;
              count === parr.length && resolve(result);
            });
          } else {
            count++;
            result[i] = p;
            count === parr.length && resolve(result);
          }
        });
      }
    });
  }
  static race(parr) {
    return new P((resolve, reject) => {
      if (Array.isArray(parr)) {
        if (parr.length === 0) return resolve([]);
        parr.forEach((p) => p.then(resolve, reject));
      }
    });
  }
  static resolve(v) {
    if (v instanceof P) return v;
    if(v instanceof Object && 'then' in v){
      return new P((resolve,reject)=>{
        v.then(resolve,reject)
      }
    }
  }
}
