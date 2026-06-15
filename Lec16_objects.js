// singleton: objects created with constructor are singleton
// objects when declared as literal and with no constructor are not singleton

// object literals
// Object.create // constructor method->singleton designed

const sym1 = Symbol("key1")

const Student={
    name: "Abid",
    "full name": "Abid Ali",
    [sym1]: "Unemployed", // use [] to use it as symbol datatype
    cgpa: 2.8,
    semester: 6,
    marks: [84, 83, 76, 80, 80],
    email: "l230000@lhr.nu.edu.pk",
    isWarning: false
}

console.log(Student.name) // accessing attributes
console.log(Student["email"]) // another way of accessing attributes in object is to use[] and write attribute in ""
console.log(Student["full name"]) // can not access full name using . notation, have to use [""]
// console.log(Student.sym1) // this is used as string datatype not symbol
// console.log(typeof Student.sym1)
// console.log(Student[sym1])

Student.isWarning = true
//console.log(Student)
// Object.freeze(Student) // used to disable any changes made in the object

Student.cgpa = 3.3
//console.log(Student) // no change in cgpa after object.freeze used

Student.avg = function(){
    let total = 0
    for (let i=0; i<this.marks.length;i++){
        total+=this.marks[i]
    }
    console.log("Average Marks: "+ total/5)
}

Student.checkStatus = function(){
    
}

console.log(Student.avg) // outputs undefined
console.log(Student.avg()) // function works but still undefined is shwon