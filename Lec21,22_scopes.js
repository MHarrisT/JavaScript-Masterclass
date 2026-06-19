// let a = 10
// const b = 20
// var c = 30

let a = 619
if (true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("Inside brackets: ", a)
}

//console.log(b) // b not displayed as it was declared out of scope
//console.log(c) // var not affected by scope, so not used
//console.log("Outside brackets: ", a)

// Lec 22: nested scopes

function myFuncOne(){
    const name = "Ali"
    function loginDetails(){
        const carName = "Corolla"
        console.log("Welcome", name)
    }
    //console.log(carName) // carName scope is within the logindetails function
    // inner function can access variables of outer function but outer can not access variables of inner
    loginDetails()
}

//myFuncOne()

if (true){
    const option = 'Y'
    if (option === 'Y'){
        const message = "Hello!"
        console.log("The option you choosed was: ",option)
    }
    // console.log(message) // message scope is within the inner if block
}

console.log(addOne(7))

function addOne(num){
    return num+1
}

// console.log(addTwo(5))   // can not access function as it is held under a variable

const addTwo = function(num){
    return num+2
}