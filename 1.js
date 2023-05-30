const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((r, reject) => {
    setTimeout(() => {
      console.log(5);
      r(1);
    });
    setTimeout(() => {
      console.log(7);
    }, 0);
    setImmediate(() => {
      console.log(6);
    });
    console.log(2);
    r(3);
  });
  resolve(4);
  innerpro.then((res) => console.log(res));

  console.log("yideng");
});
pro.then((res) => console.log(res));
console.log("end");
