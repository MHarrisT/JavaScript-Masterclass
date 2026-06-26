const arr = [10,20,30,40,50]

// forof loop
// for (const element of arr) {
//     console.log(element)
// }

// maps
const map = new Map()
map.set('PKR', "Pakistani Rupees")
map.set('USD', "US Dollar")
// console.log(map)

for (const [key,value] of map){
    console.log(key, ":-",value)
}

// objects
// forof cannot be used to iterate objects

const game = {
    name: "GTA VI",
    price: 100,
    genre: "Action"
}

// forin loop used for objects
for (const key in game) {
    console.log(`Key: ${key}, Value: ${game[key]}`)    
}

for (const key in arr){
    console.log(key) // prints index
    console.log(arr[key]) // prints array content
}

// not iterable in map
for (const key in map){
    console.log(key)
}

// foreach loop
const names = ["A", "B", "C", "D", "E"]
names.forEach(function (name) {
    console.log(name)
})

// foreach using arrow function
names.forEach((name) => {
    console.log(name)
})

// function calls can also be used in foreach

function printFunc(element){
    console.log(element)
}

names.forEach(printFunc) // only pass reference of function

names.forEach((name,index, names ) => {
    console.log(name, index, names) // prints element, index and whole array
})

const consoles = [
    {
        name: 'PS5',
        price: 600
    },
    {
        name: 'Xbox series X',
        price: 500
    },
    {
        name: 'Nintendo switch',
        price: 400
    }
]

consoles.forEach((item)=>{ // item here is the object and then we access its attributes
    console.log(item.name, item.price)
})