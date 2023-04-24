class Event {
  constructor() {
    this.events = {};
  }
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }
  emit(type, ...args) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, args));
  }
  off(type, callback) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((fn) => fn !== callback);
  }
  once(type, callback) {
    function one() {
      callback.apply(this, arguments);
      this.off(type, one);
    }
    this.on(type, one);
  }
}

class E {
  constructor() {
    this.events = {};
  }
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }
  emit(type, ...args) {
    this.events[type] &&
      this.events[type].forEach((fn) => fn.apply(this, args));
  }
  off(type, callback) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter((fn) => fn !== callback);
  }
  once(type, callback) {
    function one() {
      callback.apply(this, arguments);
      this.off(type, one);
    }
    this.on(type, one);
  }
}
class E1 {
  constructor() {
    this.events = {};
  }
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    }
  }
}
