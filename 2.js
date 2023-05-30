// const pro = new Promise((resolve, reject) => {
//   const innerpro = new Promise((r, reject) => {
//     r(3);
//   });
//   resolve(4);
//   innerpro.then((res) => console.log(res));

//   console.log("yideng");
// });
// pro.then((res) => console.log(res));
// console.log("end");

// let newPromise = Promise.resolve().then((res) => {
//   // 无返回值
// });
// let newPromise2 = Promise.resolve().then(() => {
//   // 返回一个非promise对象
//   return "hello";
// });
// let newPromise3 = Promise.resolve().then(() => {
//   // 返回promise对象
//   return new Promise((resolve, reject) => {
//     resolve("bonjour");
//   });
// });
// function fn(p) {
//   p.then((res) => {
//     console.log(res);
//   });
// }
// console.log(fn(newPromise), fn(newPromise2), fn(newPromise3));

// Promise.resolve()
//   .then((res) => {
//     //then1
//     console.log("1");
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("2");
//         resolve("newPromise");
//       }, 2000);
//     }).then((res) => {
//       // then2
//       console.log("3", res);
//       return "newPromise1";
//       // 返回了一个非promsie对象，对应2中的情况2
//     });
//     // 无return语句，对应2中的情况3
//     return "---";
//   })
//   .then((res) => {
//     // then3
//     console.log("4", res);
//   });
//   1
// 4 ---
// 2
// 3 newPromise
Promise.resolve()
  .then((res) => {
    //then1
    console.log("1");
    // then1中返回一个新的promise实例 只有当then1中返回的promise状态确定后才会进行下一步的链式调用 then3
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("2");
        resolve("newPromise");
      }, 2000);
    }).then((res) => {
      // then2
      console.log("3");
      return "newPromise1";
    });
    // 有return语句，且返回了一个promise对象，对象2中的情况1
  })
  .then((res) => {
    // then3
    console.log("4", res);
  });
// 1
// 2
// 3
// 4 newPromise1
