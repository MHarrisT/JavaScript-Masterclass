// for loop

for (let index = 0; index < 10; index++){
    console.log(index)
}

// index can not be accessed out of the for loop scope

for (let i=0; i<5; i++){
    if (i % 2 == 0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}

// nested for loop

for (let i=0; i<3; i++){
    console.log(`====Outer loop value: ${i}=====`)
    for (let j=0; j<5; j++){
        console.log(`Inner loop value: ${j}`)
    }
}

let arr = ["hello", "world", 1,2,3]

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// break and continue

console.log("=====Break=====")
for (let i=0; i<=10; i++){
    if (i === 5) break // when 5 detected we come out of the loop
    console.log(i) 
}

console.log("======Continue======")
for (let i=0; i<=10; i++){
    if (i === 5) continue // when 5 detected we skip that iteration
    console.log(i) 
}
