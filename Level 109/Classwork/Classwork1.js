function checkNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve("resolve");
      } else {
        reject("reject");
      }
    }, 2000);
  });
}

async function run() {
  try {
    const result = await checkNumber(15);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();
