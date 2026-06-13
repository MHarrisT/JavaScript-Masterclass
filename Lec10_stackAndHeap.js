let myname = "Harris"
let anothername = myname
anothername = "Abid"
console.log(myname)
console.log(anothername)
// primitive data types are stored in stack, a new copy is made in memory stack

let car = {
    brand: "Honda",
    color: "black"
}

let another_car = car
another_car.color = "white"

console.table([car,another_car])
// non primitive data types are stored in heap, values accessed from heap(same memory space)