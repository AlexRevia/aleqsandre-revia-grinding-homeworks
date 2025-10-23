function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.random();
      if (num > 0.5) {
        resolve(`Resolve: ${num}`);
      } else {
        reject(`Reject: ${num}`);
      }
    }, 2000); 
  });
}

randomPromise()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });


// Classwork 2
function alwaysResolved() {
  return new Promise((resolve) => {
    resolve("resolved");
  });
}

const p1 = alwaysResolved();
const p2 = alwaysResolved();
const p3 = alwaysResolved();

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  });

