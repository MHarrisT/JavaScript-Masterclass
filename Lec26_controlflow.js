// if statements for running different blocks of code according to the requirement

// const isUSerLoggedIn = true

// if (isUSerLoggedIn){

// }

// comparison operators: < (less than), > (greater than), <= (less than equal), >= (greater than equal),
// == (equals to), != (not equals to)

// if (2 == "2") // code runs true as == does not check datatype
// if (2 === "2") code runs false as === checks datatype

const score = 50

if (score > 50){
    console.log("Pass")
}

// var scope is completely global so not used

// logical operators also used in condition checking
// && = AND, || = OR

// switch statements

const grade = 'A'

switch (grade){
    case 'A' :
        console.log("Excellent")
        break // break written to stop the code from further executing the switch block
    case 'B':
        console.log("Very good")    
        break
    default:
        console.log("Please re enter grade") // acts as an else block
}

// if string has value, true runs, if there is empty string, false runs

// falsy values : false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values: "0", "false", " ", [], {}, function(){}

const names = []

if (names.length === 0){ // to check if array is empty
    console.log("Empty")
}

const cars = {}

if (Object.keys(cars).length === 0){ // object.keys(objectName) returns an array and then we can use the length function to check if object is empty
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null defined

let var1 = 10
// var1 = 5 ?? 10 // assigns the first value to variable
// var1 = null ?? 10 // assigns a value that is not null or undefined
console.log(var1)

// Ternary operator: operation ? true : false
let var2 = 5

var1 > var2 ? console.log("Var 1 is greater"): console.log("Var 2 is greater")