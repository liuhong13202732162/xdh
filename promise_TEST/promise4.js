const promise = new Promise((resolve, reject) => {
    resolve("promise");
  })
    .then(res => {
      console.log(res); // promise
      return "promise1";
    })
    .then(res => {
      console.log(res); // promise1
      return "promise2";
    })
    .then(res => {
      console.log(res); // promise2
    });