const book = {
    name: "Theory of Computation",
    price: "2000 PKR",
    isPirated: false
}

const {name} = book // instead of writing book.name many times, we use this syntax
console.log(name)
const {isPirated: pirated} =  // another name can also be assigned to key and then we can use that name to output
console.log(pirated)

// destructuring
// const navbar = ({company}) => {

// }
// navbar(company="abc")

// json
// {
//     "name": "Abid",
//     "cgpa": 3.8
// }

// apis are also found from array
// use json formatter to learn about apis