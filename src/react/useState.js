let isMounted = false;
let workInProgressHook = null;
let hook;
// let isFlushing = false;
let fiber = {
  render: App,
  memoizeState: null,
};
setInterval(() => {
  console.log("init", hook.memoizeState);
}, 2000);
function App() {
  const [init, setInit] = useState(123);
  // console.log("init", init);

  return {
    onClick() {
      setInit((c) => c + 1);
    },
  };
}
function useState(initState) {
  // 创建 hook
  hook = {
    memoizeState: initState,
  };
  fiber.memoizeState = hook;

  let baseState = hook.memoizeState;
  workInProgressHook = hook;

  return [baseState, dispatchSetState.bind(null, hook)];
}
function dispatchSetState(hook, action) {
  let baseState = hook.memoizeState;
  hook.memoizeState = action(baseState);
  if (isMounted) return;
  queueMicrotask(() => {
    schedule();
  });
}
function schedule() {
  const app = fiber.render();
  isMounted = true;
  return app;
}
window.app = schedule();
