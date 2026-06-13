// Two main types of data

// 1) Primitive datatypres-> string, int, bigint, boolean, null, undefined, symbol
const interest_rate = 2     // int
let interest_type = "simple" // string
let bigIntNum = 45673284829858930485325253253485934n // n used to define bigint number
const isMoneyDeposited = false // boolean
// output bigint number and its type
console.log(bigIntNum)
console.log(typeof bigIntNum) 
let state = null // null
let new_interest_rate; // undefined

// 2) Non-Primitive datatypes-> Array, Objects, Function

let student_scores = [77,74,72,89,65]
console.log(student_scores)
console.log(typeof student_scores) // type of array is object

let student= {  // object
    name: "Ali",
    cgpa: 3.5,
    semester: 6
}

const my_func = function(){
    console.log("This is a function")
}

console.log(typeof my_func) // type if my_func is function