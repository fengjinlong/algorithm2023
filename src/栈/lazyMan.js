// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan('Hank')输出:
// Hi! This is Hank!

// LazyMan('Hank').sleep(10).eat('dinner')输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan('Hank').eat('dinner').eat('supper')输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan('Hank').eat('supper').sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class _LazyMan {
  constructor(name) {
    this.name = name;
    this.queue = [];
    const tesk = () => {
      console.log(`Hi! This is ${this.name}!`);
      this.next();
    };
    this.queue.push(tesk);
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    const tesk = this.queue.shift();
    tesk && tesk();
  }
  sleep(time) {
    const tesk = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        // 出栈第一个
        this.next();
      }, time * 1000);
    };
    // 入栈
    this.queue.push(tesk);
    return this;
  }
  eat(food) {
    const test = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.queue.push(test);
    return this;
  }
  sleepFirst(time) {
    const tesk = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 500);
    };
    this.queue.unshift(tesk);
    return this;
  }
}
function LazyMan(name) {
  return new _LazyMan(name);
}
// LazyMan("Hank").sleep(10).eat("dinner");
LazyMan("Hank").eat("supper").sleepFirst(5);
// LazyMan("Hank").eat("dinner").eat("supper");
