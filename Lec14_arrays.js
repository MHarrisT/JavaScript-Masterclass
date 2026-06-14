const arr = [10,20,30,40,50,60]
console.log(`Original array: ${arr}`)

const newArr = new Array(5,10,15,20,25) // array of type obejct created
// shallow copy vs deep copy
// shallow copy: properties share the same memory reference. When you make a change, the source changes
// deep copy: properties do not share the same memory reference. When you make a change, the source does not change

arr.push(70) // adds element to the end of array
console.log(arr)
arr.pop() // removes element from the end of array
console.log(arr)

arr.unshift(619) // adds element to the start of array
console.log(arr)
arr.shift() // removes element to the end of array
console.log(arr)

console.log(newArr.includes(25)) // returns true if the value is in the array, otherwise returns false
console.log(newArr.indexOf(25)) // returns index of the element in the array, otherwise returns -1

const arr1 = arr.join() // changes array into string
console.log(arr)
console.log(`Array after join function: ${arr1}`)
console.log(typeof arr1)

// slice vs splice

// slicing: creates a copy of the array and then slices by taking start index and end index
const sliced_Arr = newArr.slice(2,4)
console.log("Original Array: "+ newArr)
console.log("Sliced array: "+ sliced_Arr)

// splicing: uses the same array and then splices the array, it changes the original array
const spliced_Arr = newArr.splice(2,4)
console.log("Original Array: "+ newArr)
console.log("Spliced array: "+ spliced_Arr)