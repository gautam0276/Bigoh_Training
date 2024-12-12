// const arr=[1,2,3,4]

// const [a,b,c,d]=arr
// console.log("a:" ,a)
// console.log("b:", b)
// console.log("c:", c)
// console.log("d:", d)

// const arr = [1, 2, 3];
// const [, , one] = arr; // Skip the first element
// console.log(one)


// const arr=[1,2,3,4,5]
// const [o,t,f,...rest]=arr

// console.log("o:" ,o)
// console.log("t:", t)
// console.log("f:", f)
// console.log("...rest", ...rest)
// console.log(...rest)



// const obj={

//     name:"gaurav",
//     age:22,
//     block:"c"

// }

// const fullName=name 
// const years=age
// console.log(fullname)
// console.log(years)

// copying an array

// const arr=[5,6,9,7,5]

// const newArr=[...arr]
// console.log(arr)
// console.log(newArr)

// merge an array

// const arr=[2,4]
// const arr1=[6,8]

// const mergeArr=[...arr,...arr1]
// console.log(mergeArr)

// Inserting element an Array

// const arr=[2,3,4]
// const insertArr=[1,...arr,5]

// console.log(insertArr)

// copying an object

// const obj={

//     name:"gaurav",
//     age:22,
//     block:"c"

// }
// // const newObj={...obj}
// // console.log(newObj)

// const newObj={designation:"devops" ,...obj}
// console.log(newObj)


// const name={ name:"gautam" }
// const age={ age:19}
// const mergeObj={...name,...age}
// // console.log(name,age)
// console.log(mergeObj)


// Function using spread

// const arr=[1,2,3,4,5]
// const [a,b,c,d,e]=arr

// function newArr( v1,v2,v3,v4,v5){
//     return v1+v2+v3+v4+v5
    
// }

// const newArr1=[1,2,3,4,5]
// console.log(newArr(...newArr1))



// const obj={

//         name:"gaurav",
//         age:22,
//         block:"c"
    
//     }

//     const updatedObj={...obj,age:23,designation:"react"}
//     console.log(updatedObj)


// destructing

const arr=[1,2,3,4]
const [a,b,...d]=arr
console.log("a is", a)