// foreach does not return values

const arr = [1,2,3,4,5,6,7,8,9,10]
// const newArr = arr.filter((num)=>num>6)
// console.log(newArr)

// const anotherArr = arr.filter((num)=>{
//     return num < 4 // if {} is used always write return
// })
// console.log(anotherArr)

// another way of writing without filter
const newArr = []
arr.forEach((num)=>{
    if (num < 4){
        newArr.push(num)
    }
})
// console.log(newArr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const newbooks = books.filter((book) => book.genre === 'Science')
// console.log(newbooks)

const books1 = books.filter((book)=>{
    return book.publish >= 1980 && book.genre === "Fiction"
})

// console.log(newbooks)

// map
const arr1 = arr.map((num)=> num*10)
// console.log(arr1)

// chaining
const arr2 = arr.map((num) => num + 5).map((num) => num + 10).filter((num) => num > 17)
console.log(arr2)

const arr3 = [1,2,3]

// reduce function
const total = arr3.reduce(function (acc, currval){
    console.log(`Acc: ${acc} and current val: ${currval}`)
    return acc + currval
}, 0)
console.log(total)

const myTotal = arr3.reduce((acc, currval)=>acc+currval,0)
console.log(myTotal)

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

const total_price = consoles.reduce((acc, item) => acc + item.price, 0)
console.log(total_price)