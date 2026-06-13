let anyValue = 33
console.log("Output: "+ anyValue)
console.log("Type: "+ typeof anyValue)
let new_string = String(anyValue)
console.log("Output: "+ new_string)
console.log("Type: "+ typeof new_string)

let anyString = "66"
console.log("Output: "+ anyString + "(in string)")
console.log("Type: "+ typeof anyString)
let updatedValue = Number(anyString) // =>converts string to number
console.log("Output: "+ updatedValue)
console.log("Type: "+ typeof updatedValue)

let anything = "45abc"
console.log("Output: "+ anything + "(in string)")
console.log("Type: "+ typeof anything)
let updated = Number(anything) // string + num to num will give output as NaN (not a number), null outputs to 0 and undefined outputs to NaN
console.log("Output: "+ updated + "(in string)")
console.log("Type: "+ typeof updated)

let value = true
let new_value = Number(value)
console.log(new_value)

let isLoggedIn = false 
let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)

// 33-> "33" (num to string)
// "33"->33, "45abc"->NaN, true->1, false->0 (string to num, bool to num)
// 1->true, 0->false, ""->false, "anything written"->true (num to bool, string to bool)

console.log("============LEC 7============")
console.log(1+"2"+"2")
console.log(1+2+"2")

console.log("============LEC 8============")
console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2 == "2") // == does not check datatype
console.log(2 === "2") // === checks datatype, strick equality operator
// better not to compare null or undefined with 0