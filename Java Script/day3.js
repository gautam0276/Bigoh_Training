// //  Basic Function Defination

// function nameOfFunction(){

// //  do any task perform here
// }

// //  after that call the function
// nameOfFunction()


// question

// function printCounting(){
//     for(let i=1;i<=20;i++)
//         console.log(i)
// }

// printCounting()

// function addTwoNumber(num1,num2){
//     let sum=num1+num2
//     console.log("value of num1 and num2 is " ,sum )

// }

// addTwoNumber( 3,3)


// reverse a string
// function reverseString(str){

// return str.split('').reverse().join('');

// }
// const obj= {
//     name:"good",
//     age:2
//     split:['bkhkj','jhjh']
// }

// console.log(obj.name);
// const var1= str.split('')
// const var2= var1.reverse()
// const var3= var2.join('')

// console.log(reverseString("hello"))


// Check number is prime or not

// function isPrime(num){
// if(num<=1) 
//     return false
// for(let i=2;i<num;i++){
//     if(num%i===0){
//         return false
//         }
// }
// return true
// }

// console.log(isPrime(12))
// console.log(isPrime(13))


// function factOfN(num){
   

//     if(num===0) return 1
//     return num*factOfN(num-1)
// }
// console.log(factOfN(6))

function printSum(a,b,c){
let sum=a+b+c
return sum

}
console.log("sum of three number is " , printSum(1,2,3))

let sumOfNumbers=(a,b)=>{
// let sum=a+b
// return sum
    return a+b
}

let sumOfNumberss= a=>a*2

c
console.log(sumOfNumbers("sum of two numbers is ", 5,6))
console.log(sumOfNumbers("sum of two numbers is " , 5,9))