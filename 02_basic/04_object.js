// const tinderUser = new Object() 

const tinderUser ={}

tinderUser.id = "101"
tinderUser.name="abc"
tinderUser.isLoggenIn=false

// console.log(tinderUser);

const regularUser ={
    email : "ac@gmail.com",
    fullname:{
        userFullname:{
            firstname:"ram",
            lastname:"sita",
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"abc@gmail.com"

    },
      {
        id:1,
        email:"abc@gmail.com"

    },
]
//  users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));


 const course = {
    coursename: "js",
    price: "1000"

 }
//  course.cousename

const {coursename} = course
console.log(coursename);

 


 
 

