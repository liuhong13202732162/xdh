const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.random();
  
      if (num > 0.5) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 500);
  });
  
  promise.then(
    res => {
      console.log("成功:" + res);
    },
    err => {
      console.log("失败:" + err);
    }
  );