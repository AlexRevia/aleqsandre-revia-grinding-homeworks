// Classwork 1
async function getFootballData() {
  const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
  } 
  catch (error) {
    console.error("Error fetching data:", error);
  }
}

getFootballData();


// Classwork 2
function getRandomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("success");
      } else {
        reject("fail");
      }
    }, 2000);
  });
}

async function handlePromise() {
  try {
    const result = await getRandomPromise();
    console.log("Resolved value:", result);
  } catch (error) {
    console.log("Rejected value:", error);
  }
}

handlePromise();

// Classwork 3
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();