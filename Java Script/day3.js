// // //  Basic Function Defination

// // function nameOfFunction(){

// // //  do any task perform here
// // }

// // //  after that call the function
// // nameOfFunction()


// // question

// // function printCounting(){
// //     for(let i=1;i<=20;i++)
// //         console.log(i)
// // }

// // printCounting()

// // function addTwoNumber(num1,num2){
// //     let sum=num1+num2
// //     console.log("value of num1 and num2 is " ,sum )

// // }

// // addTwoNumber( 3,3)


// // reverse a string
// // function reverseString(str){

// // return str.split('').reverse().join('');

// // }
// // const obj= {
// //     name:"good",
// //     age:2
// //     split:['bkhkj','jhjh']
// // }

// // console.log(obj.name);
// // const var1= str.split('')
// // const var2= var1.reverse()
// // const var3= var2.join('')

// // console.log(reverseString("hello"))


// // Check number is prime or not

// // function isPrime(num){
// // if(num<=1) 
// //     return false
// // for(let i=2;i<num;i++){
// //     if(num%i===0){
// //         return false
// //         }
// // }
// // return true
// // }

// // console.log(isPrime(12))
// // console.log(isPrime(13))


// // function factOfN(num){
   

// //     if(num===0) return 1
// //     return num*factOfN(num-1)
// // }
// // console.log(factOfN(6))
// /* 

// function printSum(a,b,c){
// let sum=a+b+c
// return sum

// }
// console.log("sum of three number is " , printSum(1,2,3))

// let sumOfNumbers=(a,b)=>{
// // let sum=a+b
// // return sum
//     return a+b
// }

// let sumOfNumberss= a=>a*2


// console.log(sumOfNumbers("sum of two numbers is ", 5,6))
// console.log(sumOfNumbers("sum of two numbers is " , 5,9))
// */

// /*

// function nameOfPerson(a,b,c,...others){
    
//     let sum=a+b+c
//     console.log(others)
// for( let i=0;i<=others.length-1;i++){
//     console.log(others[i])
//     sum=sum+others[i]
// }
//     return sum
// }
// console.log(nameOfPerson(1,2,3,6,5))
// */


// // Function Hoisting 



//     printMyName("Gautam")

//     function printMyName(name){

//     console.log(name)
//     // return name
// }

// //  Variable Hoisting ( is case m hum hoisting krte h to value undefined aati h)


//  var age=20

//  console.log(age)


//  console.log(age1)

//  var age1=18

 // use let and const      

// let num=1234567890

// console.log(num)

// // console.log(num1)       (Ye case hume error de dega kyuki hum define krne se phle print nhi krwa skte)

// // let num1=1234567890

// const salary=123456;

// console.log(salary)

// // console.log(salary1)       (e case hume error de dega kyuki hum define krne se phle print nhi krwa skte)

// // const salary1=123456                 (let and const both cases phle declare kna pdta h)

/*
function printName() {
    console.log("My name is Gautam")
    function sayMyName(){
        console.log("My name is gautam")
    }
    sayMyName()
    
}
printName()
*/


// function printName() {
//     let name="gautam"
//     function sayMyName(){
//         console.log("sharma")
//         console.log(name)
//     }
//     sayMyName()
    
// }
// printName()

//  CLOSURE ( it means ki outer function apne inner wale function ko
//  bind kr leta h apne sath - inner value fixed ho jati h means)


/*
let name="gautam"
function outerFunction(){
    let name="mohit"
    function innerFunction(){
        let name="shiv"
        console.log(name)
    }   
    innerFunction()
}
outerFunction()
*/


// pass by value ( isme value pass hoti h lkin vo phle ki value h vo b
//                              hi rhti h delete nhi hoti)
function printAge(num){
    let age=20
    console.log(age)

}
let newAge=22
printAge(newAge)
console.log(newAge)


// pass by reference

function
let employee={
    name:"gautam",
    designation : "development",
    number : 1234567890,

}
console.log(employee)
let name="mahesh"
employee(name="mahesh")
console.log(employee)
