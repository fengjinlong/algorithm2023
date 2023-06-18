class Promise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(func) {
    this.PromistState = Promise.PENDING;
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
    if (this.PromistState === Promise.PENDING) {
      this.PromistState = Promise.FULFILLED;
      this.PromistResult = result;
      this.onFullfilledCallbacks.forEach((callback) => callback());
    }
  }
  reject(reason) {
    if (this.PromistState === Promise.PENDING) {
      this.PromistState = Promise.REJECTED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((callback) => callback());
    }
  }
  then(onFulfilled, onRejected) {
    if (this.PromistState === Promise.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromistResult);
      });
    }

    if (this.PromistState === Promise.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromistResult);
      });
    }
    if (this.PromistState === Promise.PENDING) {
      this.onFullfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.PromistResult);
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(this.PromistResult);
        });
      });
    }
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
        if (p instanceof Promise) {
          Promise.resolve(p).then(
            (res) => {
              result[i] = res;
              count++;
              if (count === promises.length) {
                resolve(result);
              }
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          count++;
          result[i] = promises[i];
          if (count === promises.length) {
            resolve(result);
          }
        }
      }
    });
  }
  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      let res = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
        Promise.resolve(p).then(
          (value) => {
            count++;
            res[i] = {
              status: "fulfilled",
              value,
            };
            count === promises.length && resolve(res);
          },
          (reason) => {
            count++;
            res[i] = {
              status: "rejected",
              reason,
            };
            count === promises.length && resolve(res);
          }
        );
      }
    });
  }
  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p) => {
        Promise.resolve(p).then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
}

class Promise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(func) {
    this.PromistState = Promise.PENDING;
    this.PromistResult = null;
    this.onFullfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch {
      this.reject(e);
    }
  }
  resolve(result) {
    if (this.PromistState === Promise.PENDING) {
      this.PromistResult = result;
      this.PromistState = Promise.FULFILLED;
      this.onFullfilledCallbacks.forEach((cb) => cb());
    }
  }
  reject(reason) {
    if (this.PromistResult === Promise.PENDING) {
      this.PromistResult = reason;
      this.PromistState = Promise.REJECTED;
      this.onRejectedCallbacks.forEach((cb) => cb());
    }
  }
  then(onFulfilled, onRejected) {
    if (this.PromistState === Promise.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromistResult);
      });
    }
    if (this.PromistState === Promise.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromistResult);
      });
    }
    if (this.PromistState === Promise.PENDING) {
      this.onFullfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.PromistResult);
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(() => {
            onRejected(this.PromistResult);
          });
        });
      });
    }
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
        if (p instanceof Promise) {
          Promise.resolve(p).then(
            (res) => {
              result[i] = res;
              count++;
              if (count === promises.length) {
                resolve(result);
              }
            },
            (rea) => {
              reject(rea);
            }
          );
        } else {
          count++;
          result[i] = p;
          if (count === promises.length) {
            resolve(result);
          }
        }
      }
    });
  }
  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      let res = [];
      let count = 0;
      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          (res) => {
            count++;
            res[index] = {
              status: "fulfiled",
              value: res,
            };
            count === promises.length && resolve(res);
          },
          (reason) => {
            count++;
            res[index] = {
              status: "rejected",
              value: reason,
            };
            count === promises.length && reject(res);
          }
        );
      });
    });
  }
}

class Promise1 {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(func) {
    this.PromistState = Promise1.PENDING;
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
    if (this.PromistState === Promise1.PENDING) {
      this.PromistState = Promise1.FULFILLED;
      this.PromistResult = result;
      this.onFullfilledCallbacks.forEach((cb) => cb());
    }
  }
  reject(reason) {
    if (this.PromistState === Promise1.PENDING) {
      this.PromistState = Promise1.REJECTED;
      this.PromistResult = reason;
      this.onRejectedCallbacks.forEach((cb) => cb());
    }
  }
  then(onFulfilled, onRejected) {
    if (this.PromistState === Promise1.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromistResult);
      });
    }
    if (this.PromistState === Promise1.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromistResult);
      });
    }
    if (this.PromistState === Promise1.PENDING) {
      this.onFullfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.PromistResult);
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(this.PromistResult);
        });
      });
    }
  }
  static all(promises) {
    return new Promise1((resolve, reject) => {
      let result = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
        if (p instanceof Promise1) {
          Promise1.resolve(p).then(
            (res) => {
              result[i] = res;
              count++;
              if (count === promises.length) resolve(result);
            },
            (rea) => {
              reject(rea);
            }
          );
        } else {
          count++;
          result[i] = p;
          if (count === promises.length) resolve(result);
        }
      }
    });
  }
  static allSettled(promises) {
    return new Promise1((resolve, reject) => {
      let res = [];
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
        Promise1.resolve(p).then(
          (value) => {
            count++;
            res[i] = {
              status: "fulfilled",
              value,
            };
            if (count === promises.length) resolve(result);
          },
          (reason) => {
            count++;
            res[i] = {
              status: "rejected",
              reason,
            };
            if (count === promises.length) resolve(result);
          }
        );
      }
    });
  }
  static rece(promises) {
    return new Promise1((resolve, reject) => {
      promises.forEach((p) => {
        Promise1.resolve(p).then(
          (value) => resolve(value),
          (reason) => reject(value)
        );
      });
    });
  }
  static resolve(value) {
    if (value instanceof Promise1) {
      return value;
    } else if (value instanceof Object && "then" in value) {
      return new Promise1((resolve, reject) => {
        value.then(resolve, reject);
      });
    } else {
      return new Promise1((resolve, reject) => {
        resolve(value);
      });
    }
  }
  static reject(reason) {
    return new Promise1((resolve, reject) => {
      reject(reason);
    });
  }
  finally(cb) {
    return this.then(cb, cb);
  }
}
