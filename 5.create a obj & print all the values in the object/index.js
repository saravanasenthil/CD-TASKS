// Creating an object
let person = [
  {
    name: "SARAVANA",
    age: 21,
    city: "KOVILPATTI",
    education : "B.E"
  }
  
]
  
  // for (var key in person) {
  //   if (person.hasOwnProperty(key)) {
  //     console.log( person[key]);
  //   }
  // } 
  let ans = Object.values(person);
  console.log(ans);