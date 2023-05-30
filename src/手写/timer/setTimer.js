function timer1(fn, time) {
  let timer = null;
  function interval() {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(interval, time);
    }
  }
  interval();
  return {
    cancle: () => clearTimeout(timer),
  };
}

function time11(fn, time) {
  let timer = null;
  function interval() {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(interval, time);
    }
  }
}
function timer2(fn, time) {
  const t = setInterval(() => {
    clearInterval(t);
    fn();
  }, time);
}
