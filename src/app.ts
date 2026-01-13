import console = require("node:console");

function greet(name:string):string{
  return `Hello ${name} Welcome Back`
}
console.log(greet('Sumit'));

// infrensing in ts

let food="bread";
// food=5;

// Annotation in ts
let games:string='football';
console.log(games);

let userDetail:string | number;

userDetail='Bihar'
userDetail=7788995544;