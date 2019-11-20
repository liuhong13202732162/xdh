var p1 = new Promise(function (resolve, reject) {
    resolve('成功');
  });
  p1.then(console.log, console.error);
  // "成功"
  
  var p2 = new Promise(function (resolve, reject) {
    reject('失败');
  });
  p2.then(console.log, console.error);
  // Error: 失败