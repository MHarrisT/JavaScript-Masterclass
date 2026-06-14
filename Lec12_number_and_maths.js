// Number Functions
const marks = 85
console.log(marks)
console.log(typeof marks)

const new_marks = new Number(95) // object of number type is created
console.log(new_marks) // its output is different than just a number
console.log(`Converting marks to string: ${new_marks.toString()}`)
console.log(`adding deciaml values: ${new_marks.toFixed(3)}`) // appended 3 decimal digits after marks (95.000)

const car_price = 2849999
console.log(`Price of car: ${car_price.toLocaleString()}`) // adds comamas between numbers to make them readable accordingly as hundeds, thousands, millions

// Math Functions
console.log(Math.abs(-67)) // converts negative value to positive
console.log(Math.floor(4.5)) // gets the floor value
console.log(Math.ceil(6.2)) // gets the ceil value
console.log(Math.round(6.18)) // rounds the value to nearest whole number
console.log(Math.min(5,4,6,7,2,3)) // finds the minimum value 
console.log(Math.max(5,4,6,7,2,3)) // finds the maximum value 

// Random functions
console.log(Math.random()) // gives a value between 0 and 1 in decimals
console.log((Math.floor(Math.random()*10) + 1)) // provides a value between 1 and 10 inclusive, +1 added in case rand value is 0.000.....

const min = 15
const max = 25
console.log(Math.floor(Math.random() * (max-min+1)+min)) // max-min+1 defines the range, +min added to get values between 15 and 25