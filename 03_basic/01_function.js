function sayMyName (){
    console.log("k");
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("n");

}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }

 function addTwoNumber(number1, number2){

//   let result = number1+number2
//   return result
    
    return number1+number2
 }

const result = addTwoNumber(3,4)

// console.log(result);

function LoginUserMessage(username = "ram"){
    if (username === undefined){
        console.log("Please Enter a Username ");
        return
    }
    return `${username} just Logged In`
}

// console.log(LoginUserMessage("ram"))
// console.log(LoginUserMessage())

 





