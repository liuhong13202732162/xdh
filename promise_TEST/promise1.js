const promise = new Promise((resolve, reject) => {
    console.log("我是第一个执行的");
    resolve();
  });
  
  promise.then(res => {
    console.log("我是第三个执行的");
  });
  
  console.log("我是第二个执行的");