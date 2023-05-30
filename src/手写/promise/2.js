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
