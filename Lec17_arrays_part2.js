// const car = new Object() // singleton object
const car = {}
car.brand = "Toyota"
car.name = "Corolla"
car.color = "White"
console.log(car)

const patient = {
    id: "001",
    name: "Ahmed",
    details:{
        medical_history:{
            allergies: "none",
            medicine_reactions: "none"
        }
    }
}

console.log(patient.details.medical_history) // can output multiple classes
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj3 = Object.assign(obj1, obj2) // to merge two objects, object.assign({},obj1,obj2) is another way
// {} is the source so that all objects are under this empty object
console.log(obj3)

const obj4 = {...obj1, ...obj2} // use spread operator to concatenate two objects (best syntax)
console.log(obj4)

// array of objects
const f1_Cars = [
    {
        name: "Mercedes AMG",
        engine: "Mercedes"
    },
    {
        name: "Red Bull Racing",
        engine: "Ford"
    }
]
console.log(f1_Cars[1].name) // object[index].attribute

console.log(Object.keys(car)) // getting keys of objects
console.log(Object.values(car)) // getting values of objects
console.log(Object.entries(car)) // converts it to 2d array[[key, value]]
console.log(car.hasOwnProperty('type')) // returns true if there is a key named type, otherwise returns false