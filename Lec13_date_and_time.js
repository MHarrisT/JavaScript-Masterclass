let mydate = new Date()
console.log(mydate)
console.log(typeof mydate) // shows date as an object
// outputting different formats of date and time
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toString())
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())

let custom_date = new Date(2026,5,23) // yyyy-mm-dd (month starts from 0)
console.log(custom_date.toLocaleDateString())

let custom_datetime = new Date(2026,5,23,18,34,12) // yyyy-mm-dd hh-mm-ss
// to write time in pm, use 24hr clock format for hrs
console.log(custom_datetime.toLocaleString())

let modern_date = new Date("06-14-2026") // to write in "", mm-dd-yyyy
console.log(modern_date.toLocaleDateString())

// get current time (in milliseconds)
let currentTimeStamp = Date.now()
console.log(currentTimeStamp) // in milliseconds
console.log(Math.floor(currentTimeStamp/1000)) // in seconds

// we can modify how to see the format of date
console.log(mydate.toLocaleString('default',{
    dateStyle: "full",
}))