// const word1 = "hello"
// const word2 = "world"
// console.log(word1 + word2) // this is old way of concatenating strings
// const name = "Harris"
// const semester = 6
// console.log(`I am ${name} and a student of semester ${semester}`) // use this syntax -> string interpolation, placeholders are used to store variables and then show them in output

const str = new String("the quick brown fox jumps over the lazy dog") // object of string type is created
// we can access many string methods using the string class
// the string is passed as the constructor for the object
console.log(`String: ${str}`)
console.log(`Uppercase String: ${str.toUpperCase()}`) // convert to uppercase
console.log(`Length of string: ${str.length}`) // length of string
console.log(`Character at index 18: ${str.charAt(18)}`) // char at index
console.log(`Index of character q: ${str.indexOf('q')}`) // index of char
console.log(`Prototype: ${str.__proto__}`) // outputs empty
// substring and slicing
const substr = str.substring(0,19)
console.log(`Substring: ${substr}`)
const slicestr = str.slice(0,19)
console.log(`Forward Slicing: ${slicestr}`)
const newstr = str.slice(-8,-4) // for reverse slicing, use negative values, -1 is the last char and as we move to left negative value increases
console.log(`Backward Slicing: ${newstr}`)
const words = str.split(' ')
console.log(`String after split: ${words}`)

// trim and replace
const anotherstr = "        hello           "
console.log(`Original String: ${anotherstr}`)
console.log(`Trimmed String: ${anotherstr.trim()}`) // trim removes spaces from start and end
const str1 = "today is raining"
console.log(str1.replace("raining","sunny"))