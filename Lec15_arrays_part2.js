const even = [0,2,4,6,8]
const odd = [1,3,5,7,9]

// even.push(odd) // this pushes the whole odd array in the even array, we have to merge!
// console.log(even) 

const arr = even.concat(odd)
console.log(arr) // this concatenates the array, but there is a better way 

const newArr = [...even, ...odd]
console.log(newArr)

const arr1 = [1,2,3,[4,5,[6,7]]]
const flattenArray = arr1.flat(Infinity) // in paramters you can tell the dimension of how much to flatten
console.log(flattenArray)

console.log(Array.isArray(even)) // returns true if the parameter provided is an array, otherwise returns false
console.log(Array.from("Harris")) // converts string to array

let name = "Ali"
let subject = "English"
let marks = 65

console.log(Array.of(name,subject,marks)) // variables are added to create to single array