let myObj = {
    name: "alex",
    surname: "revia",
    academy: "GOA",
    isMentor: true,
    num: 100,
    hobbies: ["programming", "chess", "basketball"],
    favColor: "Blue"
};

let ul = document.getElementById("myList");

for (let key in myObj) {
    ul.innerHTML += "<li>" + key + "</li>";
    ul.innerHTML += "<li>" + myObj[key] + "</li>";
}
