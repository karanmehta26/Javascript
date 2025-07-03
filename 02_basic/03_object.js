// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser ={
    name:"ram",
    age: 20,
    "full name": "ram sita",
    [mySym] : "mykey1",
    location:"india",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","sunday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email="xyzgoogle.com"
// Object.freeze(Jsuser)
Jsuser.email="xyzmicrosoft.com"
// console.log(Jsuser["email"]);

Jsuser.greeting = function(){
     console.log("hello world");
    
}

Jsuser.greetingTwo = function(){
     console.log(`hello world, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






