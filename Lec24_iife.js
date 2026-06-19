// IIFE -> Immediately Invoked Function Expressions (IIFE)

// this is how normal function works
// function myFunc(){
//     console.log('This is function');
// }
// myFunc()

// IIFE: the function that imeediately executes. There is problem due to pollution in global scope.
// TO remove pollution due to global variables we use IIFE

(function myFuncIIFE(){
    console.log('This is function');
})();

// to run another function we can use the following syntax:

( (name) => {
    console.log('This is another function written by', name)
})("Harris") // pass paramters in last bracket

// always add semi colon at end of first function to stop it from running infinite times