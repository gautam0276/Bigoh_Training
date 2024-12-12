// const arr=[1,2,3,4,5]

// let newArray=[]
// for(let item of arr){
//     newArray.push(item**2)
// }
// console.log(newArray)

// const arr=[1,2,3,4,5]

// console.log(arr.indexOf(5))

// hoisting

// console.log(x)

// var x=5 
//  console.log(x) 
 
//  greet()

//  function greet(){
//      console.log("hello friends")
//     } 

//     greet()

//     // greeting() 


//   const greeting = (value) =>{         //arrow function k case m hoisting nhi hoti
//     console.log("BigOh Tech")
//   }
//     greeting()

// function array () {
//     let arr=[1,2,3,4,5,6]
//     function newArray () {
//         let arr=[7,8,9,10,11,12]
//             console.log(arr)        
//     }
//     newArray()
// }
//  array()

//  wrong code
// function printHello(){
//  var outerVar="Hello"
//  function printName(name){
//     console.log(outterVar +name)  
//  }
// return printName()
// }
// var name=printHello()
// name("rahul")


// function printHello(){
//     var firstLetter="Hello "
//     function printName(name){
//         console.log(firstLetter+name)
//     }
//      printName("Gautam")
// }
//  printHello()

// Scopes

// function sum(x,y){
//     let add=x+y
//     console.log(add)
// }
// sum(5,6)

// Call back function

// function printHello(){
//     console.log("Hello")
// }
// function add(x,y){
//     console.log(x+y)
// }
// add(5,3)
// printHello()

// function add(a, b) {
//     return a + b;
//   }
  
//   function sub(a, b) {
//     return a - b;
//   }
  
//   function multi(a, b) {
//     return a * b;
//   }

// function calculate(a,b,operation){

//     let ans

//     switch(operation){
//         case "add":
//             ans=add(a,b)
//             break;
//             case "sub":
//                 ans=sub(a,b)
//                 break;
//                 case "multi":
//                     ans=(a,b)
//                     break;
//                     default:
//                         ans="invalid"

//     }
// return ans
// }
// console.log(calculate(5,5,"add"))




// const arr=[1,2,3,4,5]
// let square= arr.map(num => num*num)
// console.log(square)

// const str="gautam"
// const newString = str.split("").map((char)=> char)
// console.log(newString)

// const str="ritesh"
// console.log(str.split(""))


// arr=[1,2,3,4,5,6,7,8]
// const newArr=arr.filter(num=> num%2==0)
// console.log(newArr)

// arr=[1,2,3,4,5,6,7,8]
// arr.push(12)
// arr.pop()
// console.log(arr)
// const newA=arr.reduce((acc, num)=>acc+num , 0)
// console.log(newA)

// let arr = [1, 2, 3,5,6,7,8,9];
// arr.fill(0, 1, 3);
// console.log(arr)

// Dot notation and Bracket notation

// const obj={
//     name:"gautam",
//     "employee code":490,
//     company:"BigOh",
//     "phone No": 123456789
// }

// console.log(obj.name)
// console.log(obj["employee code"])
// console.log(obj.company)
// console.log(obj["phone No"])

const obj={
    colour:"red",
    company:"Tata",
    safety:"5 star",
    features:{
        "music system" :"sony",
        cover: "bucket seat",
        rim:"alloys"
    }
}
obj.colour="blue"

console.log(obj,obj.features)