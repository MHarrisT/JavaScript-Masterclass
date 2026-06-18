function myFunc(){
    console.log("hello world")
}

function addNumbers(num1, num2){
    console.log(num1+num2)
}

function addNums(num1,num2){
    // let res = num1+num2
    // return res
    return num1+num2
}

function loginMessage(name = "John Doe"){ // default values can be assigned to function parameters
    if (/*name === undefined*/ !name){
        console.log("No username entered")
        return
    }
    return `${name} just logged in`
}

//myFunc // this is reference of function, just tells that function exists
myFunc() // execution of function
addNumbers(2,2)
addNumbers(3,"4") // concatenates the numbers 
// parameters: input written when function definition written
// arguments: passed when function is called
const res = addNums(3,5)
console.log(res)
console.log(loginMessage("Abid")) 
console.log(loginMessage()) // if u do not pass any argument in function call, it returns undefined