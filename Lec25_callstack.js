// how does code execute, how does call stack work
// call stack
// javascript execution context:
// 1) global execution context (this)
// 2) function execution context
// 3) eval execution context
// Memory Creation Phase -> Execution Phase ->

// execution phase example:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)
// 1 - global execution (this) -> memory phase: variables collected (val = undefined, val2 = undefined, addNum = definition(func def), result1 = undefined, result2 = undefined) this is cycle 1
// 2 - execution phase (val1 <- 10, val2 <- 5, addNum creates another execution context where new variable environment and execution thread)
// 3 - now for the new execution context (addNum), memory phase created (val1, val2, total are undefined) -> execution context (num1->10, num2->5, total->15). value returned to global executional context
// 4 - new executional context is deleted after its job is done. we come back to global execution
// 5 - now result1 = 15 and whole process repeated from step 2 for result2

// call stack (lower to upper): global exec -> one (executed and removed from stack) -> two() -> three()
// stack is LIFO (last in first out)