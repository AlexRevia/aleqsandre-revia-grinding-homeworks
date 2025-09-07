let Obj1 = {
    name: "alex",
    surname: "revia",
    academy: "GOA",
    city: "tbilisi",
    role: "student",
    favColor: "green",

    fullName: function() {
    console.log(this.name + " " + this.surname);
    },

    showFavColor: function() {
    console.log( this.favColor);
    }
    
}

console.log(Obj1);

console.log(Obj1.city);

Obj1.fullName();
Obj1.showFavColor();

Obj1.favColor = "blue";
console.log(person.favColor);