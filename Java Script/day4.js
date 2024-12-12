// // object k andr function ko define krna ( object jo h vo card ko as a reference call kr rha h)

// let obj={
// name:"gautam",
// code:490,
// desig: "development",
// company: "Bigoh",

// card: function(){
//     console.log("app sbko shadi m zaroor aana h")
// }
// }

// console.log(obj)
// obj.card()

// let arr=[1,2,3,4,5]
// arr.push('babbar')    // push ek element add kr deta h last m
// arr.pop()               // pop ek element hata deta h last m
// arr.shift()             // shift ek element hata deta h starting m
// arr.unshift('krishna')  // unshift ek element add kr deta h starting m
// arr.push('sharma ji')
// arr.push('45')
// arr.unshift('start')
// arr.splice(2,2,'element remove')  // splice ek element ko remove  , insert and or uski  jagah kch or bhi insert kr skta h
// //(2  is ki konse index se start krna h, kitne index remove krne h , kya insert krna h ) 
// console.log(arr)
// console.log(arr.slice(2,4))         // slice elements ko middle se seprate kr skta h but last one coount nhi hoga 



// let arr=[1,2,3]

// function map(number){
// let ans=map.arr
//     return number*number
// }
// console.log(map.arr)


//  filter

// let arr=[10,85,66,49,23,45,40]
// let evenArr= arr.filter((number) => {
//         if(number%2 === 0){
//             return true
//         }
//         else{
//             return false
//         }
//     })

//     console.log(evenArr)


    //  if we print both the numbers in array (even add odd)
    
// let evenArr= arr.filter((number) =>number%2 ===0)
// let oddArr=arr.filter((number) => number%2 !==0)

// console.log(evenArr)
// console.log(oddArr)

//  if any case we print string and number different
// let arr=[10,85, "rajesh", "mohit" , "sohit", 23,45,40]

// let ans=arr.filter((value) =>{
//     if(typeof(value) === 'string')
//         return true
//     else
//     return false    
// })
// console.log(ans)

//  reduce is used to use mathematical expression 

// let arr=[10,30,40,50]

// let ans=arr.reduce((acc,red) =>{
//     return acc+red
// }, 0)


// console.log(ans)

// sorting (in ascending order)
// let arr=[85,53,22,10,30,90,50]

// arr.sort()
// console.log(arr)

// sorting in decending order
// let arr=[85,53,22,10,30,90,50]

// arr.sort()
// console.log(arr)
// console.log(arr.indexOf(53))  // find index of the element

// console.log(arr.length) //find length of array

// let arr=[85,53,22,30,90,50]

// arr.forEach((value,index) => {
//     console.log("Number :" , value, "Index :" , index)
// })


// console.log(arr.includes(22,2))  //include ka mtlb vo element ya string us array m h ya nhi






// Map
// closoure
// for each ( objects k value or index ko seprate)
// sort in decending order
// false falsy
// objects MDM3


// QUESTION N variables print krwane h 

// function printSumOfVariables(...variables ){
//     console.log(variables)
//     let sum=0
//     for(let i=0;i<variables.length;i++){
//         sum+=variables[i]
        
       
//     }
    
//     return sum
    
// }
// console.log(printSumOfVariables(1,2,3,456,6,4,3,2))


