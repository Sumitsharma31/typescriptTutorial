

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

// Union And any
let paymentStatus:'pending'| 'success'| 'error'='pending';
paymentStatus='success';   //accept only these 3 options

//any --Avoid any because it removes type safety.
let value: any = 10;
value = "Hello";
value = true;

//unknow --Safer than any.
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}


//Data Types 
let isActive: boolean = true;
let age: number = 22;
let name: string = "Sumit";
let skills: string[] = ["HTML", "CSS", "TS"];
let tuple: [string, number] = ["Age", 22];


//Function with type annotations
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);


// Arrow function in TypeScript
const multiply = (a: number, b: number): number => a * b;

//never 
function throwError(message: string): never {
  throw new Error(message);
}

//Generic array:
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst([1, 2, 3]);
getFirst(["a", "b"]);