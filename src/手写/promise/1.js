new Promise((resolve) => {
  setTimeout(() => {
    console.log(666); // 3
    new Promise((resolve) => {
      resolve(); // 5
    }).then(() => {
      console.log(777);
    });
  });
  resolve();
})
  .then(() => {
    new Promise((resolve) => {
      resolve();
    })
      .then(() => {
        console.log(111);
      })
      .then(() => {
        console.log(222);
      });
  })
  .then(() => {
    new Promise((resolve) => {
      resolve();
    })
      .then(() => {
        new Promise((resolve) => {
          resolve();
        }).then(() => {
          console.log(444);
        });
      })
      .then(() => {
        console.log(555); // 29
      });
  })
  .then(() => {
    console.log(333); // 33
  });
