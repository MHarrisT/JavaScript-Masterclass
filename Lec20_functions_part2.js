// function with arrays
function calculateCartPrice(...num1){ // ... is rest/spread operator
    return num1 // returns as array
}
function calculateCartPriceNew(num1, num2,...num3){ // ... is rest/spread operator
    return num3 // returns as array
}

function getVal(array){
    return array[3]
}

// function with objeccts
function handleObject(myobject){
    console.log(`My name is ${myobject.name} and my cgpa is: ${myobject.cgpa}`)
}

console.log(calculateCartPrice(10,20,30)) // array is printed

console.log(calculateCartPriceNew(10,20,30,40,50,60)) 
// first two values are not printed as they are assigned as arguments num1 = 10 and num2 = 20 and the remaining numbers are returned as array

const student = {
    name: "Ali",
    cgpa: 3.4
}

handleObject(student) // keys and datatypes should be same

const arr = [4,5,6,7,8,9]

console.log(getVal(arr))