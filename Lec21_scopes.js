// let a = 10
// const b = 20
// var c = 30

let a = 619
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inside brackets: ", a)
}

//console.log(b) // b not displayed as it was declared out of scope
//console.log(c) // var not affected by scope, so not used
console.log("Outside brackets: ", a)
