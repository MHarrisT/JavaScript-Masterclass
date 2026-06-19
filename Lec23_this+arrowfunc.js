// this keyword tells about current context
const user = {
    username: "ahmed",
    price: 500,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "abid"
// console.log("==========Username changed over here==========")
// user.welcomeMessage()

// console.log(this) // refers to an empty object

function myFuncOne(){
    console.log(this)
}

function myFuncTwo(){
    let message = "Hello"
    console.log(this.message)
}

const myFuncThree = function(){
    let message = "Hello"
    console.log(this.message)    
}

const newFunc = () =>{ // arrow function
    let message = "Hello"
    console.log(this.message) 
}

const squareOfNum = (num1) =>{
    return num1 * num1
}

const addNum = (num1, num2) => (num1+num2) // implicit return

const myObj = () => ({bookname: "The Wizard Of Oz", isPaperback: true}) // objects can be returned using implicit return

myFuncOne() // returns many global values
myFuncTwo() // outputs undefined as this is not aware of context of username 
myFuncThree() // outputs undefined as this is not aware of context of username 
newFunc() // returns undefined
console.log(squareOfNum(5))
console.log(addNum(6,7))
console.log(myObj())