function checkString(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str.length % 2 === 0) {
        resolve(str);
      } else {
        reject(str);
      }
    }, 2000);
  });
}

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("Resolved:", results);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
