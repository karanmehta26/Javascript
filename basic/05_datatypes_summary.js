// primitive
// 7 types:- String, Number, Boolean, Null, Undefined, Symbol, BigInt.

// const score = 100
// const score = 100.03

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

// console.log(id ===anotherId);

const bigNumber = 123123123123123n



//Reference (Non primitive)

// Array, Objects, Functions.

const heros =["hulk","iron man"]

let myObj  ={
    name:"ram",
    age:20,
}

 const myFunction = function(){
    console.log("hello word");
    
 }

//  console.log(typeof heros);


 //***********************************memory**********************************//


  // stack(primitive)
 // heap(non-primitive) 

let myYoutubename ="ram"

let anotherName = myYoutubename
anotherName="sita"

console.log(myYoutubename);
console.log(anotherName);

let userOne ={
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email="ram@google.com"

console.log(userOne.email);
console.log(userTwo.email);




