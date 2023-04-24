function t(fn, delay) {
  let flag = null;
  return function () {
    if (flag) {
      console.log("limt t");

      return;
    }
    flag = setTimeout(() => {
      fn.apply(this, arguments);
      flag = null;
    }, delay);
  };
}

function t2(fn, delay) {
  let firstTime = new Date().getTime();
  return function () {
    let nowTime = new Date().getTime();
    if (nowTime - firstTime > delay) {
      fn.apply(this, arguments);
      firstTime = nowTime;
    } else {
      console.log("limit t2");
    }
  };
}

function t3(fn, delay) {
  let firstTime = new Date().getTime();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let nowTime = new Date().getTime();
      if (nowTime - firstTime > delay) {
        target(args);
        firstTime = new Date().getTime();
      } else {
        console.log("lime3");
      }
    },
  });
}

function t4(fn, delay) {
  let firstTime = new Date().getTime();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let nowTime = new Date().getTime();
      if (nowTime - firstTime > delay) {
        target(args);
        firstTime = new Date().getTime();
      } else {
        console.log("limit t4");
      }
    },
  });
}
function tt1(fn, delay) {
  let firstTime = new Date();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let nowTime = new Date();
      if (nowTime - firstTime > delay) {
        target(args);
        firstTime = new Date();
      }
    },
  });
}

function t5(fn, delay) {
  let firstTime = new Date().getTime();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let nowTime = new Date().getTime();
      if (nowTime - firstTime > delay) {
        target(args);
      } else {
        return;
      }
    },
  });
}
function t6(fn, delay) {}
function t6(fn, delay) {
  let firstTime = new Date().getTime();
  return new Proxy(fn, {
    apply(target, ctx, args) {
      let nowTime = new Date().getTime();
      if (nowTime - firstTime > delay) {
        target(args);
        firstTime = new Date().getTime();
      } else {
        console.log("limit t6");
      }
    },
  });
}

let n = 0;
const fun = () => {
  n++;
  console.log("节流执行 ok");
};
const targetFun = t3(fun, 1500);

let timer = setInterval(() => {
  if (n > 3) {
    clearInterval(timer);
  }
  targetFun();
}, 500);
