function LRU(max) {
  this.max = max;
  this.cache = new Map();
}
LRU.prototype = {
  get(key) {
    const { cache } = this;
    const value = cache.get(key);
    if (!value) return;
    cache.delete(key);
    cache.set(key, value);
    return value;
  },
  add(key, value) {
    const { cache } = this;
    if (cache.size > this.max - 1) {
      const key = cache.keys().next().value;
      cache.delete(key);
    }
    cache.set(key, value);
  },
};

// const lru = new LRU(3);
// lru.add("a", 1);
// lru.add("b", 2);
// lru.add("c", 3);
// lru.add("d", 4);
// lru.add("e", 5);
// console.log(lru.cache);
// Map(3) { 'b' => 2, 'c' => 3, 'd' => 4 }

function L(max) {
  this.max = max;
  this.cache = new Map();
}
L.prototype = {
  get(key) {
    const { cache } = this;
    const value = cache.get(key);
    if (!value) return;
    cache.delete(key);
    cache.set(key, value);
    return value;
  },
  add(key, value) {
    const { cache } = this;
    if (cache.size > this.max - 1) {
      const key = cache.keys().next().value;
      cache.delete(key);
    }
    cache.set(key, value);
  },
};
const lru = new L(6);
lru.add("a", 1);
lru.add("b", 2);
lru.add("c", 3);
lru.add("d", 4);
lru.add("e", 5);
lru.get("b");
console.log(lru.cache);
