let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task completed");
  }, 3000);
});

myPromise.then(message => {
  console.log(message);
});
